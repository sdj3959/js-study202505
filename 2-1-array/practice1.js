/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후,
   입력받은 값들을 배열에 순차적으로 저장합니다.

2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

/*// 숫자들을 쌓아놓을 배열
let numbers = [];

let result = 0;

for (let i = 0; i < 6; i++) {
  numbers[i] = prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력하세요!`);
  if (numbers[i] === `그만`) {
    numbers.pop();
    for (let userNum of numbers) result += +numbers[i-1];
    alert(`입력한 숫자 목록 ${numbers}\n입력한 숫자 총합 : ${result} `);
    break;
  }
  if(i ===5){
    const N = numbers.length;
    for (let j = 0; j<N; j++) {
      result += +numbers[j];
    }
    alert(`입력한 숫자 목록 ${numbers}\n입력한 숫자 총합 : ${result} `);
  }
}*/


/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후,
   입력받은 값들을 배열에 순차적으로 저장합니다.

2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 숫자들을 쌓아놓을 배열
let numbers = [];

// 총합을 저장할 변수
let total = 0;

while (numbers.length < 6) {
  // 사용자에게 특정 숫자를 입력받음
  let num = prompt('숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!');

  // 종료조건
  if (num === '그만') {
    break;
  }
  // 입력한 데이터가 숫자인지 검증
  if (isNaN(+num)) {
    alert('숫자만 정확하게 입력하세요.');
    continue;
  }

  // 해당숫자를 배열에 저장
  numbers.push(num);
  total += parseInt(num);

} // end while

alert(`입력한 숫자 목록: [${numbers}]
입력한 숫자 총합: ${total}`);

