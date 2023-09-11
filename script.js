let menuBar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    menuBar.classList.toggle('active1');
}
let xmark = document.querySelector('.nav');

document.querySelector('#xmark').onclick = () =>{
    xmark.classList.remove('active1');
}