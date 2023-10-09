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
        const lastBooking = data[data.length - 1];
        const bookingDetails = `${lastBooking.bookingID} ${lastBooking.patientname} ${lastBooking.doctor} ${lastBooking.clinic} ${lastBooking.appointment_time}`;
        hasilBooking.textContent = bookingDetails;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
