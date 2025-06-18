// app.js


// ========== 전역 변수 및 상수 ========== //

// 💥 중요: 이 부분에 자신의 Gemini API 키를 입력하세요!
const API_KEY = 'AIzaSyCaae9-ZZSvrNBFOHHSmFxHXKkJw6Qu0qM';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

// 현재 추가된 재료들을 저장하는 배열 (상태 관리)
let ingredients = [];


// ========== DOM 요소 캐싱 ========== //

// 스크립트 시작 시 필요한 모든 HTML 요소를 미리 찾아 변수에 담아둡니다.
const $ingredientForm = document.getElementById('ingredient-form');
const $ingredientInput = document.getElementById('ingredient-input');
const $ingredientList = document.getElementById('ingredient-list');
const $getRecipeBtn = document.getElementById('get-recipe-btn');
const $loading = document.getElementById('loading');
const $recipeOutput = document.getElementById('recipe-output');


// ========== 핵심 로직 함수 ========== //

/**
 * @description 현재 ingredients 배열의 내용을 바탕으로 재료 태그를 화면에 렌더링합니다.
 */
function renderTags() {
  // 1. 기존 태그들을 모두 지웁니다.
  $ingredientList.innerHTML = '';

  // 2. ingredients 배열을 순회하며 각 재료에 대한 태그를 생성합니다.
  ingredients.forEach(ingredient => {
    const $tag = document.createElement('div');
    $tag.className = 'tag-item';

    const $tagText = document.createElement('span');
    $tagText.textContent = ingredient;

    const $removeBtn = document.createElement('button');
    $removeBtn.className = 'remove-tag';
    $removeBtn.textContent = 'x';
    // dataset을 사용해 버튼에 어떤 재료를 삭제해야 하는지 정보를 심어둡니다.
    $removeBtn.dataset.ingredient = ingredient;

    $tag.appendChild($tagText);
    $tag.appendChild($removeBtn);
    $ingredientList.appendChild($tag);
  });
}

/**
 * @description Gemini API에게 보낼 프롬프트를 생성합니다.
 * @param {string[]} items - 재료 목록 배열
 * @returns {string} - 완성된 프롬프트 문자열
 */
function generatePrompt(items) {
  // AI가 더 좋은 답변을 생성하도록, 역할을 부여하고 명확하게 지시합니다.
  const prompt = `
당신은 세계 최고의 요리사입니다. 아래의 재료들을 활용해서 만들 수 있는 최고의 요리 레시피를 하나만 추천해주세요.

[사용할 재료]
${items}

[출력 형식]
- 요리 이름: (여기에 요리 이름)
- 한 줄 소개: (여기에 한 줄 소개)
- 필요한 재료: (재료 목록)
- 요리 순서: (단계별 요리 순서)
- 꿀팁: (요리를 더 맛있게 만드는 꿀팁)

형식에 맞춰서 답변해주세요.
    `;
  return prompt;
}

/**
 * @description XMLHttpRequest를 사용하여 Gemini API를 호출하고 결과를 처리합니다.
 */
function getRecipeFromAI() {
  if (ingredients.length === 0) {
    alert('재료를 하나 이상 추가해주세요!');
    return;
  }

  // 1. 로딩 화면을 보여주고, 이전 결과는 숨깁니다.
  $loading.classList.remove('hidden');
  $recipeOutput.classList.add('hidden');

  // 2. API에 보낼 요청 데이터를 준비합니다.
  const prompt = generatePrompt(ingredients);
  const payload = {
    contents: [
      {
        parts: [{text: prompt}]
      }]
  };
  const requestData = JSON.stringify(payload);

  // 3. XMLHttpRequest 객체 생성 및 설정
  const xhr = new XMLHttpRequest();
  xhr.open('POST', API_URL);
  xhr.setRequestHeader('Content-Type', 'application/json');

  // 4. 요청이 성공적으로 완료되었을 때 실행될 이벤트 핸들러
  xhr.addEventListener('load', e => {
    // 로딩 화면 숨기기
    $loading.classList.add('hidden');
    $recipeOutput.classList.remove('hidden');

    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      // Gemini API 응답 구조에 따라 텍스트를 추출합니다.
      const recipeText = responseData.candidates[0].content.parts[0].text;
      $recipeOutput.textContent = recipeText;
    } else {
      // API 에러 처리
      console.error('API Error:', xhr.status, xhr.responseText);
      $recipeOutput.textContent = '레시피를 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.';
    }
  });

  // 5. 네트워크 에러 등 요청 자체가 실패했을 때 실행될 이벤트 핸들러
  xhr.addEventListener('error', e => {
    $loading.classList.add('hidden');
    $recipeOutput.textContent = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.';
  });

  // 6. 준비된 요청을 서버로 전송합니다.
  xhr.send(requestData);
}


// ========== 이벤트 리스너 설정 ========== //

// 재료 입력 폼 제출 이벤트
$ingredientForm.addEventListener('submit', e => {
  e.preventDefault(); // form의 기본 동작(새로고침)을 막습니다.

  const newIngredient = $ingredientInput.value.trim();

  // 입력값이 있고, 중복된 재료가 아닐 때만 추가
  if (newIngredient && !ingredients.includes(newIngredient)) {
    ingredients.push(newIngredient);
    renderTags(); // 태그 다시 그리기
  }

  $ingredientInput.value = ''; // 입력창 비우기
  $ingredientInput.focus();
});

// 재료 태그 삭제 이벤트 (이벤트 위임)
// $ingredientList는 항상 존재하므로, 여기에 이벤트를 걸고
// 실제 클릭된 대상이 .remove-tag인지 확인합니다.
$ingredientList.addEventListener('click', e => {
  if (e.target.matches('.remove-tag')) {
    const ingredientToRemove = e.target.dataset.ingredient;
    // 삭제할 재료를 제외한 나머지 재료들로 새로운 배열을 만듭니다.
    ingredients = ingredients.filter(item => item !== ingredientToRemove);
    renderTags(); // 태그 다시 그리기
  }
});

// 레시피 추천받기 버튼 클릭 이벤트
$getRecipeBtn.addEventListener('click', getRecipeFromAI);

