const sliderEl = document.getElementById('slider');
const leverEl = document.getElementById('lever');

let cXY = document.querySelector('.ClXY');
let oXY = document.querySelector('.OsXY');
let sft = document.querySelector('.sft');
let shiftX =0;

// нажать 
leverEl.addEventListener('mousedown', handleMouseDown);

function handleMouseDown(e){
    e.preventDefault();
    shiftX = e.clientX - leverEl.getBoundingClientRect().left;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(e){
    let left = e.clientX - shiftX - sliderEl.getBoundingClientRect().left;
    //let left = leverEl.getBoundingClientRect().left - sliderEl.getBoundingClientRect().left;

    let rigth = sliderEl.offsetWidth - leverEl.offsetWidth; 
    if(left < 0) left = 0;
    if(left > rigth) left = rigth - 4;
    leverEl.style.left = left + 'px';
    cXY.innerText = `ClientX = ${e.clientX}`;
    oXY.innerText = `OffsetX = ${e.offsetX}`;
    sft.innerText = leverEl.getBoundingClientRect().left;//`Shift = ${left}`;
}

function handleMouseUp(e){
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
}