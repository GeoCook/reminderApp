const express = require('express')
const{runQuery, addEmail} = require('./app')

const app = express();
//display reminders
app.get('/data', async(req, res) => {
    let data = await runQuery();
    res.send({number:data})
})
//add email and password to joinus database 
app.get('/register', async (req, res) => {
    await addEmail(req.query.email, req.query.password);
    res.send({massage:"successfully added to database"})
});
//access localhost:3012
app.listen(3012, () => {
    console.log("listening on port 3012");
});