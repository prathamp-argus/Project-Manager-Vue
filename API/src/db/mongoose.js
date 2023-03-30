const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:5001/project-management-api', {
    useNewUrlParser: true
})