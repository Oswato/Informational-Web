let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classtList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*=========== stick navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky,' .scrollY > 100);
    
    /*=============remove toggle icon and navbar==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

scrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

scrollReveal().reveal('.home-content, .heading', {origin: 'top'});
scrollReveal().reveal('.home-img, .my-hobbies-container, .my-playlist-of-music-container, .music-container-1, .contact-me form',{ origin:
'bottom' });


scrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
scrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/*===typed js=====*/
const typed = new typed('.animated-text',{
    strings: ['BSIT STUDENT', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
