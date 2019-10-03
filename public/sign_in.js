const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign-in-btn")


logBtn.addEventListener('click',  async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/pull?email=${inputEmail.value}`, {mode: "no-cors"});
    console.log(response)
    let data = await response.json();
    // localStorage.setItem('ID',`${data.ID}`)
    console.log(data)
    // return {
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
});