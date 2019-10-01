button.addEventListener('click', async () => {
    document.getElementById('load').innerHTML="Loading..."
    let response = await fetch(`http://localhost:3005/news?location=${input.value}&cat=${newsType}`);
    let data = await response.();