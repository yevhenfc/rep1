const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

// нажать 
img1.addEventListener('mousedown', handleMouseDown1);
img2.addEventListener('mousedown', handleMouseDown2);
img3.addEventListener('mousedown', handleMouseDown3);
img4.addEventListener('mousedown', handleMouseDown4);
img5.addEventListener('mousedown', handleMouseDown5);

function handleMouseDown1(e){
    // e.preventDefault();
    img1.style.width = '350px';
    img2.style.width = '50px';
    img3.style.width = '50px';
    img4.style.width = '50px';
    img5.style.width = '50px';
    img1.firstElementChild.style.transition = '1s';
    img1.firstElementChild.style.visibility = 'visible';
}

function handleMouseDown2(e){
    // e.preventDefault(e);
    img1.style.width = '50px';
    img2.style.width = '350px';
    img3.style.width = '50px';
    img4.style.width = '50px';
    img5.style.width = '50px';
}

function handleMouseDown3(e){
    // e.preventDefault(e);
    img1.style.width = '50px';
    img2.style.width = '50px';
    img3.style.width = '350px';
    img4.style.width = '50px';
    img5.style.width = '50px';
}

function handleMouseDown4(e){
    // e.preventDefault(e);
    img1.style.width = '50px';
    img2.style.width = '50px';
    img3.style.width = '50px';
    img4.style.width = '350px';
    img5.style.width = '50px';
}

function handleMouseDown5(e){
    // e.preventDefault(e);
    img1.style.width = '50px';
    img2.style.width = '50px';
    img3.style.width = '50px';
    img4.style.width = '50px';
    img5.style.width = '350px';
}


// function handleMouseMove(e){
//     let left = e.clientX - shiftX - sliderEl.getBoundingClientRect().left;
//     //let left = leverEl.getBoundingClientRect().left - sliderEl.getBoundingClientRect().left;

//     let rigth = sliderEl.offsetWidth - leverEl.offsetWidth; 
//     if(left < 0) left = 0;
//     if(left > rigth) left = rigth - 4;
//     leverEl.style.left = left + 'px';
//     cXY.innerText = `ClientX = ${e.clientX}`;
//     oXY.innerText = `OffsetX = ${e.offsetX}`;
//     sft.innerText = leverEl.getBoundingClientRect().left;//`Shift = ${left}`;
// }

// function handleMouseUp(e){
//     document.removeEventListener('mouseup', handleMouseUp);
//     document.removeEventListener('mousemove', handleMouseMove);
// }