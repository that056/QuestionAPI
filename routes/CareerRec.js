const express = require('express')

const route = express.Router()
//const careerRecommendations = require('../info/data_CareerRec')



route.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Got it')
   
})

module.exports =route
