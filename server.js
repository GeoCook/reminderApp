const express = require('express')
const{runQuery, addEmail, addReminder, editReminder} = require('./app')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, "public")))

//display reminders
app.get('/data', async(req, res) => {
    let data = await runQuery();
    res.send(data)
})
//add email and password to joinus database 
app.get('/register', async (req, res) => {
    await addEmail(req.query.email, req.query.password);
    res.send(data)
});
//storing reminders
app.get('/reminder', async (req, res) => {
    await addReminder(req.query.reminder, req.query.id);
    res.send({message:"reminder logged"})
});

//edit reminder
app.get('/edit', async (req, res) => {
    await editReminder(req.query.edit,req.query.id,req.query.rId);
    res.send({message:"reminder edited"})
});
//access localhost:3012
app.listen(3011, () => {
    console.log("listening on port 3011");
});