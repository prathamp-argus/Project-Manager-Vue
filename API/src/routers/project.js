const express = require('express')
const Project = require('../model/project')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/projects', auth, async (req, res) => {
    const project = new Project({
        ...req.body,
        owner: req.user._id
    })

    try {
        await project.save()
        res.status(201).send(project)
    } catch (e) {
        res.status(400).send(e)
    }
})
//for filtering and display with filter 

// GET /projects?limit=2&skip=2
// GET /projects?completed=true
router.get('/projects', async (req, res) => {
    // const match = {}
    // const sort  = {}

    // if (req.query.completed) {
    //     match.completed = req.query.completed === 'true'
    // }
    // if (req.query.sortBy) {
    //     const parts = req.query.sortBy.split(':')
    //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    // }
    // console.log(req.user)

    // try {
    //     await req.user.populate({
    //         path: 'projects',
    //         match,
    //         options: {
    //             limit: parseInt(req.query.limit),
    //             skip: parseInt(req.query.skip),
    //             sort
    //         }
            
    //     })
    //     res.send(req.user.projects)
    try{
        const projects = await Project.find()
        res.status(200).send(projects)
    }catch (e) {
        res.status(500).send(e.message)
    }
})

//for displaying single Project
router.get('/projects/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const project = await Project.findOne({ _id, owner: req.user._id })

        if (!project) {
            return res.status(404).send()
        }

        res.send(project)
    } catch (e) {
        res.status(500).send()
    }
})

// for updating Project
router.patch('/projects/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const project = await Project.findOne({ _id: req.params.id, owner: req.user._id})

        if (!project) {
            return res.status(404).send()
        }

        updates.forEach((update) => project[update] = req.body[update])
        await project.save()
        res.send(project)
    } catch (e) {
        res.status(400).send(e)
    }
})

//for deleting Project 
router.delete('/projects/:id', auth, async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!project) {
            res.status(404).send()
        }

        res.send(project)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router