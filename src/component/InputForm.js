import Button from "./Button"
import Input from "./Input"

function InputForm ({handleClick, handleChange, inputValue}) {

  return (
    <form>
      <Input handleChange={handleChange} inputValue={inputValue}/>
      <Button handleClick={handleClick}>추가</Button>
    </form>
  )
}

export default InputForm