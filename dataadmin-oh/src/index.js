const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJsMongoose = require('@adminjs/mongoose')
const bcrypt = require('bcrypt')
const axios = require('axios').default
const natsWrapper = require('./nats-wrapper')
const check = require('./services/check')
const setup = require('./services/setup')
AdminJS.registerAdapter(AdminJsMongoose)

const mongoose = require('mongoose')
const express = require('express')
const app = express()

const PainLocationsModel = require('./models/painlocation.model')
const PainCausesModel = require('./models/paincauses.model')
const PainConsequencesModel = require('./models/painconsequences.model')
const PainCategoriesModel = require('./models/paincategories.model')
const AcuPointsModel = require('./models/acupoints.model')
const ClientModel = require('./models/clients.model')
const SessionModel = require('./models/sessions.model')
const UserModel = require('./models/users.model')

const menu = {
    painProfileMaster: { name: '主文件', icon: 'SpineLabel' },
    client: { name: '客戶療程' },
}

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/data-portal',
  loginPath: '/data-portal/login',
  dashboard: {
      component: AdminJS.bundle('./components/CustomDashboard')
  },
  resources: [
      { 
          resource: PainLocationsModel, options: { 
              parent : menu.painProfileMaster, 
              listProperties: ['zh_name', 'en_name'],
              editProperties: ['zh_name', 'en_name'],
              filterProperties: ['zh_name', 'en_name'],
              showProperties: ['zh_name', 'en_name']
          }
      },
      { 
          resource: PainCausesModel, options: { 
              parent : menu.painProfileMaster, 
              listProperties: ['zh_name', 'en_name'],
              editProperties: ['zh_name', 'en_name'],
              filterProperties: ['zh_name', 'en_name'],
              showProperties: ['zh_name', 'en_name']
          }
      },
      { 
          resource: PainConsequencesModel, options: { 
              parent : menu.painProfileMaster, 
              listProperties: ['zh_name', 'en_name'],
              editProperties: ['zh_name', 'en_name'],
              filterProperties: ['zh_name', 'en_name'],
              showProperties: ['zh_name', 'en_name']
          }
      },
      { 
          resource: PainCategoriesModel, options: { 
              parent : menu.painProfileMaster, 
              listProperties: ['zh_name', 'en_name'],
              editProperties: ['zh_name', 'en_name'],
              filterProperties: ['zh_name', 'en_name'],
              showProperties: ['zh_name', 'en_name']
          }
      },
      { 
          resource: AcuPointsModel, options: { 
              parent : menu.painProfileMaster, 
              listProperties: ['zh_name', 'en_name'],
              editProperties: ['zh_name', 'en_name'],
              filterProperties: ['zh_name', 'en_name'],
              showProperties: ['zh_name', 'en_name']
          }
      },
      {
          resource: UserModel, options: {
              parent: menu.painProfileMaster,
              properties: {
                  _id: {
                      isVisible: { list: false, filter: false, show: false, edit: false },
                  },
                  encryptedPassword: {
                      isVisible: false
                  },
                  password: {
                      type: 'string',
                      isVisible: {
                          list: false, edit: true, filter: false, show: false,
                      }
                  }
              },
              actions: {
                  new: {
                      isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
                      before: async(request) => {
                          if (request.payload.password) {
                              request.payload = {
                                  ...request.payload,
                                  encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                                  password: undefined
                              }
                          }
                          return request
                      }
                  },
                  list: {
                      isAccessible: true
                  },
                  delete: {
                      isAccessible: ({ currentAdmin, record }) => {
                          return currentAdmin && (
                              currentAdmin.role === 'admin'
                              || currentAdmin.id === record.params._id
                          )
                      },
                  },
                  edit: {
                      isAccessible: ({ currentAdmin, record }) => {
                          return currentAdmin && (
                              currentAdmin.role === 'admin'
                              || currentAdmin.id === record.params._id
                          )
                      },
                      before: async(request) => {
                          if (request.payload.password) {
                              request.payload = {
                                  ...request.payload,
                                  encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                                  password: undefined
                              }
                          }
                          return request
                      }
                  },
                  show: {
                      isAccessible: true
                  },
              }
          }
      },
      {
          resource: ClientModel, options: {
              parent: menu.client,
              properties: {
                    _id: {
                        isVisible: { list: true, filter: false, show: true, edit: false },
                    },    
                    birthdate: {
                        type: 'date',
                    },
                    firstconsultdate: {
                        type: 'date',
                    },
              },
              actions: {
                  new: {
                      before: async (request, context) => {
                          if (request.payload) {
                              //get ClientId from OH microservices
                              const { currentAdmin } = context
                              const response = await axios.post(process.env.IDENTITY_SERVICE_URL, {
                                  groupId: 'oh'
                              })
                              if (response.data && response.data.sequence) {
                                  request.payload = {
                                      ...request.payload,
                                      _id: response.data.sequence
                                  }
                              }
                          }
                          return request
                      }
                  }
              },
              listProperties: ['_id', 'gender', 'birthdate', 'firstconsultdate', 'occupation'],
              showProperties: ['_id', 'gender', 'birthdate', 'firstconsultdate', 'occupation', 'painlocations', 'painconsequences', 'paincause', 'paincategory', 'QE_positions', 'BEM_positions'],
              filterProperties: ['_id','gender', 'birthdate', 'firstconsultdate', 'occupation', 'painlocations', 'painconsequences', 'paincause', 'paincategory', 'QE_positions', 'BEM_positions'],
              editProperties: ['gender', 'birthdate', 'firstconsultdate', 'occupation', 'painlocations', 'painconsequences', 'paincause', 'paincategory', 'QE_positions', 'BEM_positions'],
          }
      },
      {
          resource: SessionModel, options: {
              parent: menu.client,
              properties: {
                  _id: {
                      isVisible: { list: false, filter: false, show: false, edit: false },
                  },
                  date: {
                      type: 'date',
                      isVisible: { list: true, filter: true, show: true, edit: true },
                  }
              },
          }
      }
  ],
  version: {
      admin: false,
      app: '1.0.0'
  },
  branding: {
      logo: false,
      companyName: 'OH Biohealth',
      softwareBrothers: false
  },
  locale: {
      translations: {
          labels: {
              Client: '客戶檔',
              Session: '療程',
              User: '用戶',
              PainCategories: '痛類別',
              PainLocations: '痛部位',
              PainConsequences: '痛後果',
              PainCauses: '痛因',
              AcuPoints: '經穴位',
              filters: '篩選',
              navigation: '選單',
              selectedRecords: '已選 ({{selected}})',
              loginWelcome: '歡迎',
          },
          properties: {
              length: '長',
              from: '從',
              to: '到',
              email: '電郵',
              password: '密碼',
          },
          actions: {
              new: '添加新記錄',
              list: '列表',
              search: '搜索',
              edit: '編輯',
              show: '展示',
              delete: '刪除',
              bulkDelete: '批量刪除'
          },
          buttons: {
              filter: '篩選',
              save: '保存',
              applyChanges: '確認更改',
              resetFilter: '重置',
              login: '登錄',
              logout: '登出',
              confirmRemovalMany: '確認刪除 {{count}} 條記錄',
              confirmRemovalMany_plural: '確認刪除 {{count}} 條記錄',
          },
          messages: {
              theseRecordsWillBeRemoved: '以下記錄將被刪除',
              confirmDelete: '你真的要刪除這個項目嗎?',
              invalidCredentials: '錯誤的電子郵件和/或密碼',
              loginWelcome: 'OH Biohealth 客戶痛症記錄系統',
          },
          resources: {
              Dashboard: {
                  properties: {
                      dashboard: '儀表板'
                  }
              },
              Client: {
                  properties: {
                      clientId: '客戶號碼',
                      gender: '性別',
                      occupation: '職業',
                      birthdate: '出生日期',
                      firstconsultdate: '首次諮詢日期',
                      painlocations: '痛部位',
                      painconsequences: '痛後果',
                      paincause: '痛因',
                      paincategory: '痛類別',
                      QE_positions: '經絡儀位置',
                      BEM_positions: '能量儀位置',
                      'painlocations.addNewItem': '添加新項目',
                      'painconsequences.addNewItem': '添加新項目',
                      'QE_positions.addNewItem': '添加新項目',
                      'BEM_positions.addNewItem': '添加新項目'
                  }
              },
              User: {
                  properties: {
                      role: '角色',
                      groupId: '群組',
                      email: '電郵'
                  }
              },
              Session: {
                  properties: {
                      clientId: '客戶號碼',
                      date: '療程日期',
                      duration: '療程時間',
                      improvement: '改善比率(%)'
                  }
              },
              PainCauses: {
                  properties: {
                      zh_name: '中文名稱',
                      en_name: '英文名稱'
                  }
              },
              PainCategories: {
                  properties: {
                      zh_name: '中文名稱',
                      en_name: '英文名稱'
                  }
              },
              PainLocations: {
                  properties: {
                      zh_name: '中文名稱',
                      en_name: '英文名稱'
                  }
              },
              PainConsequences: {
                  properties: {
                      zh_name: '中文名稱',
                      en_name: '英文名稱'
                  }
              },
              AcuPoints: {
                  properties: {
                      zh_name: '中文名稱',
                      en_name: '英文名稱'
                  }
              }
          }
      }
  }
})

