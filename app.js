const mysql = require("mysql");
const {promisify} = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "reminder"
})

const promisifyQuery = promisify(connection.query).bind(connection);

const runQuery = async () => {
 try {
    let data = await promisifyQuery ("SELECT Id, reminder FROM persons left join reminder on persons.id = reminder.personId")
    return data
 } catch (error) {
     console.log(error.sqlMessage)
 }
 connection.end()
}

const addEmail = async (email, password) => {
    try{
    let data = await promisifyQuery(`INSERT INTO persons(email, password) Values('${email}', '${password}')` 
    );
    } catch (error){
        console.log("oops something went wrong")
    }
}

const addReminder = async (reminder, id) => {
    try{
        let data = await promisifyQuery(`INSERT INTO reminder(reminder, personID) Values('${reminder}', ${id})` 
    );
    console.log("susseccfully added!")
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
    console.log("susseccfully edited!")
    } catch (error){
        console.log(error)
    }
}




const deleteReminder = async (id) => {
    try{
    let data = await promisifyQuery(`DELETE FROM reminder WHERE ID = ${id}`);
    console.log("susseccfully deleted!")
    } catch (error){
        console.log(error)
    }
}

module.exports = {
    runQuery,
    addEmail,
    addReminder,
    deleteReminder,
    editReminder
}