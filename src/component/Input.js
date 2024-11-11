import { useState } from "react";

function Input({text,inputValue}) {

  const [Todo, setTodo] = useState('')

  const textLog = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value)
  }

  return <input value={inputValue} onChange={text}/>
}

export default Input