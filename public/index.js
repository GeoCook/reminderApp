const subBtn = document.getElementById("sign-up-btn")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")

subBtn.addEventListener('click', () => {
    
    // document.getElementById('load').innerHTML="Loading..."
    fetch(`http://192.168.5.76:3011/register?email=${inputEmail.value}&password=${inputPassword.value}`, {mode: "no-cors"});
    console.log('button clicked')

    
    
})

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("id", `${id}`);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem(`${id}`);
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

  const setData = () => {
      console.log('SET');
      localStorage.setItem('id', `${id}`)
  }

  const cleardata = () => {
      console.log('CLEAR')
      localstroange.clear()
  }