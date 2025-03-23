const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

// 1. JSON 문자열을 JavaScript 객체로 변환
const users = JSON.parse(jsonString);

// 2. 구조 분해 할당으로 필요한 값만 뽑아서 새 배열 만들기
const result = users.map(function (user) {
    const { id, name, age } = user;
    return { id, name, age };
});

console.log(result);