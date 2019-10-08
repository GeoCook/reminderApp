const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign-in-btn")


logBtn.addEventListener('click',  async () => {
    
    let response = fetch({url: `http://192.168.5.76:3011/pull?email=${inputEmail.value}`,json: true}, {mode: "no-cors"})
    console.log(response)
    let data = await response.json();
    // localStorage.setItem('ID',`${data.ID}`)
    // return {
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
});