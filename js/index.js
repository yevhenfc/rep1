// let ar = ['a', 'b', 'c', 'd', 'e']
// let i=0;
// while (i++ < ar.length) console.log(i-1,ar[i-1]); 

// let ar = [1, 2, 3, 4, 5]
// // while (i++ < ar.length) 
// for (i = ar.length-1; i>=0; i--) {
//         // ar[i-1]*=2;
//         console.log(i, ar[i], ar[i]%2 ? ar[i]:0, ar[i]%2!=false ? 0:ar[i]);
//     } 

// let arr = [10, 20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0, ]
// for (i = 0; i < arr.length; i++) {arr[i] == 0 ? console.log(i) : true}
// let res=0;
// for (i = 0; i < arr.length; i++) {arr[i] == 0 ? res++ : true};
// до первого нуля
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 0)  break;
//     console.log(arr[i]); 
//     res++
// };
// console.log(res);

// сумма соседених эллементов
// 1+2 2+3
// 1+2 3+4
// let sum1=[];
// for (i = 0; i < (arr.length - 1); i++) console.log(i, arr[i], arr[i+1], arr[i]+arr[i+1])
// for (i = 0; i < (arr.length - 1); i+=2) console.log(i, arr[i], arr[i+1], arr[i]+arr[i+1])
// for (i = 0, j=0; i < (arr.length - 1); i+=2,j++) {
//     sum1[j]=arr[i]+arr[i+1];
// }
// console.log(sum1);

//let arr = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];
// find and show negative values
// for (i = 0; i < arr.length; i++) arr[i] < 0 ? console.log(arr[i]):1;
// function funShowNegVal(userArr) {
//     for (i = 0; i < userArr.length; i++) userArr[i] < 0 ? console.log(userArr[i]):1;
// };
// funShowNegVal(arr);


// qty of negative ellements
// for (i = 0, j=0; i < arr.length; i++) arr[i] < 0 ? (console.log(arr[i]),j++):1;
// console.log(j);
// function funQtyNegVal(userArr) {
//     for (i = 0, j=0; i < arr.length; i++) arr[i] < 0 ? (console.log(arr[i]),j++):1;
//     return j;
// };
// console.log(funQtyNegVal(arr));

// save results to another array
// let res =[];
// for (i = 0, j=0; i < arr.length; i++) arr[i] < 0 ? (res[j]=arr[i],j++):1;
// console.log(res);
// function funSaveResToArray(userArr) {
//     let res =[];
//     for (i = 0, j=0; i < userArr.length; i++) userArr[i] < 0 ? (res[j]=userArr[i],j++):1;
//     return(res);
// };
// console.log(funSaveResToArray(arr));


//switch negative to zero
// for (i = 0; i < arr.length; i++) arr[i] < 0 ? arr[i]=0:1;
// console.log(arr);
// function funNegativeToZero(userArr) {
//     for (i = 0; i < userArr.length; i++) userArr[i] < 0 ? userArr[i]=0:1;
//     return userArr;
// };
// console.log(funNegativeToZero(arr));
// return elements less limit
// function fArrayLim(userArr, lim = prompt('enter lim', 10)) {
// for (i = 0; i < userArr.length; i++) userArr[i] <= lim ? console.log(userArr[i]) : 1
// };
// function fArraySumPos(userArr) {
//     let res = 0;
//     for (i = 0; i < userArr.length; i++) userArr[i] >= 0 ? res += userArr[i]: 1
//    console.log(res);    
// }; 
// fArraySumPos(arr);
// function fArraySqr(userArr) {
//     let res = 0;
//     for (i = 0; i < userArr.length; i++) userArr[i] = userArr[i]**2;    
//     return(userArr);
// }; 
// console.log(fArraySqr(arr));

// function negat(userArr) {
//     let res1 = [];
//     for (i = 0, j = 0; i < userArr.length; i++) userArr[i] < 0 ? (res1[j] = userArr[i], j++) : false;
//     return(res1);
// }; 

// function sumArr(userArr) {
//     let res = 0;
//     for (i = 0; i < userArr.length; i++) userArr[i] < 0 ? res += userArr[i] : 0;
//     return(res);
// }

// function fArraySqr(userArr){
//         let qwe = negat(userArr) , sumw;    
//         sumw = sumArr(qwe);
//         return(sumw);
//     }; 

//     console.log(fArraySqr(arr));
// ******************************************************************************************************
// ******************************************************************************************************
let arr = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];
//find words > 4 symbols
const words = ['hello','Vasya','Oh','fox','JS','array'];

let checkLen = (item) => item.length > 4 ? true : false;

let res = [], i = 0;
//words.forEach(function(item, j, arr) {item.length > 4 ? (res[i] = item, i++) : false});
// words.forEach(checkLen(item) == true ? (res[i] = item, i++) : false);

// console.log(res);
// ******************************************************************************************************
/*
1. Сумма нечетных элементов массивов
2. Вывести индексы нулевых эелементов массива
3. 2 массива соединить и преобразовать в строку
4. отфильтровать массив, удалив все нули
*/ 

//1. Сумма нечетных элементов массивов
//1-1
// let a = [1, 2, 3, 4, 5, 6];
// let resOdd = a.filter(isOdd = (value) => value % 2 == 1);
// let resSum1 = resOdd.reduce(sumNum = (a, b) => a + b)
// console.log(resSum1);
// //1-2
// let resSum2 = (a) => a.filter((el, i ) => (el%2)).reduce((SumNum, val) => SumNum + val);
// console.log(resSum2(a));
// //1-3
// let resSum3 = (a) => {
//     let res = 0;
//     a.forEach(el => el %2 != 0 ? res += el : 0);
//     return res;
// };
// console.log(resSum3(a));

//2. Вывести индексы нулевых эелементов массива
let a = [1, 2, 0, 3, 4, 5, 0, 6];
let res = (a) => a.forEach(el, i) => {
    
});