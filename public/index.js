
//------------ sign up variables ------------------//
const subBtn = document.getElementById("submitSignUp")
const inputEmailSU = document.getElementById("emailSignUp")
const inputPasswordSU = document.getElementById("passwordSignUp1")

//-------------- sign in variables-----------------//

const inputEmailSI = document.getElementById("emailSignIn")
const inputPasswordSI = document.getElementById("passwordSignIn")
const logBtn = document.getElementById("submitSignIn")

//--------------home variables
const addBtn = document.getElementById("add-btn")
const editBtn = document.getElementById("edit-btn")
const removeBtn = document.getElementById("remove-btn")
const signInInputEmail = document.getElementById("signIn-inputEmail")





// ------------- sign up ---------------------//

subBtn.addEventListener('click', async () => {
     // document.getElementById('load').innerHTML="Loading..."
    let response = await fetch(`/register?email=${inputEmailSU.value}&password=${inputPasswordSU.value}`);
    let data = await response.json()
    console.log(data)
});



// ------------- sign in ---------------------//
logBtn.addEventListener('click',  async () => {
    let response = await fetch(`/pull?email=${inputEmailSI.value}&password=${inputPasswordSI.value}`)
    // console.log(response)
    let data = await response.json();
    // localStorage.setItem('ID',`${data.ID}`)
    // return {
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
    console.log(data)
});



// ------------- Home ---------------------//

// // add a reminder
// addBtn.addEventListener('click', async () => {
//     let response = await fetch(`/reminder?reminder=${reminder}&id=${loginId}`);
//     let data = await response.json();
//     console.log(data)
// })
// // edit a reminder
// editBtn.addEventListener('click', async () => {
    
//     let response = await fetch(`/edit?edit=${edit}&id=${loginId}&rId=${rId}`);
//     let data = await response.json();
// })
// // delete a reminder
// removeBtn.addEventListener('click', async () => {
    
//     let response = await fetch(`/delete?rId=${rId}`);
// })


// ------------- function calls ---------------------//

