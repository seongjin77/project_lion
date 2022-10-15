// const array = [11, 22, 33, 111, 2];
// const result = array
//   .join("")
//   .split("")
// //   .map((v) => +v)
// //   .reduce((a, b) => a + b);
// console.log(result);

// const data3 = [11, 22, 33, 111, 2];

// let sum3 = 0;
// for (i = 0; i < data3.length; i++) {
//     if (String(data3[i]).split("").length === 1) {
//         sum3 += +data3[i];
//     } else {
//         sum3 += String(data3[i])
//             .split("")
//             .reduce((a, b) => {
//                 return +a + +b;
//             });
//     }
// }

// console.log(sum3)

// let input4 = '100000'.split("").reverse();

// // 반복문만 사용하여 숫자단위 콤마 찍기
// let result4 = [];

// for (i = 0; i < input4.length; i++) {
//     if (i !== 0 && i % 3 === 0) {
//         result4.push(",");
//     }
//     result4.push(input4[i]);
// }

// console.log(result4.reverse().join(""));

function comma(num) {
    if (num.length <= 3) {
      return num;
    } else {
      return (
        comma(num.slice(0, num.length - 3)) + "," + num.slice(num.length - 3)
      );
    }
  }
 console.log(comma("1234567"));


// function comma(won) {
    
//     for (let i = won.length - 3; i > 0; i -= 3) {
//         won = won.slice(0, i) + "," + won.slice(i);
//       console.log(won);
//     }
//   }
  
//  console.log(comma("1234567")); 