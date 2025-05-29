let firstNum = prompt("첫 번째 수 입력");
let secondNum = prompt("두 번째 수 입력");
let thirdNum = prompt("세 번째 수 입력");

if (+firstNum <= +secondNum && +firstNum <= +thirdNum ) {
    alert(`최소값 : ${firstNum}`);
} else if (+secondNum <= +firstNum && +secondNum <= +thirdNum ) {
    alert(`최소값 : ${secondNum}`);
}  else {
    alert(`최소값 : ${thirdNum}`);
}

// let a = +prompt('첫번째 수 입력');
// let b = +prompt('두번째 수 입력');
// let c = +prompt('세번째 수 입력');
//
// // 최소값을 담을 변수
// let min;
//
// // 가장 작은 수 찾기
// if (a < b) {
//     // a는 b보다 작은 상태
//     if (a < c) {
//         // a가 최소값
//         min = a;
//     } else {
//         // c가 최소값
//         min = c;
//     }
// } else {
//     // b가 a보다 작은 상태
//     if (b < c) {
//         // b가 최소값
//         min = b;
//     } else {
//         // c가 최소값
//         min = c;
//     }
// }
//
// alert(`최소값: ${min}`);