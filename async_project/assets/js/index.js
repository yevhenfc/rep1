// // let response = fetch("https://randomuser.me/api/?results=5&gender=male").then(loadResolve).then(logData);
// // const data = fetch ("https://randomuser.me/api/?results=5&gender=male").then(loadResolve).then(logData).catch(loadReject);

// let response = fetch("https://randomuser.me/api/?results=5&gender=male")
//               .then(response => response.json())
//               .then(results  => results[0]);


// //arr = await fetch ("https://randomuser.me/api/?results=5&gender=male").then(loadResolve).then(result => result.data);

// // function loadResolve(response){return response.json()};
// //function logData(data)    {console.log(data)};
// //function logData(data)  {return data.results};
// //function logData(data){console.log(data);console.log(data.results); console.log(...data.results); console.log(data.results[0])};
// function logData(data)  {return data};

// // function loadReject (reject)  {console.log(reject)};

// console.log(response);

//1
// const promise1 = new Promise(fun1);

// function fun1(resolve, reject){
//     return fetch("https://randomuser.me/api/?results=5&gender=male")
// };

// обещание об авторизации
const isAuth = true;
const error = null;
const currentUser = {name: "Test", surname: "Testovich"};

const getAuthUserPromise = new Promise(getAuthUser);

function getAuthUser(resolve, reject){
    if (isAuth) {resolve(currentUser)} 
    else {reject(error)};
}

// цепь из 2х обещаний
const isIHaveEnoughMoney = true;
const buyNewPhonePromise = new Promise(getPhone);

function getPhone(resolve, reject){
    if(isIHaveEnoughMoney){
        const phone = {model: 'modelX', color: 'black', year: 2022};
        resolve(phone); 
    }
    else {
        const reason = new Error('try again...');
        reject(reason);
    }
};

async function showMyNewCoolPhone(phone) {
    const showNewPhonePromise = await new Promise(showForFriends);
    function showForFriends(resolve, reject) {
        if (phone){
            const msg = `Hello, i've bought the new phone ${phone.model} ${phone.year}`;
            console.log(msg);
            resolve(msg);
        } else {
            const promiseMsg = "I'll make this again";
            reject(promiseMsg);
        }
    };
};

async function buy() {
    try {
        const phone = await buyNewPhonePromise; 
        const msg   = await showMyNewCoolPhone(phone);
        console.log(msg);
    } catch (error){
        console.log(error)
    }
};

//асинхронный вызов
//old school
/*
const buy = function () {
    buyNewPhonePromise
    .then(showMyNewCoolPhone)
    .catch(error => console.log(error))
};
buy();
*/

(async () => {await buy();})();