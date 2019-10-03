const addBtn = document.getElementById("add-btn")
const editBtn = document.getElementById("edit-btn")
const removeBtn = document.getElementById("remove-btn")

let loginId = globalVariable.example_attribute

//add a reminder
addBtn.addEventListener('click', async () => {
    let response = await fetch(`http://192.168.5.76:3011/reminder?reminder=${email}&id=${loginId}&dueDate=${dueDate}`, {mode: "no-cors"});
    let data = await response.json();
})
// edit a reminder
editBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/edit?edit=${edit}&id=${loginId}&rId=${rId}`, {mode: "no-cors"});
    let data = await response.json();
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