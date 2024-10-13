const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))


app.use('/getquestions',require('./routes/Questions'))
app.use('/submit',require('./routes/CareerRec'))

app.listen(8007,()=>{
    console.log('server srunning')
})
