function min2(num1, num2) {
  if(num1<num2) return num1;
  else return num2;
}

function min3(num1,num2,num3) {
  let min = num1;
  if(min>num2) min = num2;
  if(min>num3) min = num3;
  return min;
}

function isEven(num) {
  return num%2===0;
}

function min(...numbers) {
  let min = numbers[0];
  for (let num of numbers){
    if(min>num) min = num;
  }
  return min;
}

//result에는 56이 리턴되어야 함.
let result1 = min2(134, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
let result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
let result3 = isEven(3);
console.log(`result3: ${result3}`);


// result4에는 -1000이 저장되어야 함.
let result4 = min(9, 76, -90, -1000, 555, 780);
console.log(`result4: ${result4}`);