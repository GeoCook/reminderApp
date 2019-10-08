const subBtn = document.getElementById("sign-up-btn")
const signUpInputEmail = document.getElementById("signUp-inputEmail")
const inputPassword = document.getElementById("input")
const signInPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign")
const addBtn = document.getElementById("add-btn")
const editBtn = document.getElementById("edit-btn")
const removeBtn = document.getElementById("remove-btn")
const signInInputEmail = document.getElementById("signIn-inputEmail")


// register an Email and password
subBtn.addEventListener('click', () => {
    
    // document.getElementById('load').innerHTML="Loading..."
    fetch(`http://192.168.5.76:3011/register?email=${signUpInputEmail.value}&password=${inputPassword.value}`, {mode: "no-cors"});
    console.log('button clicked')

    
    
})


//sign in
logBtn.addEventListener('click',  async () => {
    
  console.log("clicked log in")
     let response = await fetch(`http://192.168.5.76:3011/pull?email=${signInInputEmail.value}&password=${signInPassword.value}`, {mode: "no-cors"});
     let data = await response.json

    console.log("trying to sign in")
    console.log(data[0].Id, data[0].reminder, data[0].created_at )
    // return {
    //     setData(ID)
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
})
// add a reminder
addBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/reminder?reminder=${email}&id=${id}&dueDate=${dueDate}`, {mode: "no-cors"});
    let data = await response.json();
})
// edit a reminder
editBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/edit?edit=${edit}&id=${id}&rId=${rId}`, {mode: "no-cors"});
})
// delete a reminder
removeBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/delete?rId=${rId}`, {mode: "no-cors"});
})


// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("id", `${id}`);
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem(`${id}`);
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }

//   window.addEventListener('storage', (id) => {
//     console.log(`${id}`)
//   });

//   const setData = (id) => {
//     console.log('SET');
//     window.sessionStorage.setItem('id', `${id}`);
// }
 

//   const clearData = () => {
//       console.log('CLEAR');
//       window.sessionStorage.clear()
//   }