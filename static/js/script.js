/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== swiper chalany k liye==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*========== light chalany r band krny k liye==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal krny k liye==========*/
ScrollReveal({
    // reset: true,
    distance: '70px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// CV Download krni ha kya?
document.getElementById('downloadLink').addEventListener('click', function (e) {
    e.preventDefault();

    fetch('https://api64.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch IP address');
            }
            return response.json();
        })
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ipDisplay').innerText = 'Your IP Address: ' + ipAddress;

            const link = document.createElement('a');
            link.href = this.getAttribute('href');
            link.download = this.getAttribute('download');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error fetching IP address:', error));
});







// New wala ha bhai 
document.getElementById('saveCsvButton').addEventListener('click', function (event) {
    var response = confirm("Do you want to save the CSV of your response?");
    if (response == true) {
        saveCsv();
    }
});

function saveCsv() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    // Check if all fields are filled
    if (fullName && email && mobileNumber && emailSubject && message) {
        var headers = ["YourName", "YourEmail", "ContactNumber", "EmailSubject", "Message"];
        var data = [[fullName, email, mobileNumber, emailSubject, message]];
        var ws = XLSX.utils.aoa_to_sheet([headers].concat(data));
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "ContactForm");
        var fileName = 'YourEmailResponse.csv';
        XLSX.writeFile(wb, fileName);

    } else {
        alert('Please fill in all fields before saving.');
    }
}








