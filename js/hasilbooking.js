const hasilBooking = document.getElementById("hasilBooking");

// Define the API URL you want to fetch data from
const apiUrl = 'https://be-semarang-28-production.up.railway.app/bookings';

// Use the fetch() function to make a GET request
fetch(apiUrl)
.then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
})
.then(data => {
    // Work with the data
    console.log(data[data.length-1]);
    hasilBooking.textContent = data[data.length-1]
})
.catch(error => {
    console.error('Fetch error:', error);
});
