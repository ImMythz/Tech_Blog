const router = require('express').Router()
const apiRoutes = require('./api')
const dashboardRoutes = require('./dashboard-routes.js')
const homeRoutes = require('./home-routes.js')
const dashboardRoutes = require('./dashboard-routes.js')

router.use('/', dashboardRoutes)
router.use('/', homeRoutes)
router.use('/', apiRoutes)

module.exports = router