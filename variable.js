// Whole-script strict mode systax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScripts 5

// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';


// 2. Variable(변수), rw(read/write) 메모리의 값을 읽고 쓰는게 가능
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'hyunmin';
    console.log(name);
    name = 'hello'
    console.log(name);
    console.log(globalName);

}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) hoisting(끌어올려주다)이란? 위치 상관없이 선언을 제일 위로 끌어올린다
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant(상수) - 읽기만 가능, 한번 할당하면 값이 절대 변하지 않음 , r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable date types (데이타를 절대 변경하지 못함): premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: (변경이 가능한 데이타 타입) all objects by default are mutable in JS
// favor immutable(불변의) data type always for a few rersons:
// - security (한번 작성한 값을 해커들이 변경할 수 없도록 방지)
// - thread safety (프로세스안에서 다양한 쓰레드가 동시에 돌아가는데 동시에 값을 변경하는 것 자체가 위험하기에 값이 변하지 않는 것을 사용한다.)
// - reduce human mistakes


// 4. Variable types
// primitive-원시적인-(더 이상 작은 단위로 나뉘어 질 수 없음), single item : number, string, boolean, null, undefined, symbol
// object(싱글 아이템들을 묶어서 하나의 박스로 관리), box container
// function, first-class function
const count = 17; // integer(정수)
const size = 17.1; // decimal number (소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric (특수숫자) values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53) .....-2의 53승부터 2의 53승까지
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const shownu = 'shownu';
const greeting  = 'hello' + shownu;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${shownu}!`; // templete literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// simbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const hyunmin = {name: 'hyunmin', age: '10'};
hyunmin.age = '11';

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h string으로 이해
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type ${typeof text}`);
console.log(text.charAt(0)); // 중간에 누군가가 type을 숫자로 바꿔버려서 에러 발생

