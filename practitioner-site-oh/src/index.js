/* eslint-disable import/first */
const express = require('express')
const AdminJS = require('adminjs')
const natsWrapper = require('./nats-wrapper')
const AdminJSSequelize = require('@adminjs/sequelize')
const AdminJsExpress = require('@adminjs/express')
const UserResource =  require('./resources/users.resource')
const BranchResource = require('./resources/branch.resource')
const BodyLocResource = require('./resources/bodyloc.resource')
const CauseResource = require('./resources/cause.resource')
const ConsequenceResource = require('./resources/consequence.resource')
const CategoryResource = require('./resources/category.resource')
const AcupointResource = require('./resources/acupoint.resource')
const EntityResource = require('./resources/entity.resource')
const VisitReosurce = require('./resources/visit.resource')
const DiagnosisResource = require('./resources/diagnosis.resource')
const connect = require('./connect')
const bcrypt = require('bcrypt')
const PORT = 3000

const menu = {
  painProfileMaster: { name: '主文件', icon: 'SpineLabel' },
  client: { name: '客戶療程' },
}

AdminJS.registerAdapter(AdminJSSequelize)
const run = async () => {
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

  const sequelize = await connect()
  const app = express()
  const admin = new AdminJS({
    databases: [sequelize],
    rootPath: '/practitioner-portal',
    loginPath: '/practitioner-portal/login',
    logoutPath: '/practitioner-portal/login',
    dashboard: {
      component: AdminJS.bundle('./components/CustomDashboard')
    },
    resources: [{
      resource: sequelize.models.User,
      options: {...UserResource, parent: menu.painProfileMaster},
    }, {
      resource: sequelize.models.Branch,
      options: {...BranchResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.BodyLoc,
      options: {...BodyLocResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.Cause,
      options: {...CauseResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.Consequence,
      options: {...ConsequenceResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.Category,
      options: {...CategoryResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.Acupoint,
      options: {...AcupointResource, parent: menu.painProfileMaster}
    }, {
      resource: sequelize.models.Entity,
      options: {...EntityResource, parent: menu.client}
    }, {
      resource: sequelize.models.Visit,
      options: {...VisitReosurce, parent: menu.client}
    }, {
      resource: sequelize.models.Diagnosis,
      options: {...DiagnosisResource, parent: menu.client}
    }],
    version: {
      admin: false,
      app: '1.0.0'
    },
    branding: {
      logo: false,
      companyName: 'OH Biohealth',
      softwareBrothers: false,
      theme: {
        fontSizes: 'md',
        lineHeights: 'md'
      }
    },
    locale: {
      translations: {
          labels: {
              tbl_entity: '客戶身份',
              tbl_visit: '客戶療程主檔',
              tbl_visit_diag: '客戶療程明細',
              tbl_user: '用戶',
              tbl_cat: '痛類別',
              tbl_bodyloc: '痛部位',
              tbl_consq: '痛後果',
              tbl_branch: '分會',
              tbl_cause: '痛因',
              tbl_acupt: '經穴位',
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
              createFirstRecord: '添加新記錄'
          },
          messages: {
              theseRecordsWillBeRemoved: '以下記錄將被刪除',
              confirmDelete: '你真的要刪除這個項目嗎?',
              invalidCredentials: '錯誤的電子郵件和/或密碼',
              loginWelcome: 'OH Biohealth 客戶痛症記錄系統',
              noRecordsInResource: '此項目中沒有記錄',
              noRecords: '無記錄',
          },
          resources: {
              Dashboard: {
                  properties: {
                      dashboard: '儀表板'
                  }
              },
              tbl_entity: {
                  properties: {
                    entity_id: '客戶編號',
                    entityName: '姓名',
                    branch_id: '群組',
                    gender: '性别 (M/F)',
                    birthyear: '出生年',
                    occupation: '職業',
                    bpSystolic: '上壓',
                    bpDiastolic: '下壓',
                    bloodSugarLevel: '血糖水平'
                  }
              },
              tbl_visit: {
                  properties: {
                      entity_id: '客戶編號',
                      branch_id: '群組',
                      duration: '經歷痛楚達(月份)',
                      date: '日期',
                      remark: '備註',
                      symptom_loc1: '痛部位1',
                      symptom_loc2: '痛部位2',
                      symptom_cause: '痛因',
                      symptom_consq: '痛後果',
                      symptom_raise: '手或腳最多提昇角度'
                  }
              },
              tbl_visit_diag: {
                  properties: {
                      entity_id: '客戶編號',
                      branch_id: '群組',
                      date: '日期',
                      category: '痛類別',
                      remark: '備註',
                      apply_minute: '儀器使用時間(分鐘)',
                      qe_acupt_1: '經絡儀位置1',
                      qe_acupt_2: '經絡儀位置2',
                      qe_acupt_3: '經絡儀位置3',
                      bem_acupt_1: '能量儀位置1',
                      bem_acupt_2: '能量儀位置2',
                      bem_acupt_3: '能量儀位置3',
                      bem_acupt_4: '能量儀位置4',
                      bem_acupt_5: '能量儀位置5',
                      bem_acupt_6: '能量儀位置6',
                      bem_acupt_7: '能量儀位置7'
                  }
              },
              tbl_user: {
                  properties: {
                      role: '角色',
                      branch_id: '群組',
                      email: '電郵'
                  }
              },
              tbl_branch: {
                properties: {
                  branch_id: '群組',
                  description: '描述'
                }
              },
              tbl_cause: {
                  properties: {
                      cause_zh: '中文名稱',
                      cause_en: '英文名稱'
                  }
              },
              tbl_cat: {
                  properties: {
                      cat_zh: '中文名稱',
                      cat_en: '英文名稱'
                  }
              },
              tbl_bodyloc: {
                  properties: {
                      bodyloc_zh: '中文名稱',
                      bodyloc_en: '英文名稱'
                  }
              },
              tbl_consq: {
                  properties: {
                      consq_zh: '中文名稱',
                      consq_en: '英文名稱'
                  }
              },
              tbl_acupt: {
                  properties: {
                      acupt_zh: '中文名稱',
                      acupt_en: '英文名稱'
                  }
              }
          }
        }
      }
    }
  )

  const router = AdminJsExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
      let user = await sequelize.models.User.findOne({ where : { email: email } })
      if (user) {
        const matched = await bcrypt.compare(password, user.dataValues.encryptedPassword)
        if (matched) {
            return {
                email: user.dataValues.email,
                groupId: user.dataValues.branch_id,
                userId: user.dataValues.userId,
                role: user.dataValues.role,
                avatarUrl: `https://ui-avatars.com/api/?name=${user.dataValues.email}`
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
  })

  admin.watch()
  app.use(admin.options.rootPath, router)

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
}

run()
