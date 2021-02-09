// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('hyunmin\'s \n\tbook') 

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2) // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter +1; 변수에 1을 증가한 후 값을 할당
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 먼저 변수의 값을 할당 후 1을 증가
// counter = counter +1;
console.log(`postIncrement : ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter: ${counter}`);

// 4. Assingment operators
let s = 3;
let y = 6;
s += y; // s = s + y;
s -= y;
s *= y;
s /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greator than
console.log(10 >= 6) // greator than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // check 는 true를 리턴함

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // 모두가 ture가 나와야함

// often used to compress long if-statment
// nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😂')
    }    
    return true;
}

// ! (not)
console.log(!value1); // 값을 반대로 바꿔줌 

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const hyunmin1 = { name: 'hyunmin' }; // hyunmin1과 hyunmin2에는 같은 데이타이지만 실제 메모리에는 가가 다른 레퍼런스가 들어 있고 다른 오브젝트를 가르키고 있다.
const hyunmin2 = { name: 'hyunmin' };
const hyunmin3 = hyunmin1;
console.log(hyunmin1 == hyunmin2);
console.log(hyunmin1 === hyunmin2);
console.log(hyunmin1 === hyunmin3);

// equaltiy - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' == false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else

const name = 'hyunmin';
if (name === 'hyunmin') {
    console.log('Welcome, Hyunmin!');    
} else if (name === 'coder') {
    console.log('You are amazing corder');
} else {
    console.log('unknown');
}

// 9. Ternary operator : ? 
// condition ? value1 : value2
console.log(name === 'hyunmin' ? 'yes' : 'no');

// 10. Switch statment
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!')
        break;
    dafault:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let a = 3;
while (a > 0) {
    console.log(`while: ${a}`);
    a--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${a}`);
    a--;
} while (a > 0);

// for loop, for(begin; condition; step)
for (a =3; a > 0; a--) {
    console.log(`for: ${a}`);
}

for (let a = 3; a > 0; a = a - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${a}`);
}

// nested loops
for(let a = 0; a < 10; a++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even nunbers (use continue)
for (let a = 0; a < 11; a++) {
    if (a % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${a}`);
}

// Q2. iterate from 0 to 10 and print numbers untile reaching 8 (use break) 
for (let a = 0; a < 11; a++) {
    if (a > 8) {
        break;
    }
    console.log(`q2. ${a}`);
}
