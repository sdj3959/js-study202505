let firstNum = prompt("첫 번째 정수 입력");
let secondNum = prompt("두 번째 정수 입력");
let thirdNum = prompt("세 번째 정수 입력");

if (+firstNum + +secondNum === +thirdNum) {
    alert ('비밀의 문이 열립니다!');
} else if (+firstNum + +thirdNum === +secondNum) {
    alert ('비밀의 문이 열립니다!');
} else if (+secondNum + +thirdNum === +firstNum) {
    alert ('비밀의 문이 열립니다!');
} else {
    alert ('퍼즐이 맞지 않습니다. 다시 시도하세요!\n');
}


// let a = +prompt('첫번째 수 입력');
// let b = +prompt('두번째 수 입력');
// let c = +prompt('세번째 수 입력');
//
// // a : 10, b: 20, c: 15
// // if (a === b && b === c) {}
//
// // if (a + b === c || b + c === a || a + c === b) {
// //   alert('비밀의 문이 열립니다.');
// // } else {
// //   alert('퍼즐이 맞지 않습니다.');
// // }
//
// // 조건이 맞을 때 사용할 논리 플래그
// let isCorrect = false;
//
// if (a + b === c) {
//     isCorrect = true;
// }
// else if (a + c === b) {
//     isCorrect = true;
// }
// else if (b + c === a) {
//     isCorrect = true;
// }
//
// if (isCorrect) {
//     alert('비밀의 문이 열립니다.');
// } else {
//     alert('퍼즐이 맞지 않습니다.');
// }
