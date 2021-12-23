import { natsWrapper } from './nats-wrapper';
import { DeviceBoughtPublisher } from '../events/publishers/device-bought-publisher';
var { MailListener } = require("mail-listener5");  

const start = async () => {
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }
  if (!process.env.WATCH_EMAIL) {
    throw new Error('WATCH_EMAIL must be defined');
  }
  if (!process.env.EMAIL_HOST) {
    throw new Error('EMAIL_HOST must be defined');
  }
  if (!process.env.EMAIL_PASSWORD) {
    throw new Error('EMAIL_PASSWORD must be defined');
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());
    console.log('NATS client started...')

    const mailListener = new MailListener({
      username: process.env.WATCH_EMAIL,
      password: process.env.EMAIL_PASSWORD,
      host: process.env.EMAIL_HOST,
      port: 993, 
      tls: true,
      connTimeout: 10000, 
      authTimeout: 5000,
      tlsOptions: { rejectUnauthorized: false },
      mailbox: "INBOX", 
      searchFilter: ["ALL"], 
      markSeen: true,
      fetchUnreadOnStart: true, 
      attachments: false, 
    });
    
    mailListener.start();
    console.log('mailbox listener started...')

    mailListener.on("server:connected", function(){
      console.log("imapConnected");
    });
    
    mailListener.on("mailbox", function(mailbox: any){
      console.log("Total number of mails: ", mailbox.messages.total);
    });
    
    mailListener.on("server:disconnected", function(){
      console.log("imapDisconnected");
      process.exit()
    });
    
    mailListener.on("error", function(err: any){
      console.log(err);
    });
    
    mailListener.on("headers", function(headers: any, seqno: any){
      const fromAddr = headers.get('from') ? headers.get('from').value[0].address : ''
      const replyToAddr = headers.get('reply-to') ? headers.get('reply-to').value[0].address.trim() : ''
      const subject = headers.get('subject') ? headers.get('subject') : ''
      if (fromAddr === 'notifications@ecwid.com' && subject.includes('Online Store: New order')) {
          console.log('Found email ', replyToAddr)
          new DeviceBoughtPublisher(natsWrapper.client).publish({
            email: replyToAddr,
          });
      }
    });
    
  } catch (err) {
    console.error(err);
  }
};

start();
