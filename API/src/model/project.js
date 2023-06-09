const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema ({
    name:{
        type : String,
        required : true,
        trim : true 
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps : true
})
const Project = mongoose.model('Project', projectSchema)

module.exports= Project;