import logo from './logo.svg';
import './App.css';
import IntrJSX from './components/IntroJSX'
import Clock from './components/Clock'
import Toggle from './components/Toggle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Toggle/>
        </p>
          <IntrJSX />
          <Clock/>
      </header>
    </div>
  );
}

export default App;
