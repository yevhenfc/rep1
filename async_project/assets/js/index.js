for (let i = 1; i <= 10; i++) {
    setTimeout(() => {console.log(i)}, 100);
}

//+

let start = 100, end = 110;
const timerId = setInterval (() => {start <= end ? console.log(start++) : clearInterval(timerId)}, 100)