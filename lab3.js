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

// Bài 29

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(newNumbers);



// Bài 30

const students = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
  { id: 3, name: "Cường" },
];

const studentNames = students.map((student) => {
  return student.name;
});

console.log(studentNames);

// Bài 31

const studentList = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Bình", age: 21 },
  { id: 3, name: "Cường", age: 20 },
];

const studentHTML = studentList.map((student) => {
  return `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
    </tr>
  `;
}).join("");

document.getElementById("students").innerHTML = `
  <table border="1" cellpadding="10">
    <tr>
      <th>ID</th>
      <th>Tên</th>
      <th>Tuổi</th>
    </tr>
    ${studentHTML}
  </table>
`;


// Bài 32

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 25000000,
  },
  {
    id: 3,
    name: "AirPods",
    price: 5000000,
  },
];

const productHTML = products.map((product) => {
  return `
    <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price.toLocaleString("vi-VN")} VNĐ</td>
    </tr>
  `;
}).join("");

document.getElementById("products").innerHTML = `
  <table border="1" cellpadding="10">
    <tr>
      <th>ID</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
    </tr>
    ${productHTML}
  </table>
`;

// Bài 33

const products33 = [
  {
    id: 1,
    name: "Áo thun",
    price: 150000,
    category: "Thời trang",
  },
  {
    id: 2,
    name: "Quần jean",
    price: 350000,
    category: "Thời trang",
  },
  {
    id: 3,
    name: "Giày sneaker",
    price: 800000,
    category: "Giày",
  },
];

const productListHTML = products33.map((product) => {
  return `
    <tr class="hover:bg-gray-50">
      <td class="px-4 py-2 border border-gray-300">
        ${product.id}
      </td>

      <td class="px-4 py-2 border border-gray-300">
        ${product.name}
      </td>

      <td class="px-4 py-2 border border-gray-300">
        ${product.price.toLocaleString("vi-VN")} VNĐ
      </td>

      <td class="px-4 py-2 border border-gray-300">
        ${product.category}
      </td>
    </tr>
  `;
}).join("");

document.getElementById("product-list").innerHTML = `
  <table class="w-full border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 border border-gray-300">ID</th>
        <th class="px-4 py-2 border border-gray-300">Tên sản phẩm</th>
        <th class="px-4 py-2 border border-gray-300">Giá</th>
        <th class="px-4 py-2 border border-gray-300">Danh mục</th>
      </tr>
    </thead>

    <tbody>
      ${productListHTML}
    </tbody>
  </table>
`;