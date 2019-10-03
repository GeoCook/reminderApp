const subBtn = document.getElementById("sign-up-btn")

subBtn.addEventListener('click', async () => {
    
    // document.getElementById('load').innerHTML="Loading..."
    let data = await fetch(`http://192.168.5.76:3011/register?email=${inputEmail.value}&password=${inputPassword.value}`, {mode: "no-cors"});
    console.log(data)

    
    
});