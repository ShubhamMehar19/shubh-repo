/*=================== toggle icon navbar=============*/
let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle(fa-xmark);
    navbar.classList.toggle('active');
};

/*==================== scroll section actibve link ===================== */
 

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('headar nav a');

window.onscroll = () => {
    section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach.apply(links => {
         links.classList.remove('active');
         document.querySelector('header nav a[half*=' + id +']').classList.add('active');
        });
    };
    
 });

 /*==================== sticy navbar ===================== */

 let header = document.querySelector('header');
  header.classList.toggle('sticky', window.screenY > 100);

  /*==================== remove toggle icon and navbar ===================== */

  menuIcon.classList.remove('fa xmark');
  navbar.classList.remove('active');
};

/*==================== scroll reveal ===================== */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact, .about-content', { origin: 'right' });

/*====================typed js===================== */


const typed = new Typed('.multiple-text',{
    Strings:['MERN stack Developer' , 'Web Designer' , 'android Developer', 'to be a softwere Developer '],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});



