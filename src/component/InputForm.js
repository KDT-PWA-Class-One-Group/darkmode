import Button from "./Button"
import Input from "./Input"

function InputForm({handleClick,textLog,inputValue}){

  return (
  <form>
    <Input textLog={textLog} inputValue={inputValue}></Input>
    <Button handleClick={handleClick}>추가</Button>
  </form>
  )
}
export default InputForm