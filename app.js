const mysql = require("mysql");
const {promisify} = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "joinus"
})

const promisifyQuery = promisify(connection.query).bind(connection);

const runQuery = async () => {
 try {
    let data = await promisifyQuery ("SELECT * FROM users")
    return data
 } catch (error) {
     console.log(error.sqlMessage)
 }
 connection.end()
}

const addEmail = async (email) => {
    try{
    let data = promisifyQuery(`INSERT INTO users(email) Values('${email}')` 
    );
    console.log("susseccfully added!")
    } catch (error){
        console.log("oops something went wrong")
    }
}
 //addEmail("alex@vivioforoneyear.com")

module.exports = {
    runQuery,
    addEmail
}