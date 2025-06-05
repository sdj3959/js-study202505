

const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

// every() 구현
function every(callback) {
  let mappedBoolean = false;
  for (const user of userList) {
    if(!callback(user)) {
      mappedBoolean = false;
      break;
    }
    else mappedBoolean = true;
  }
  return mappedBoolean
}

// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');  // false
console.log(result1);

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbys.length > 0);  // true
console.log(result2);

// 모든 사용자의 나이가 17세 이상인가?
const result3 = every(user => user.age > 17);
console.log(result3);

console.log('==============================');


// some() 구현하기
function some(callback) {
  let mappedBoolean = false;
  for (const user of userList) {
    if (callback(user)) {
      mappedBoolean = true;
      break;
    }
  }
  return mappedBoolean;
}

// 이름에 '왕'이 포함된 사람이 있는가?
const result4 = some(user => user.userName.includes('왕')); // true
console.log(result4);

// 경기도에 사는 사용자가 있는가?
const result5 = some(user => user.address === '경기'); // true
console.log(result5);

console.log('==============================');

const allMatch = every(user => user.hobbys.length >= 3 && user.address === '서울');
console.log(allMatch);
const anyMatch = some(user => user.hobbys.length >= 3 && user.address === '서울');
console.log(anyMatch);

console.log('==============================');


// none() 구현하기

