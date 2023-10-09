document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const patientname =  document.getElementById("patientname").value;
        const doctor = document.getElementById("doctor").value;
        const clinic = document.getElementById("clinic").value;
        const dateInput = document.getElementById("date");
        const rawDate = dateInput.value; 

        const dateParts = rawDate.split("-");
        const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
        const baseURL = 'https://be-semarang-28-production.up.railway.app'
        
        const responseBookings = await fetch(baseURL + '/booking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                patientname: patientname,
                doctor: doctor,
                clinic: clinic,
                appointment_time: formattedDate
            })
        });

        const getbookings = await fetch (baseURL + '/booking', {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
            },
           JSON.stringify({
                patientname: patientname,
                doctor: doctor,
                clinic: clinic,
                appointment_time: formattedDate
            }),
              return data.map((appointmentForm) => {
      const { bookingID, patientname, clinic, doctor, appointment_time } =
        appointment;
      const appointment_date = new Date(appointment_time).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      const appointmentList = document.getElementById(
        "appointment-list-container"
      );
      const div = document.createElement("div");                             
        });


