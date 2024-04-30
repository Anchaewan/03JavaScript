// 객체 생성
const user = {
  name: "안채완",
  age: 29,
  address: {
    city: "서울",
    detail: "영등포 양평동",
    postNumber: 15648,
  },
};

const userB = {
  name: "에론",
  age: 43,
  address: {
    city: "인천",
    detail: "서구 서동",
    postNumber: 56895,
  },
};

// 객체접근
console.log(userA.address.postNumber);

// 선택적 체이닝
console.log(userA.address?.postNumber || "우편번호가 없습니다.");

// 구조분해 할당
const { name: realName, age, address } = userA;
const { city, detail, postNumber } = address;
console.log(realName);
