/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/

/**
 * 키와 몸무게를 전달받아 BMI 지수를 계산해서 반환하는 함수
 * @param height
 * @param weight
 * @returns {number} - 계산된 실수형 BMI 지수
 */
function calcBMI(height, weight) {
  return weight / ((height/100) * (height/100));
}

let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w);

function round(myBmi, inputLimit) {
  let digit = 0;
  switch (inputLimit) {
    case 2 : digit = 100; break;
    case 3 : digit = 1000;
  }
  let result = Math.round(myBmi*digit)/ digit;
  if(result < 18.5) console.log(`당신은 저체중입니다.`);
  else console.log(`당신은 정상체중입니다.`);
  return result;
}


console.log(
  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
