const header = [
    "HOME",
    "PLANT",
    "ABOUT",
    "CONTACT US"
]


const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');
const offcanvas = document.getElementById('offcanvas');

// Offcanvas toggle
menu.onclick = () => {
    offcanvas.classList.remove('-translate-x-full');
    offcanvas.classList.add('translate-x-0');
}

cancel.onclick = () => {
    offcanvas.classList.remove('translate-x-0');
    offcanvas.classList.add('-translate-x-full');
}

































//header left side
// const menu = [
//     'HOME' ,'PLANTS' ,'ABOUT' , 'CONTACT' ,
// ]

// menu.map((elements, index) => {
//     const span = document.createElement('span');
//     span.textContent= elements;
//     span.className='textHeader cursor-pointer text-2xl font-bold inline-block';

//     rightSide.appendChild(span);
// })

