const express = require('express');
const { Post } = require('../../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({ id: req.params.id });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateResults = await Post.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json(updateResults);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteResults = await Post.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(deleteResults);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;