const express = require('express')
const{ addEmail, addReminder, editReminder, query, deleteReminder} = require('./reminderApp')
const path = require('path')
const port = process.env.PORT || 3011;


const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(publicDir))



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//display reminders
app.get('/data', async(req, res) => {
    let data = await query();
    res.send(data)
})
//add email and password to joinus database 
app.get('/register', async (req, res) => {
    let data = await addEmail(req.query.email, req.query.password);
    res.send({message: "user has been registered"})
    console.log({message: "user has been registered"})
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
    res.send(data)
    console.log(data)
});

app.get('/delete', async (req, res) => {
    let data = await deleteReminder(req.query.rId);
    res.send({message:"reminder deleted"})
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});