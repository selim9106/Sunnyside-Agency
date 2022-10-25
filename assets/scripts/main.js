// import '/style.css'
// document.querySelector('#app').innerHTML = `
// `

const bgmenubtn = document.querySelector('#bgmenu-btn');
const burgericon = document.querySelector('.burger-icon');
const headernav = document.querySelector(".header__nav");
const navlinks = document.querySelectorAll('.header__nav__links');

bgmenubtn.addEventListener('click', () => toggleClass(headernav, 'active'));
bgmenubtn.addEventListener('click', () => toggleClass(burgericon, 'open'));

navlinks.forEach(link =>link.addEventListener('click', () => hideBlock(headernav, 'active')));
navlinks.forEach(link =>link.addEventListener('click', () => hideBlock(burgericon, 'open')));


function toggleClass(elem, classtyle) {
    elem.classList.toggle(classtyle);
};

function hideBlock(elem, classtyle) {
    elem.classList.remove(classtyle);
};
// oneline alt:
// bgmenubtn.addEventListener('click', function() {
//     headernav.classList.toggle('active');
// });
