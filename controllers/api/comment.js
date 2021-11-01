const express = require('express');
const { Comment } = require('../../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findOne({ id: req.params.id });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateResults = await Comment.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json(updateResults);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteResults = await Comment.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(deleteResults);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;