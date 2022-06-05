// let work = {
//     year: 2015,
//     salary: 100,
//     stag: 0, 
    
//     calcStag: function () {
//         this.stag = (new Date().getFullYear()) - this.year
//         return this.stag;
//     },
    
//     setSalary: function(pr = 15) {
//         if (this.stag >= 3) this.salary *= (1 + pr / 100)
//         return this.salary
//     }
// }
// ;
// console.log(work.calcStag());
// console.log(work.setSalary());


// let arrT = {
//     start: 0,
//     end: 0,
//     arr: [],
//     genArr: function(start, n, step){
//         let res = [], i;
//         this.start = start;
//         this.end = start + (n - 1) * step;
//         for (i = 0; i < n; i++) res[i] = (i + 1)  * step;
//         return res;
//     },

//     setArr: function(start, n, step){
//         let res = [], i;
//         this.start = start;
//         this.end = start + (n - 1) * step;
//         for (i = 0; i < n; i++)  res.push((i + 1)  * step); //res[i] = (i + 1)  * step;
//         this.arr = res;
//     },
// }; 
    
// // console.log(arrT.genArr(10, 5, 10));
// console.log(arrT.setArr(10, 5, 10));


objBuy = {
    totalSum: 0,
    sale: 0,
    setSum: function(value) {return this.totalSum=value}, 
    addSale: function(){
        switch(true){
            case this.totalSum >= 1000: this.totalSum *=.95; this.sale = 5; break;
            case this.totalSum >= 500:  this.totalSum *=.97; this.sale = 3; break;
            default:                                         this.sale = 0; break;
        }
    },
};

objBuy.setSum(100);
objBuy.addSale();
console.log(objBuy);

objBuy.setSum(750);
objBuy.addSale();
console.log(objBuy);

objBuy.setSum(1500);
objBuy.addSale();
console.log(objBuy);
