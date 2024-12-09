document.addEventListener("DOMContentLoaded", function() 
{
    var header = document.querySelector('.navbar');
    var scrollTrigger = 0; 

    function onScroll() {
        if (window.scrollY > scrollTrigger) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll);

});

const header = document.querySelector('.navigation');
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const symptomSection = document.querySelector('#symptoms');
const preventionSection = document.querySelector('#prevention');
const contactSection = document.querySelector('#contact');

const listItems = ['Home',  'About', 'Symptoms', 'Prevention','Contact'];
const navBar = document.createElement('ul');
navBar.classList.add('menu');

listItems.forEach(function(element) {
    const listElement = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.href = '#';
    navLink.innerText = element;
    listElement.appendChild(navLink);
    navBar.appendChild(listElement);
});

header.appendChild(navBar);
const childNav = navBar.querySelectorAll('a');
function scrollHandler(e){
    e.preventDefault();
    childNav.forEach(el => {
        if(el.innerText === e.target.innerText){
            el.classList.add('clicked')
        } else {
            el.classList.remove('clicked')
        } 
    });
    if (e.target.innerText === 'Home'){
        window.scrollTo({
            top: homeSection.offsetTop,
            behavior: 'smooth',
          });
    } if (e.target.innerText === 'About'){    
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth',
          });
    } if (e.target.innerText === 'Symptoms'){
        window.scrollTo({
            top: symptomSection.offsetTop,
            behavior: 'smooth',
          });
    } if (e.target.innerText === 'Prevention'){ 
        window.scrollTo({
            top: preventionSection.offsetTop,
            behavior: 'smooth',
          });
    } if (e.target.innerText === 'Contact'){ 
        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth',
          });
    }

}

navBar.addEventListener('click', scrollHandler);