const hasilBooking = document.getElementById("hasilBooking");

const apiUrl = 'https://be-semarang-28-production.up.railway.app/bookings';

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
       console.log(data[data.length-1]);
    hasilBooking.textContent = 
        data[data.length - 1].bookingID + " " + data[data.length - 1].patientname  + data[data.length - 1].doctor + " " + data[data.length - 1].clinic  + " " + data[data.length - 1].appointment_time ;
})
.catch(error => {
    console.error('Fetch error:', error);
});
