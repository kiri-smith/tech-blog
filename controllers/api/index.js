const express = require('express');
const userRouter = require('./user');
const postRouter = require('./post');
const commentRouter = require('./comment');
const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);

module.exports = router;