
//------------ sign up variables ------------------//
const subBtn = document.getElementById("sign-up-btn")

//-------------- sign in variables-----------------//

const inputEmail1 = document.getElementById("signIn-inputEmail")
const inputPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign")

//--------------home variables
const addBtn = document.getElementById("add-btn")
const editBtn = document.getElementById("edit-btn")
const removeBtn = document.getElementById("remove-btn")




// ------------- sign up ---------------------//

subBtn.addEventListener('click', async () => {
     // document.getElementById('load').innerHTML="Loading..."
    let response = await fetch(`http://192.168.5.76:3011/register?email=${inputEmailSU.value}&password=${inputPasswordSU.value}`);
    let data = await response.json()
    console.log(data)
});



// ------------- sign in ---------------------//
logBtn.addEventListener('click',  async () => {
    let response = await fetch(`http://192.168.5.76:3011/pull?email=${inputEmail1.value}&password=${inputPassword.value}`)
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
// add a reminder
addBtn.addEventListener('click', async () => {
    let response = await fetch(`http://192.168.5.76:3011/reminder?reminder=${reminder}&id=${loginId}`);
    let data = await response.json();
    console.log(data)
})
// edit a reminder
editBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/edit?edit=${edit}&id=${loginId}&rId=${rId}`);
    let data = await response.json();
})
// delete a reminder
removeBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/delete?rId=${rId}`);
})


// ------------- function calls ---------------------//

