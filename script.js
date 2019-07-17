"use strict";

// №1
let a = '1';
if( a === '1') {
    console.log('Вірно');
}else{
    console.log('Невірно');
}

// №2
let item = false;
if(!item) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}
// короткий запис
(!item ? console.log('Вірно') : console.log('Невірно'));

// №3
let b = 3;
if(b > 0 && b < 4){
    console.log('Вірно');
}else{
    console.log('Невірно');
}
// №4
a = 9, b = 10;
if(a > 3 && a < 12 || b >= 7 && b < 15){
    console.log('Вірно')
}else{
    console.log('Невірно');
}

// №5
let month = 7;
if(month == 12 || month == 1 || month == 2){
console.log('Зима');
    }
else if(month == 3 || month == 4 || month == 5){
    console.log('Весна');}
else if(month == 6 || month == 7 || month == 8){
    console.log('Літо');
}else if(month == 9 || month == 10 || month == 11){
    console.log('Осінь');
}else{
    console.log('Такого місяця не існує');
    }

// №6
for(let i= 0; i <= 100; i++){
    if(i % 2 == 0){
       console.log(i);
}
}
