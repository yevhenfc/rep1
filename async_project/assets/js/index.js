const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve('100');
const promise3 = Promise.resolve(true);
const promise4 = Promise.resolve({});
const promise5 = Promise.resolve(undefined);

async function makePromise(){
    const res1 = await promise1;
    console.log(res1);
    const res2 = await promise2;
    console.log(res2);
    const res3 = await promise3;
    console.log(res3);
    const res4 = await promise4;
    console.log(res4);
    const res5 = await promise5;
    console.log(res5);
}

function makePromise1(){
    const res1 = promise1;
    console.log(res1);
    const res2 = promise2;
    console.log(res2);
    const res3 = promise3;
    console.log(res3);
    const res4 = promise4;
    console.log(res4);
    const res5 = promise5;
    console.log(res5);
}


makePromise();
makePromise1();

// const promise1 = new Promise(test);


// function test(resolve, reject) {
//     console.log('Hello, Aaada!');
//     if(reject) {new Error('Hello, Aaada!')}    
// };

// let promiseGetNumMore50 = new Promise(getNumMore50);

// function getNumMore50(resolve, reject) {
//     const num = Math.round(Math.random()* 100);
//     console.log(num);
//     num >= 50 ? resolve(num) : reject (new Error(`Reject. Number ${num} failed`));


// const btn = document.getElementById('loadUsers');

// const store = {
//     users: null,
//     isFetching: false,
//     error: null,
// };

// btn.onclick = function () {
//     fetch('./assets/data/users1.json').then(loadResolve).then(logData).catch(loadReject);
// };

// //data to console
// function logData(data){
//     store.isFetching = false;
//     store.users = data;
//     console.log(data);
// }

// // good!
// function loadResolve(response){
//     store.isFetching = true;
//     return response.json();
// }

 
// // error , bad ((
// function loadReject(response){
//     store.error = new Error(`${response.status} ${response.statusText}`);
//     console.log(store.error);
// }