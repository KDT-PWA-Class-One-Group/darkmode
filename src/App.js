
import './App.css';
import InputForm from './component/InputForm';

function App() {

  const AppClick = () => {
    console.log("클릭");
  }

  const Change = () => {
    
  }
  
  const value = 

  return (
    <div className="App">
      <InputForm handleClick={AppClick} textLog={Change} inputValue={value}></InputForm>
    </div>
  );
}

export default App;
