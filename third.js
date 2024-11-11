//훈련
// 사칙연산
// 콜백구조 sachik

//me
// function sachik (a,b, command, callback){
//     callback(a,b,command);
//   }
  
  
//   console.log(sachik(1,2, "더하기", function (a,b,command){
//     if(command === "더하기"){
//       return a+b;
//     } if (command === "빼기") {
//       return a-b;
//     } if (command === "곱하기"){
//       return a*b;
//     } if (command === "나누기") {
//       return a/b;
//     }
//   }));
  
  function sachik (a,b,callback) {
    callback(a,b);
  }

  console.log(sachik(1,2,function(a,b){
    return a + b;
  }));
  console.log(sachik(1,2,function(a,b){
    return a - b;
  }));
  console.log(sachik(1,2,function(a,b){
    return a * b;
  }));
  console.log(sachik(1,2,function(a,b){
    return a / b;
  }));