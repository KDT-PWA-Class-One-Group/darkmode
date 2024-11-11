const btn = document.getElementsByTagName("button")[0];
const body = document.body;
const pTag = document.querySelector('#root p');

let state = true;

/**
 * 
 * @param {string} bgColor 
 * @param {string} color 
 * @param {string} text
 * @description 스타일을 변경해주는 함수입니다. 
 * 현재 모드 상태를 알려줍니다.
 */
function styleChange(bgColor,color, text) {
  body.style.background = bgColor;
  body.style.color=color;
  pTag.innerText = text;
}
/**
 * @description 버튼을 눌렀을 때 다크모드와  화이트모드로 변경해주는 함수이다
 */
btn.addEventListener("click",function(){
  if(state===true) {
    styleChange('black','white','다크모드');
  }else {
    styleChange('white','black','화이트모드');
  }
  state = !state;
})