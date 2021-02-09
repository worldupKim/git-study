// Function
// - fundanmental building block in the program - 프로그램을 구성한느 기본적인 빌딩 블럭
// - subprogram can be used multiple times - 서브 프로그램으로도 불리며 여러번 재사용 가능
// - performs a task or calculates a value - 한가지의 타스크나 어떤 값을 계산하기 위해 쓰여짐

// 1. Function declaration 펑션 정의
// function name (param1, param2) { body.... return; }
// one function === one thing - 하나의 함수는 한가지의 일만 하도록 만들어야함
// naming: doSomething, command, verb
// e.g createCardAndPoint → createCard, createPoint - 함수의 명령어는 세분화 하도록
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// Premitive parameters: passed by value
// object parameters: pass