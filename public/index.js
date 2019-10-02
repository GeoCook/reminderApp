const subBtn = document.getElementById("sign-up-btn")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")

subBtn.addEventListener('click', () => {
    
    // document.getElementById('load').innerHTML="Loading..."
    fetch(`http://192.168.5.76:3011/register?email=${inputEmail.value}&password=${inputPassword.value}`, {mode: "no-cors"});
    console.log('button clicked')

    
    
})