button.addEventListener('click', async () => {
    document.getElementById('load').innerHTML="Loading..."
    let response = await fetch(`http://localhost:3005/register?email=${input.value}&password=${newsType}`);
    let data = await response.json(); 

    
})