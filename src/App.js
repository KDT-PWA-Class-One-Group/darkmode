import { useState } from 'react';
import './App.css';
import InputForm from './component/InputForm';

function App() {

  const appClick = () => {
    console.log('앱에서 클릭했어요')
    setValues(prev => [...prev, value])
  }

  const changeValue = (e) => {
    setValue(prev => prev = e.target.value)
  }

  const [value, setValue] = useState('')
  const [values, setValues] = useState([])

  return (
    <div className="App">
      <InputForm 
      handleChange={changeValue}
      handleClick={appClick}
      inputValue={value}
      />
      <div>
        {values.map((value, idx) => {
          return <p key={idx}>{value}</p>
        })}
      </div>
    </div>
  )
}

export default App;
