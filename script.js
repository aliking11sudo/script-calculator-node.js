//before run this script please "npm i readline-sync "
//before run this script please "npm i readline-sync "
//before run this script please "npm i readline-sync "
//before run this script please "npm i readline-sync "
//before run this script please "npm i readline-sync "
//before run this script please "npm i readline-sync "







//with if {}
var readlineSync = require('readline-sync');
var name = readlineSync.question('select your opreation +=1 -=2 *=3 /=4 %=5');
var readlineSync = require('readline-sync');
var num1 = readlineSync.question('input your num 1 ');
var num2 = readlineSync.question('input your num 2 ');
if (name === "1") {
    console.log('your opreation is + ');
    var plus = num1 + num2;
    console.log(plus);
}
if (name === "2") {
    console.log('your opreation is - ');
    var plus = num1 - num2;
    console.log(plus);
}
if (name === "3") {
    console.log('your opreation is * ');
    var plus = num1 * num2;
    console.log(plus);
}

if (name === "4") {
    console.log('your opreation is / ');
    var plus = num1 / num2;
    console.log(plus);
}
if (name === "5") {
    console.log('your opreation is % ');
    var plus = num1 % num2;
    console.log(plus);
}

//whith swich case 
var see = readlineSync.question('do you want see swich case process Y=yes N=no?');
if (see === "Y") {
    var readlineSync = require('readline-sync');
    var nameSwitch = readlineSync.question('select your opreation +=1 -=2 *=3 /=4 %=5');
    var num1 = readlineSync.question('input your num 1 ');
    var num2 = readlineSync.question('input your num 2 ');
    switch (nameSwitch) {
        case "1":
            console.log('your opreation is + ');
            var plus = num1 + num2;
            console.log(plus);
            break;

        case "2":
            console.log('your opreation is - ');
            var plus = num1 - num2;
            console.log(plus);
            break;
        case "3":
            console.log('your opreation is * ');
            var plus = num1 * num2;
            console.log(plus);
            break;
        case "4":
            console.log('your opreation is / ');
            var plus = num1 / num2;
            console.log(plus);
            break;
        case "5":
            console.log('your opreation is % ');
            var plus = num1 % num2;
            console.log(plus);
            break;
    }
}

