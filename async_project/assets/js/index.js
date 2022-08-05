// const promise1 = new Promise(test);

// function test(resolve, reject) {
//     console.log('Hello, Aaada!');
//     if(reject) {new Error('Hello, Aaada!')}    
// };

let promiseGetNumMore50 = new Promise(getNumMore50);

function getNumMore50(resolve, reject) {
    const num = Math.round(Math.random()* 100);
    console.log(num);
    num >= 50 ? resolve(num) : reject (new Error(`Reject. Number ${num} failed`));
}

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