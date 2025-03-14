document.addEventListener("DOMContentLoaded", function () {
    handleFormSubmission();
 });
 window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    // Add a delay (e.g., 2 seconds) before hiding the preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 500); // matches the transition time
    }, 700); // 2 seconds delay
});


function handleFormSubmission() {
    document.querySelector('.appointment-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Get form data
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!fullName || !email || !phone || !date || !time) {
            alert('Please fill in all required fields.');
            return;
        }
        

        // Confirmation message
        alert(`
            Appointment booked successfully!
            Name: ${fullName}
            Email: ${email}
            Phone: ${phone}
            Date: ${date}
            Time: ${time}
            Message: ${message || "No additional message."}
        `);

        // Clear form after submission
        document.querySelector('.appointment-form').reset();
    });
}
s
//   alert("Welcome to Tina's Store!");
