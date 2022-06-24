const box = document.getElementById('test');
const clientXY = document.getElementById('ClientXY');
const offsetXY = document.getElementById('OffsetXY');
// var clXY = document.getElementsByClassName('XY')[0];
// var osXY = document.getElementsByClassName('XY')[1];
var clXY = document.querySelector('.clXY');
var osXY = document.querySelector('.osXY');

console.log(clXY);

const outXY = (event) => {
    //box.firstElementChild.innerText=`Client XY = ${event.clientX}, ${event.clientY}`;
    clXY.innerText = `Client XY = ${event.clientX}, ${event.clientY}`;
    osXY.innerText = `Offset XY = ${event.offsetX}, ${event.offsetY}`;
    
    // console.log('Client XY = ',event.clientX, event.clientY);
    // console.log('Offset XY = ',event.offsetX, event.offsetY);
    // console.log('Type event:',event.type,'Target:', event.target);
};

box.addEventListener('click', outXY);