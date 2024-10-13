const { json, urlencoded } = require('body-parser');
const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors')
app.use(urlencoded({extended:true}))

app.use(cors())
app.use('/getquestions',require('./routes/Questions'))
app.use('/submit',require('./routes/CareerRec'))

app.listen(8007,()=>{
    console.log('server srunning')
})
