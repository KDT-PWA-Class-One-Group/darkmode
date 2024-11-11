function sum (a,b) {
  let result = a+b;
  return result;
}
//정적함수

function substract(a,b) {
  let result = a-b;
  return result;
}

function calc(command,a,b) {
  if(command === "덧셈"){
    return sum(a,b);
  } if(command === "뺄셈") {
    return substract(a,b,);
  } 
}
//한번만 사용할 거라면 왜 함수선언?
//-> first.js