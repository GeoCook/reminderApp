const express = require('express')
const{runQuery, addEmail, addReminder, editReminder, query, deleteReminder} = require('./reminderApp')
const path = require('path')
const cors = require('cors')

const app = express();


app.use(express.static(path.join(__dirname, './public')))
// app.use(express.static(publicDir))

app.use(cors({
    origin: 'http://192.168.5.76:3011/'
}))

//display reminders
app.get('/data', async(req, res) => {
    let data = await runQuery();
    res.send(data)
})
//add email and password to joinus database 
app.get('/register', async (req, res) => {
    await addEmail(req.query.email, req.query.password);
    //res.send(data)
    console.log("user has been registered")
});
//storing reminders
app.get('/reminder', async (req, res) => {
    let data = await addReminder(req.query.reminder, req.query.id);
    res.send({message:"reminder logged"})
});

//edit reminder
app.get('/edit', async (req, res) => {
    await editReminder(req.query.edit,req.query.id,req.query.rId);
    res.send({message:"reminder edited"})
});

//access localhost:3011
app.get('/pull', async (req, res) => {
    let data = await query(req.query.email, req.query.password);
    console.log(data)
    res.send(data)
});

app.get('/delete', async (req, res) => {
    let data = await deleteReminder(req.query.rId);
    res.send({message:"reminder deleted"})
});

app.listen(3011, () => {
    console.log("listening on port 3011");
});