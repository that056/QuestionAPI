const express = require('express')
const route = express.Router()
const careerMappings = require('../info/data_CareerRec')
const userResponses = {
    personal: [],
    hobbies: [],
    skills: [],
    futureGoals: []
};


function recordResponse(category, questionIndex, selectedOption) {
    userResponses[category][questionIndex] = selectedOption;
}

function recommendCareer() {
    let recommendedCareers = [];

    // Analyze personal, hobbies, skills, and future goals responses
    Object.keys(userResponses).forEach(category => {
        userResponses[category].forEach(response => {
            const careers = careerMappings[response];
            if (careers) {
                recommendedCareers = recommendedCareers.concat(careers);
            }
        });
    });

    // Count the occurrences of each career
    const careerCount = recommendedCareers.reduce((acc, career) => {
        acc[career] = (acc[career] || 0) + 1;
        return acc;
    }, {});

    // Sort careers by frequency
    const sortedCareers = Object.entries(careerCount)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    return sortedCareers;
}

route.get('/',(req,res)=>{
    res.json(user_questions)
})

module.exports =route