let rn1 = Math.floor(Math.random() * 10)+1;
let rn2 = Math.floor(Math.random() * 10)+1;
let questionNum = 1;
let countCorrect = 0;
let countWrong = 0;

while (true) {
  userAnswer = +prompt(`Q${questionNum}. ${rn1} + ${rn2} = ???`);


  if (userAnswer === 0) {
    alert(`게임을 종료합니다.`);
    alert(`# 정답 횟수 : ${countCorrect}회, 틀린 횟수 : ${countWrong}회`);
    countCorrect = 0;
    countWrong = 0;
    break;
  } else if (userAnswer !== rn1 + rn2) {
    rn1 = Math.floor(Math.random() * 10) + 1;
    rn2 = Math.floor(Math.random() * 10) + 1;
    questionNum++;
    countWrong++;
    alert(`틀렸습니다!`);
    continue;
  }
  else {
    alert(`정답입니다!`);
    rn1 = Math.floor(Math.random() * 10) + 1;
    rn2 = Math.floor(Math.random() * 10) + 1;
    questionNum++;
    countCorrect++;
    continue;
  }
}