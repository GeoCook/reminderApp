const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign-in-btn")
let globalVariable = {ID: `${id}`};

logBtn.addEventListener('click',  async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/pull?Email=${inputEmail.value}`, {mode: "no-cors"});
    let data = await response.json();
    let globalVariable = {ID: `${id}`}
    
    // return {
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
})