const router = AdminJSExpress.buildAuthenticatedRouter(
  adminJs, 
  {
    authenticate: async (email, password) => {
        let user = await UserModel.findOne({ email })
        if (user) {
            const matched = await bcrypt.compare(password, user.encryptedPassword)
            if (matched) {
                return {
                    email: user.email,
                    groupId: user.groupId,
                    id: user._id,
                    role: user.role,
                    avatarUrl: `https://ui-avatars.com/api/?name=${user.email}`
                }
            }
        }
        return false
    },
    cookiePassword: process.env.ADMIN_PASSWORD,
  },
  null,
  {
    resave: false,
    saveUninitialized: false,
    secret: process.env.ADMIN_PASSWORD
  }
)

app.use(adminJs.options.rootPath, router)

const run = async () => {
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

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true});
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  const isStaticDataExists = await check.staticDataExists();
  if (isStaticDataExists) {
      console.log('Static data exists')
  } else {
      console.log('Static data absent, adding...')
      await setup.addStaticData()
  }
  
  const isAdminExists = await check.adminExists();
    if (isAdminExists) {
      console.log('Admin user exists');
    } else {
      console.log('Admin user absent, adding one...');
      let _id = ''
      const IdServerResponse = await axios.post(process.env.IDENTITY_SERVICE_URL, {
        groupId: 'oh'
      })
      if (IdServerResponse.data && IdServerResponse.data.sequence) {
        _id = IdServerResponse.data.sequence
      }
      await setup.addAdmin(_id);
      console.log('Admin user sucessfully added');
    }
  await app.listen(3000, () => {
    console.log('AdminJS is at localhost:3000')
  })
}

run()