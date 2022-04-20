/* eslint-disable import/first */
const express = require('express')
const AdminJS = require('adminjs')
const AdminJSSequelize = require('@adminjs/sequelize')
const AdminJsExpress = require('@adminjs/express')
const UserResource =  require('./resources/users.resource')
const connect = require('./connect')
const PORT = 3000

AdminJS.registerAdapter(AdminJSSequelize)
const run = async () => {
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
      options: UserResource,
    }],

  })

  admin.watch()
  const router = AdminJsExpress.buildRouter(admin)
  app.use(admin.options.rootPath, router)

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
}

run()
