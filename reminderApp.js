const mysql = require("mysql");
const {promisify} = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "reminder"
})

const promisifyQuery = promisify(connection.query).bind(connection);

// const runQuery = async (email) => {
//  try {
//     let data = await promisifyQuery (`SELECT reminder, created_at FROM persons LEFT JOIN reminder ON persons.id = reminder.personId WHERE email = '${email}'`)
//     console.log(data)
//  } catch (error) {
//      console.log(error.sqlMessage)
//  }
//  connection.end()
// }

const addEmail = async (email, password) => {
    try{
    let data = await promisifyQuery(`INSERT INTO persons(email, password) Values('${email}', '${password}')` 
    );
    } catch (error){
        console.log("oops something went wrong")
    }
}

const addReminder = async (reminder, id, dueDate) => {
    try{
        let data = await promisifyQuery(`INSERT INTO reminder(reminder, personID) Values('${reminder}', ${id}, ${dueDate})` 
    );
    console.log("fully added!")
    } catch (error){
        console.log(error)
    }
}

const editReminder = async (edit, id, rId) => {
    try{
        let data = await promisifyQuery(
       `UPDATE Reminder
        SET reminder = '${edit}'
        WHERE personID = ${id} and ID = ${rId}` 
    );
    console.log("fully edited!")
    } catch (error){
        console.log(error)
    }
}
//delete reminder
const deleteReminder = async (rId) => {
    try{
    let data = await promisifyQuery(`DELETE FROM reminder WHERE  ID = ${rId}`);
    console.log("fully deleted!")
    } catch (error){
        console.log(error)
    }
}

const query = async (email, password) => {
    try {
       let data = await promisifyQuery (`

       SELECT 
           persons.Id
       FROM
           persons
               LEFT JOIN
           reminder ON persons.Id = reminder.personID
       WHERE
           email = '${email}' AND password = '${password}'`)
           console.log(data);
           return data
        //    {
        //     ID: data[0].Id,
        //     Content: data[0].reminder,
        //     CA:data[0].created_at
        // }
        
    } catch (error) {
        console.log("You are not registered, Please sign up to use this app")
    }
}

query('a','a');
module.exports = {
    // runQuery,
    addEmail,
    addReminder,
    deleteReminder,
    query,
    editReminder
    
}