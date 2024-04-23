document.getElementById('emailForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const result = urlParams.get('result');

    const newp = window.location.search;
    const url = new URLSearchParams(newp);
    const name = urlParams.get('fileName');

    const payload = {
        email: email,
        result: result, 
        name: name // Include the 'result' parameter in the payload
    };

    const response = await fetch('/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) // Send the payload including 'email' and 'result'
    });
    
    const data = await response.json();
    document.getElementById('message').innerText = data.message;
});
