// 1. 10안에 있는 2의 배수를 가로로 출력하기
let result= "";
for (let i = 1; i <= 10; i++) {
  if(i%2 === 0) {
    result += `${i} `;
  }
}
console.log(result);

console.log('==============================');

// 2. 1~50 사이 6의 배수 출력하기
for (let i = 1; i <=50 ; i++) {
  if (i % 6 === 0) {
    console.log(i);
  }
}

console.log('==============================');

// 3. 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
for (let i = 1; i <= 100; i++) {
  if(i%7===0 && i%14!==0) {
    console.log(i);
  }
}

console.log('==============================');

// 4. 1~7777 안에 있는 3의 배수 개수 알아내기

let result4=0;

for (let i = 1; i <= 7777; i++) {
  if (i%3===0) result4++;
}
console.log(`3의 배수의 총 개수 : ${result4}개`);

console.log('==============================');

for (let i = 0; i < 5; i++) {
  console.log('hello');
}
