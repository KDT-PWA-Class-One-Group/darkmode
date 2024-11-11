function me(name, age, callback) {
  let result = {
    name:name,
    age: age,
    another : {},
  };
  return callback(result);
}

me("alswl",28,function(e){
  console.log(e);
  // 호출할 때 결정
});