function add(a,b) {
  let result = a+b;
  return result;
}
// function dynamicCalc(a,b) {
//   let result = a+b;
//   return result;
// }
// 매개 변수로 연산자를 넣을 수 없음
function dynamicCalc(a,b,func) {
  let result = func(a,b);
  return result;
}
// 매개변수의 func는 선언한적이 없다

console.log(dynamicCalc(1,2,add));
// func자리에 함수 add 이름만 넣어줬다.
// func자리에 다른 함수를 적어둔다면 다른 값이 나올 것이다.

//dynamicCalc 함수안에 그냥 func 함수 내용을 적어주면 안돼?
// -> second.js