function Button({children, handleClick}){

const clickEvent = (e) => {
  e.preventDefault()
  if(handleClick) handleClick()
}

  return <button type="submit" onClick={clickEvent}>{children}</button>
}

export default Button