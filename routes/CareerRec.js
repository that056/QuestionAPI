const express = require('express')

const route = express.Router()
const careerRecommendations = require('../info/data_CareerRec')
let userSelections={}

function RecommendCareer(userselection){
    let recommendCareers= new Set()
    for(const category in userSelections){
       const selectedOption =  userSelections[category]
       if(careerRecommendations[category][selectedOption]){
        careerRecommendations[category][selectedOption].forEach(career =>{
            recommendCareers.add(career)
        })
       }

    }
    return Array.from(recommendCareers)
}

route.post('/',(req,res)=>{
    const ar = req.body.response
    for(const r in ar){
       userSelections[ar[r].category] = ar[r].option
    }
    const rec_career = RecommendCareer(userSelections)
    console.log(rec_career)

    res.send('Got it')
   
})

module.exports =route
