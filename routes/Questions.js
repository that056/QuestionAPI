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
        const r = Math.round(Math.random() * hobbie_q.length);
        user_questions.push(hobbie_q[r]);
        const idx = hobbie_q.indexOf(hobbie_q[r])
        hobbie_q.splice(idx,1)
        const v = Math.round(Math.random() * skill_Q.length);
        user_questions.push(skill_Q[v]);
        const idv = skill_Q.indexOf(skill_Q[v])
        skill_Q.splice(idv,1)
        const x = Math.round(Math.random() * future_q.length);
        user_questions.push(future_q[x]);
        const ida = future_q.indexOf(future_q[x])
        future_q.splice(ida,1)
    }

    for (let i = 0; i < 2; i++) {
        const r = Math.round(Math.random() * personal_Q.length);
        user_questions.push(personal_Q[r]);
        const idx = personal_Q.indexOf(personal_Q[r])
        personal_Q.splice(idx,1)
    }

    res.json({ questions: user_questions });
});

module.exports = route;
