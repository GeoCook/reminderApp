const express = require('express')
const{runQuery, addEmail, addReminder} = require('./app')

const app = express();
//display reminders
app.get('/data', async(req, res) => {
    let data = await runQuery();
    res.send({number:data})
})
//add email and password to joinus database 
app.get('/register', async (req, res) => {
    await addEmail(req.query.email, req.query.password);
    res.send({message:"successfully added to database"})
});
//storing reminders
app.get('/reminder', async (req, res) => {
    await addReminder(req.query.reminder);
    res.send({message:"reminder logged"})
});

//edit reminder
app.get('/edit', async (req, res) => {
    await addReminder(req.query.edit);
    res.send({message:"reminder edited"})
});
//access localhost:3012
app.listen(3012, () => {
    console.log("listening on port 3012");
});