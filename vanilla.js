const root = document.getElementById('root')

function useState(initialValue) {
  // 현재 상태 값을 클로저에 저장
  let state = initialValue

  // 상태를 업데이트하고 렌더링하는 함수를 클로저로 정의
  function setState(changer) {
    if(typeof changer === 'function'){
      state = changer(state)  // 상태 값 변경
    } else {
      state = changer
    }
    render()  // 상태 변경 후, 렌더링 호출
  }

  // 현재 상태와 상태 변경 함수를 배열로 반환
  let result = () => state
  return [result, setState]
}

const [count, setCount] = useState(0)

function render() {
  root.innerHTML = `
    <p>상태 값: ${count()}</p>
    <button id="add">더하기</button>
    <button id="subtract">빼기</button>
  `

  // 버튼 클릭 시 상태 업데이트
  document.getElementById("add").onclick = () => setCount(prev => prev+1)
  document.getElementById("subtract").onclick = () => setCount(prev => prev-1)
}

// 초기 렌더링
render()