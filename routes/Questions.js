const express = require('express');
const route = express.Router();
const data = require('../info/data_Questions');
const { json } = require('body-parser');

route.get('/', (req, res) => {
    let personal_Q = [];
    let skill_Q = [];
    let hobbie_q = [];
    let future_q = [];
    let user_questions = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].category == 'Future_Goals') {
            future_q.push(data[i]);
        } else if (data[i].category == 'Skills') {
            skill_Q.push(data[i]);
        } else if (data[i].category == 'Hobbies') {
            hobbie_q.push(data[i]);
        } else if (data[i].category == 'Personal') {
            personal_Q.push(data[i]);
        }
    }

    for (let i = 0; i < 2; i++) {
        const r = Math.round(Math.random() *4);
        user_questions.push(hobbie_q[r]);
        
        const v = Math.round(Math.random() *4);
        user_questions.push(skill_Q[v]);
        
        const x = Math.round(Math.random() *4);
        user_questions.push(future_q[x]);
       
    }

    for (let i = 0; i < 2; i++) {
        const r = Math.round(Math.random() * personal_Q.length);
        user_questions.push(personal_Q[r]);
        
    }

    res.json({ questions: user_questions });
});

module.exports = route;
