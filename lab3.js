//Bài 25

const name = "Cao Thành Công";
const age = 19;
const major = "Lập trình Web";

console.log(`
Xin chào ${name}.
Bạn ${age} tuổi.
Ngành học: ${major}.
`);


// Bài 26
const student = {
  id: "PH63994",
  name: "Cao Thành Công",
  age: 19,
  major: "Lập trình Web",
};

console.log(`
Mã sinh viên: ${student.id}
Họ tên: ${student.name}
Tuổi: ${student.age}
Ngành: ${student.major}
`);


//Bài 27

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));

//Bài 28
// a. Tính bình phương
const square = (number) => {
  return number * number;
};

console.log(square(5));


// b. Tính tổng
const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));


// c. Chào người dùng
const sayHello = (name) => {
  return `Xin chào ${name}`;
};

console.log(sayHello("Công"));