const divArray = document.querySelectorAll('.box');

function handleChangeColor1 (e) {
    this.style.background = 'black';
    this.removeEventListener('click', handleChangeColor1);
    this.addEventListener('click', handleChangeColor2);
}

function handleChangeColor2 (e) {
    this.style.background = 'white';
    this.removeEventListener('click', handleChangeColor2);
    this.addEventListener('click', handleChangeColor1);

}


divArray.forEach( el => { 
    el.addEventListener('click', handleChangeColor1);
    console.log(el, el.firstElementChild)
    //el.addEventListener('click', el.firstChild.remove());
    
    el.firstElementChild.addEventListener('click', () => el.remove())
    }
);
