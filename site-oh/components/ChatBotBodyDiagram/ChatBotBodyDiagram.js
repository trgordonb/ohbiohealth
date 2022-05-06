import React, { useEffect } from "react";
import ConditionallyRender from 'react-conditionally-render'
import ChatBotInfoBox from "../ChatBotInfoBox/ChatBotInfoBox"
import styles from './ChatBotBodyDiagram.module.css'
import Image from "next/image";

const bodyback = 'https://ensemble-cms.s3.amazonaws.com/bodyback_53bf1d3b44.jpg?updated_at=2022-05-06T01:59:57.846Z'
const bodyfront = 'https://ensemble-cms.s3.amazonaws.com/bodyfront_f087c52bb1.jpg?updated_at=2022-05-06T01:59:57.958Z'
const bodyLeft = 'https://ensemble-cms.s3.amazonaws.com/bodyleft_ec1e30dc20.jpg?updated_at=2022-05-06T01:59:57.980Z'
const bodyRight = 'https://ensemble-cms.s3.amazonaws.com/bodyright_edf6ad9653.jpg?updated_at=2022-05-06T01:59:58.056Z'

const ChatBotBodyDiagram = ({ infoBox, bodyPart, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "bodydiagram",
    }));
  }, [setState]);

  const showBodyDiagram = infoBox === "bodydiagram";

  return (
    <div>
      <ConditionallyRender
        condition={showBodyDiagram}
        show={
          <ChatBotInfoBox setState={setState}>
            <div className={styles.flexcontainer}>
              {
                bodyPart === 'front' &&
                <div className={styles.flexchild}>
                    <Image src={bodyfront} alt="Body Front" width={130} height={400} />
                </div>
              }
              {
                bodyPart === 'back' &&
                <div className={styles.flexchild}>
                    <Image src={bodyback} alt="Body Back" width={130} height={400} />
                </div>
              }
              {
                bodyPart === 'left' &&
                <div className={styles.flexchild}>
                    <Image src={bodyLeft} alt="Body Left" width={130} height={400} />
                </div>
              }
              {
                bodyPart === 'right' &&
                <div className={styles.flexchild}>
                    <Image src={bodyRight} alt="Body Right" width={130} height={400} />
                </div>
              }
            </div>
          </ChatBotInfoBox>
        }
      />
    </div>
  );
};

export default ChatBotBodyDiagram;
