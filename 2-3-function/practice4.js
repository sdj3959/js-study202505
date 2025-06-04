
// 문제1
function repeatString(string, repeat) {
  let result = ``;
  for (let i = 0; i < repeat; i++) {
    result += string;
  }
  return result;
}
// 함수 호출 코드
let result1 = repeatString("안녕", 3);
console.log(`result1: ${result1}`); // 예상 결과: "안녕안녕안녕"

let result2 = repeatString("짝", 5);
console.log(`result2: ${result2}`); // 예상 결과: "짝짝짝짝짝"

console.log('==============================');

// 문제2
function calculateAverageScore(...scores) {
  let min = scores[0];
  let max = scores[0];
  for (const min2 of scores) if(min2<min) min = min2;
  for (const max2 of scores) if(max2>max) max = max2;

  let sumScore = 0;
  for (const score of scores) {
    if (score === min) continue;
    else if (score === max) continue;
    sumScore += score;
  }

  if (scores.length<5) return 0

  return sumScore/(scores.length-2);

}

// 함수 호출 코드
let result3 = calculateAverageScore(10, 0, 20, 30, 40); // 0과 40 제외, (10+20+30)/3
console.log(`result3: ${result3}`); // 예상 결과: 20

let result4 = calculateAverageScore(90, 80, 85, 95, 70, 75); // 70과 95 제외, (90+80+85+75)/4
console.log(`result4: ${result4}`); // 예상 결과: 82.5

let result5 = calculateAverageScore(100, 90); // 최고, 최저 제외하면 점수 없음
console.log(`result5: ${result5}`); // 예상 결과: 0

let result5_1 = calculateAverageScore(10, 20, 30); // 10, 30 제외하면 20 하나 남음 (유효점수 1개)
console.log(`result5_1: ${result5_1}`); // 예상 결과: 0

console.log('==============================');

// 문제3
function greet(name, greetWord) {
  let result = ``;
  if(typeof greetWord === "string") {
    result = `${greetWord}, ${name}님!`;
    return result;
  }
  result = `안녕하세요, ${name}님!`
  return result;
}

// 함수 호출 코드
let result6 = greet("철수");
console.log(`result6: ${result6}`); // 예상 결과: "안녕하세요, 철수님!"

let result7 = greet("영희", "반가워요");
console.log(`result7: ${result7}`); // 예상 결과: "반가워요, 영희님!"

let result8 = greet("미애", "오랜만입니다");
console.log(`result8: ${result8}`); // 예상 결과: "오랜만입니다, 미애님!"

console.log('==============================');

// 문제4
function celsiusToFahrenheit(celsius) {
  return celsius*9/5+32;
}

// 함수 호출 코드
let result9 = celsiusToFahrenheit(0);
console.log(`result9: ${result9}°F`); // 예상 결과: 32°F

let result10 = celsiusToFahrenheit(25);
console.log(`result10: ${result10}°F`); // 예상 결과: 77°F

let result11 = celsiusToFahrenheit(-10);
console.log(`result11: ${result11}°F`); // 예상 결과: 14°F

console.log('==============================');

// 문제5
function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) count++;
  }
  return count;
}

// 함수 호출 코드
let result12 = countChar("banana", "a");
console.log(`result12: ${result12}`); // 예상 결과: 3

let result13 = countChar("apple", "p");
console.log(`result13: ${result13}`); // 예상 결과: 2

let result14 = countChar("javascript is fun", "s");
console.log(`result14: ${result14}`); // 예상 결과: 2

let result15 = countChar("Hello World", "o");
console.log(`result15: ${result15}`); // 예상 결과: 2




