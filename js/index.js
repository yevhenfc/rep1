// let ar = ['a', 'b', 'c', 'd', 'e']
// let i=0;
// while (i++ < ar.length) console.log(i-1,ar[i-1]); 

// let ar = [1, 2, 3, 4, 5]
// // while (i++ < ar.length) 
// for (i = ar.length-1; i>=0; i--) {
//         // ar[i-1]*=2;
//         console.log(i, ar[i], ar[i]%2 ? ar[i]:0, ar[i]%2!=false ? 0:ar[i]);
//     } 

let arr = [10, 20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0, ]
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
let sum1=[];
// for (i = 0; i < (arr.length - 1); i++) console.log(i, arr[i], arr[i+1], arr[i]+arr[i+1])
// for (i = 0; i < (arr.length - 1); i+=2) console.log(i, arr[i], arr[i+1], arr[i]+arr[i+1])
for (i = 0, j=0; i < (arr.length - 1); i+=2,j++) {
    sum1[j]=arr[i]+arr[i+1];
}
console.log(sum1);

