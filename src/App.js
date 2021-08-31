import logo from './logo.svg';
import './App.css';
import IntrJSX from './components/IntroJSX'
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import LoginPanel from './components/user/LoginPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Toggle/>
        <LoginPanel/>
          <IntrJSX />
          <Clock/>
      </header>
    </div>
  );
}

export default App;
