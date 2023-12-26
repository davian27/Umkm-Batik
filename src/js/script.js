// === show menu === //

const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close');

// menu show function
// use if to validate
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// menu hide function
// use if to validate
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// === remove menu mobile === //
const navLink = document.querySelectorAll('.nav_link')

const removeMenu = () => {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu') //remove menu when click nav-link
}
navLink.forEach(n => n.addEventListener('click', removeMenu));

// header blur//
// const blurHeader = () => {
//     const header = document.getElementById('header')

//         // modify the header id using classlist and edit in css with class .blur-header
//     this.scrollY >= 50 ? header.classList.add('blur-header') 
//                        : header.classList.remove('blur-header')
// }
// window.addEventListener('scroll', blurHeader);

const blurHeader = () => {
    const header = document.getElementById('header');
    const shouldBlur = window.scrollY >= 50;
  
    header.classList.toggle('blur-header', shouldBlur);
  };
  
  window.addEventListener('scroll', blurHeader);

//   === show scroll up ===
// const scrollUp =() => {
//     const scrollUp = document.getElementById('scrollup');

//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                         : scrollUp.classList.remove('show-scroll');
// }
// window.addEventListener('scroll', scrollUp);

const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup');
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// === scroll active link ===
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = windows.pageYOffset;

    sections.forEach(current =>{
        const sectionsHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight){
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);