let rn = Math.floor(Math.random() * 101);
let userNum = 0;
let remainCount = 0;
let min = 0;
let max = 100;
let userLevel = 0;

while (true) {
  userLevel = +prompt(`난이도를 선택하세요!\n [1.상 (3번의 기회) | 2.중 (6번의 기회) | 3.하 (10번의 기회)]`);
  if (userLevel === 1) break;
  else if (userLevel === 2) break;
  else if (userLevel === 3) break;
  else {
    alert(`난이도 숫자를 정확하게 입력하세요.`);
  }
}

if(userLevel === 1){
  while (true) {
    userNum = +prompt(`숫자를 입력하세요! [ ${min} ~ ${max} ]`);
    if (userNum > rn) {
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }

      max = userNum-1;
      remainCount++;
      if (remainCount === 3) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`DOWN!!`);
      alert(`남은 기회가 ${3-remainCount}번 남았습니다.`);
    } else if (userNum < rn){
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }
      min = userNum+1;
      remainCount++;
      if (remainCount === 3) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`UP!!`);
      alert(`남은 기회가 ${3-remainCount}번 남았습니다.`);
    } else if (userNum === rn) {
      alert(`정답입니다!!`);
      break;
    } else {
      alert(`범위 안의 값을 입력하세요!`);
      continue;
    }
  }
} else if (userLevel === 2) {
  while (true) {
    userNum = +prompt(`숫자를 입력하세요! [ ${min} ~ ${max} ]`);
    if (userNum > rn) {
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }

      max = userNum-1;
      remainCount++;
      if (remainCount === 6) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`DOWN!!`);
      alert(`남은 기회가 ${6-remainCount}번 남았습니다.`);
    } else if (userNum < rn){
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }
      min = userNum+1;
      remainCount++;
      if (remainCount === 6) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`UP!!`);
      alert(`남은 기회가 ${6-remainCount}번 남았습니다.`);
    } else if (userNum === rn) {
      alert(`정답입니다!!`);
      break;
    } else {
      alert(`범위 안의 값을 입력하세요!`);
      continue;
    }
  }
} else if (userLevel === 3) {
  while (true) {
    userNum = +prompt(`숫자를 입력하세요! [ ${min} ~ ${max} ]`);
    if (userNum > rn) {
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }

      max = userNum-1;
      remainCount++;
      if (remainCount === 10) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`DOWN!!`);
      alert(`남은 기회가 ${10-remainCount}번 남았습니다.`);
    } else if (userNum < rn){
      if(userNum < min || userNum > max) {
        alert(`범위 안의 값을 입력하세요!`);
        continue;
      }
      min = userNum+1;
      remainCount++;
      if (remainCount === 10) {
        alert(`남은 기회가 모두 소진 되었습니다. 정답은 ${rn}이었지롱~ ㅎㅎ`);
        break;
      }
      if(min === max) {
        alert(`정답은 ${rn} 입니다!`);
        break;
      }
      alert(`UP!!`);
      alert(`남은 기회가 ${10-remainCount}번 남았습니다.`);
    } else if (userNum === rn) {
      alert(`정답입니다!!`);
      break;
    } else {
      alert(`범위 안의 값을 입력하세요!`);
      continue;
    }
  }
}