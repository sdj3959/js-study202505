

// 태그 변수

// input, 도전 버튼
const $input = document.getElementById(`guess-input`);
const $guessBtn = document.querySelector(`.guess-button`);

// 범위 및 남은 기회
const $begin = document.getElementById(`begin`);
const $end = document.getElementById(`end`);
const $chanceLeft = document.getElementById(`chances-left`);

// 업다운 표시
const $feedback = document.getElementById(`feedback`);

// 도전기록 ul
const $ul = document.getElementById(`history-list`);

// 모달 관련
const $finishModal = document.getElementById(`finish-modal`);
const $modalTitle = document.getElementById(`finish-title`);
const $modalText = document.getElementById(`finish-text`);
const $modalBtn = document.getElementById(`restart-button`);

// ================================================================================

// 게임 상태 객체
const game = {
  rnd : null,
  min : 1,
  max: 100,
  lastChance : 10
};
let inputValue = null;


// ================================================================================

// 피드백 클래스 초기화 함수
function resetFeedbackClass() {
  ['up', 'down', 'correct'].forEach(cls => $feedback.classList.remove(cls));
}

// min max lastChance 조절 함수
function updateRangeAndChance(isUp) {
  if (isUp){
    game.max = +inputValue-1;
    $end.textContent = game.max;
  } else {
    game.min = +inputValue+1;
    $begin.textContent = game.min;
  }
  game.lastChance--;
  $chanceLeft.textContent = game.lastChance;
}

// 게임오버 상태 체크 함수
function checkGameOver() {
  if (game.min === game.max && game.lastChance > 0) {
    showModal(true, game.rnd);
    return true;
  }
  if (game.lastChance === 0) {
    showModal(false, game.rnd);
    return true;
  }
  return false;
}



// 피드백 글자 변경 함수
function feedbackChange(result) {
  const feedbackList = ['up', 'down', 'correct'];
  switch (result) {
    case 'CORRECT' :
      $feedback.textContent = 'CORRECT!!';
      resetFeedbackClass();
      $feedback.classList.add(`correct`);
      break;
    case 'DOWN' :
      $feedback.textContent = 'DOWN!!';
      resetFeedbackClass();
      $feedback.classList.add(`down`);
      break;
    case 'UP' :
      $feedback.textContent = 'UP!!';
      resetFeedbackClass();
      $feedback.classList.add(`up`);
      break;
    case 'RESTART' :
      $feedback.textContent = '추리를 시작하세요!';
      resetFeedbackClass();
  }
}

// 도전기록 리스트 추가 함수
function addList(string, upDown) {
  const $newLi = document.createElement(`li`);
  $newLi.classList.add(`history-item`);
  $newLi.textContent = string;

  $newLi.classList.remove(`up`);
  $newLi.classList.remove(`down`);

  $newLi.classList.add(upDown);

  $ul.prepend($newLi);
}

// 모달 보여주는 함수
function showModal(isCorrect, answer) {
  if (isCorrect) {
    $modalTitle.style.color = 'var(--success-color)';
    $modalTitle.textContent = "🎉Congratulation";
    $modalText.textContent = `정답은 ${answer}였습니다!`;
  } else {
    $modalTitle.style.color = 'var(--danger-color)';
    $modalTitle.textContent = "GAME OVER";
    $modalText.textContent = `정답은 ${answer}였습니다...`;
  }
  $finishModal.classList.add(`show`);
}

// 게임 시작 함수
function gameStart(e) {
  // 랜덤 값 초기화 및 디버깅용 정답
  game.rnd = Math.floor(Math.random() * 100) + 1;
  console.log(`정답 : ${game.rnd}`);

  // 범위 초기화
  game.min = 1;
  game.max = 100;

  // 남은 기회 초기화
  game.lastChance = 10;

  // UI 초기화
  clearUI();
}

// UI 초기화 함수
function clearUI() {
  // 범위 및 남은기회 초기화
  $begin.textContent = game.min;
  $end.textContent = game.max;
  $chanceLeft.textContent = game.lastChance;
  // 추리를 시작하세요! 초기화
  feedbackChange('RESTART');
  // 도전 기록 초기화
  $ul.innerHTML = '';

  // inputText 값 초기화
  $input.value = '';
  $input.focus();

  // 모달 종료
  $finishModal.classList.remove(`show`);
}

// ================================================================================


// 정답 입력 값을 받아오는 이벤트 리스너
$input.addEventListener(`input`, e=>{
  inputValue = e.target.value;
});

// 도전 버튼 이벤트 리스너
$guessBtn.addEventListener('click', e => {
  // 버튼 submit 기능 삭제
  e.preventDefault();

  // 정답 판별 로직
  if (+inputValue === game.rnd) { // 정답일 경우
    feedbackChange('CORRECT');
    showModal(true, game.rnd);
  } else if (inputValue > game.rnd && inputValue <= game.max) { // 정답보다 큰 경우
    feedbackChange('DOWN');
    addList(`${inputValue} (DOWN)`, 'down');
    updateRangeAndChance(true);
    checkGameOver();
  } else if (inputValue < game.rnd && inputValue >= game.min) { // 정답보다 작은 경우
    feedbackChange('UP');
    addList(`${inputValue} (UP)`, 'up');
    updateRangeAndChance(false);
    checkGameOver();
  } else { // 범위 내 입력이 아닐 경우
    alert(`올바른 범위 내 숫자를 입력하세요`);
  }
  // 사용자 편의 (입력창 초기화 및 포커스)
  $input.value = '';
  $input.focus();
});


// 모달 다시 도전하기 버튼 클릭시 재시작
$modalBtn.addEventListener('click', gameStart);

// ================================================================================

// index.html 실행 시 게임 시작
gameStart();

