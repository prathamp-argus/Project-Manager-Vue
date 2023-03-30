const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const bcrypt = require('bcryptjs')

const userRouter = require('./routers/user')
const projectRouter = require('./routers/project')

const app= express()
const port = process.env.PORT 

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(projectRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})