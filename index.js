1. *//Juft sonlarni filter qiladigan funksiya
// const filter = (numbers) => numbers.filter(number => number % 15 === 0);
    


2. *//Massiv elementlari yig'indisini hisoblash
// const sumArray = (numbers) => numbers.reduce((sum, number) => sum + number, 0);



3. *//Istalgan sonning 5-darajasini topish
// const number = (number) => Math.pow(number, 5);



4. *//Pure Function ta'rifi
// Pure funksiyalar har doim bir xil kirish uchun bir xil chiqishni beradi va tashqariga ta'sir qilmaydi.











1. *//Callback function ga oid 4 ta funksiya yozing
*//1 - funksiya
// const filter = (num) => num % 4 === 0;
// const filtersonlar = (numbers, callback) => numbers.filter(callback);
// console.log(filtersonlar([1, 2, 3, 4, 5], filter)); 
*//2 - funksiya
// const add = (num) => num + 5;
// const num = (numbers, callback) => numbers.map(callback);
// console.log(num([1, 2, 3, 4, 5], add));
*//3 - funksiya
// const meet = (name) => `Hello, ${name}!`;
// const names = (names, callback) => names.map(callback);
// console.log(names(['Alice', 'Bob', 'Charlie'], meet));
*//4 - funksiya
// const num = (a, b) => a - b;
// const hullas = (numbers, callback) => numbers.sort(callback);
// console.log(hullas([5, 3, 8, 1, 2], num));



2. *//Asinxron vazifalarda setTimeout() orqali chaqiriladigan callback function yozing.
// const hullas = (name) => {
//     console.log(`Hello, ${name}!`);
// };

// setTimeout(() => hullas('Alice'), 2000);




3. *//Callback function nima uchun kerakligini batafsil izohlab bering.
// allback functionlar quyidagi sabablarga ko'ra kerak:
// Asinxron operatsiyalarni boshqarish: Ma'lumot yuklash, taymerlar, va foydalanuvchi interaktsiyalari kabi asinxron vazifalarni bajarish uchun ishlatiladi. Misol: AJAX so'rovlari, setTimeout, setInterval.
// Kod modularizatsiyasi va qayta ishlatish: Kodni kichik, mustaqil va qayta ishlatiladigan qismlarga ajratishga yordam beradi.
// Moslashuvchanlik: Bir xil funksiyani turli maqsadlar uchun qayta ishlatish imkonini beradi.
// Ma'lumot oqimini boshqarish: Bir vazifadan keyin nima qilish kerakligini aniqlash uchun ma'lumotlar oqimini tartibga soladi.











1. *//Berilgan sonidan boshlab 1 gacha teskari tartibda san'atlash uchun rekursiv funksiya
// const hullas = (num) => {
//     if (num <= 0) {
//         return;
//     }
//     console.log(num);
//     hullas(num - 1);
// };
// hullas(5); 



2. *//Rekursiv funksiya yordamida berilgan massiv elementlarining yig'indisini hisoblash
// const sum = (arr) => {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + sum(arr.slice(1));
// };

// console.log(sum([1, 2, 3, 4, 5]));



3. *//Berilgan sonning marta darajasi (x^n) ni hisoblovchi rekursiv funksiya
// const hullas = (base, exponent) => {
//     if (exponent === 0) {
//         return 1;
//     }
//     return base * power(base, exponent - 1);
// };
// console.log(hullas(2, 3));
// console.log(hullas(5, 0)); 
// console.log(hullas(3, 2)); 