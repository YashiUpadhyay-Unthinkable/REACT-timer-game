import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [userInput, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleValueChange(event, key) {
    setValues((prevValue) => ({ ...prevValue, [key]: +event.target.value }));
  }
  return (
    <>
      <Header />
      <UserInput inputValues={userInput} onChange={handleValueChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero!</p>
      )}
      {inputIsValid && <Result inputValues={userInput} />}
    </>
  );
}

export default App;
