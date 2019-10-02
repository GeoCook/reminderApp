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
    let data = await promisifyQuery ("SELECT * FROM persons left join reminder on persons.id = reminder.personId")
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

const addReminder = async (reminder) => {
    try{
        let data = await promisifyQuery(`INSERT INTO reminder(Reminder) Values('${reminder}')` 
    );
    console.log("susseccfully added!")
    } catch (error){
        console.log("oops something went wrong")
    }
}

const deleteReminder = async (id) => {
    try{
    let data = await promisifyQuery(`DELETE FROM reminder WHERE id = ${id}`);
    console.log("susseccfully deleted!")
    } catch (error){
        console.log("oops nothing was deleted")
    }
}

module.exports = {
    runQuery,
    addEmail,
    addReminder,
    deleteReminder
}