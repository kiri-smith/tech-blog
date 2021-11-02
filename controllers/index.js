const express = require('express');
const apiRouter = require('./api');
const router = express.Router();
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use("/api", apiRouter)

module.exports = router;