let rn1 = 0;
let rn2 = 0;
let questionNum = 1;
let countCorrect = 0;
let countWrong = 0;

let calculateVer = 0;
let userLevel = 0;
let calculateLevel = 0;
let calculateLevel2 = 0;

while (true) {
  userLevel = +prompt(`~~~~~ 난이도 설정 ~~~~~\n[1.상 (3자리수) | 2.중 (2자리수) | 3.하 (1자리수)`);
  if (userLevel === 1) {
    calculateLevel = 900;
    calculateLevel2 = 100;
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    break;
  } else if (userLevel === 2) {
    calculateLevel = 90;
    calculateLevel2 = 10;
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    break;
  } else if (userLevel === 3) {
    calculateLevel = 10;
    calculateLevel2 = 1;
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    break;
  }else {
    alert(`난이도를 숫자로 정확히 입력해주세요.`);
    continue;
  }
}

while (true) {
  calculateVer = Math.floor(Math.random() * 3)+1;

  if (calculateVer === 1) userAnswer = +prompt(`Q${questionNum}. ${rn1} + ${rn2} = ???`);
  else if (calculateVer === 2) {
    if (rn1 === rn2) {
      while (true) {
        rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
        rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
        if (rn1 !== rn2) break;
      }
    }
    userAnswer = +prompt(`Q${questionNum}. ${rn1} - ${rn2} = ???`);
  }
  else if (calculateVer === 3) userAnswer = +prompt(`Q${questionNum}. ${rn1} * ${rn2} = ???`);




  if (userAnswer === 0) {
    alert(`게임을 종료합니다.`);
    alert(`# 정답 횟수 : ${countCorrect}회, 틀린 횟수 : ${countWrong}회`);
    countCorrect = 0;
    countWrong = 0;
    break;
  } else if (userAnswer === rn1 + rn2 && calculateVer === 1) {
    alert(`정답입니다!`);
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    questionNum++;
    countCorrect++;
    continue;
  } else if(userAnswer === rn1 - rn2 && calculateVer === 2){
    alert(`정답입니다!`);
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    questionNum++;
    countCorrect++;
  } else if(userAnswer === rn1 * rn2 && calculateVer === 3){
    alert(`정답입니다!`);
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    questionNum++;
    countCorrect++;
  } else {
    rn1 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    rn2 = Math.floor(Math.random() * calculateLevel) + calculateLevel2;
    questionNum++;
    countWrong++;
    alert(`틀렸습니다!`);
    continue;
  }
}