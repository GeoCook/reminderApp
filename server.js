const express = require('express')
const{runQuery, addEmail, addReminder, editReminder, query, deleteReminder} = require('./app')
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
    let data = await addReminder(req.query.reminder, req.query.id, req.query.dueDate);
    res.send({message:"reminder logged"})
});

//edit reminder
app.get('/edit', async (req, res) => {
    await editReminder(req.query.edit,req.query.id,req.query.rId);
    res.send({message:"reminder edited"})
});
//access localhost:3012
    app.get('/pull', async (req, res) => {
       let data = await query (req.query.email);
        res.send(data)
    });

    app.get('/delete', async (req, res) => {
        let data = await deleteReminder (req.query.email);
         res.send(data)
     });
app.listen(3011, () => {
    console.log("listening on port 3011");
});