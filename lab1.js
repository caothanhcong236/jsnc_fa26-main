
// Bai 1
let name = "Cao Thành Công";
let age = 19;
let address = "Hà Nội";
let isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);

// Bai 2
// let age = 20;
// console.log(age);
// age = 21;
// console.log(age);

// Bai 3
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

//Bai 4
function sayHello(name) {
    console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Công");
sayHello("Nam");

//Bai 5
function sum(a, b) {
    return a + b;
}

const result = sum(10, 20);

console.log(result);

// bai 6
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(50000, 3);

console.log(total);



//bai7
const math = 8;
const english = 7;
const javascript = 9;

function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

const average = calculateAverage(8, 7, 9);

console.log(average);