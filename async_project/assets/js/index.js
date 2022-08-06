function getNumber (resolve, reject) {
    const num = Math.random();
    
    if(num >= 0.5) {console.log(num); resolve(`${num} ok`)}
    else (reject(new Error(`${num} error!@#$!`)))
}

const setPromises = [];
for (let i = 0; i < 10; i++) {
    setPromises[i] = new Promise(getNumber)
};
console.log(setPromises);

makePromises();

async function makePromises() {
    try {
        const result = await Promise.race(setPromises); //race, allSettled 
        console.log(result);
    } catch(error) {
        console.log(error)
    }
};

/*

*/