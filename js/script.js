   // Function to smoothly scroll to the target section
function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add click event listeners to the navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the href attribute value
        scrollToSection(targetId);
    });
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

function showLoginContainer() {
    const loginContainer = document.getElementById('login-container');
    
    if (loginContainer) {
        loginContainer.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const unameInput = document.getElementById("uname");
    const pswInput = document.getElementById("psw");

    loginForm.addEventListener("submit", function (event) {
        if (!unameInput.validity.valid) {
            unameInput.setCustomValidity("Please fill out this field");
        } else {
            unameInput.setCustomValidity(""); // Reset custom validity message
        }

        if (!pswInput.validity.valid) {
            pswInput.setCustomValidity("Please fill out this field");
        } else {
            pswInput.setCustomValidity(""); // Reset custom validity message
        }

        // Check if the form is valid
        if (!loginForm.checkValidity()) {
            event.preventDefault(); // Prevent form submission if fields are not valid
        }
    });

    // Reset custom validity messages when the inputs change
    unameInput.addEventListener("input", function () {
        unameInput.setCustomValidity("");
    });

    pswInput.addEventListener("input", function () {
        pswInput.setCustomValidity("");
    });
});

// script.js

// Function to handle the "Click here to reset it" link click event
document.addEventListener('DOMContentLoaded', function () {
  var resetLink = document.querySelector('#loginpage .login-help a');

  resetLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
      
      // Add your code here to handle the reset password logic
      // For example, you can show a reset password modal or navigate to a reset password page.
      // You can use JavaScript, or if you are using a framework, follow its conventions.
      
      // Here's an example alert for demonstration purposes:
      alert("Reset password link clicked!");
  });
});


