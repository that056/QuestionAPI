const express = require('express')
const app = express()


app.use('/getquestions',require('./routes/Questions'))

app.listen(8007,()=>{
    console.log('server srunning')
})