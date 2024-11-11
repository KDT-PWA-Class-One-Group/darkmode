// function add(a,b) {
//   let result = a+b;
//   return result;
// }

// function dynamicCalc(a,b,func) {
//   return func(a,b);
// }

// function dynamicCalc(a,b,function(){
  // 여기에 설정해주고 싶다
// })
function dynamicCalc (a,b,callback) {
  callback(a,b);
  // callback함수가 뭔지 정의된것이 아님
  // 호출할 때 결정한다.
}

// console.log(dynamicCalc(1,2,add));
console.log(dynamicCalc(1,2,function(a,b){
  let result = a+b;
  return result;
}));
// html에서 많이 본 함수
//->