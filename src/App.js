
import './App.css';
import CurrencyName  from './ containers/CurrencyName';
import CurrencyValue from './ containers/CurrencyValue';
function App() {
  return (
    <div className="App">
     
      <h1>Конвертер валют</h1>
        <p>
          Вы переходите из
        </p>
        <div>
          <div className ="currency_name_main">
            <CurrencyName/>
              <p className = "v">в</p>
            <CurrencyName/>
          </div>
        </div>
        <div className = "currency_value_main">
          <CurrencyValue/>
          <p className = "equal">=</p> 
          <CurrencyValue/>
        </div>  
    </div>
  );
}

export default App;
