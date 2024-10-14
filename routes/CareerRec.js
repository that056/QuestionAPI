const express = require('express');
const route = express.Router();
const careerRecommendations = require('../info/data_CareerRec'); 
let userSelections = {}; 

function RecommendCareer(userSelections) {
    let recommendedCareers = new Set(); 

   
    for (const category in userSelections) {
        const selectedOption = userSelections[category];

       
        for (const questionType in careerRecommendations) {
            
            if (questionType === category) {
                const options = careerRecommendations[questionType]; 

                
                if (options[selectedOption]) {
                    
                    
                   
                    options[selectedOption].forEach(career => {
                        recommendedCareers.add(career); 
                    });
                }
            }
        }
    }

    return Array.from(recommendedCareers); 
}


route.post('/', (req, res) => {
    const userResponses = req.body.response;

    
    userSelections = {};
    for (const response of userResponses) {
        userSelections[response.category] = response.option;
    }

    console.log(userSelections);

    const recommendedCareers = RecommendCareer(userSelections);
    console.log(recommendedCareers);

    res.json({ recommendedCareers });
});

module.exports = route;
