import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tiny React
        </p>
        <a
          className="App-link"
          href="https://github.com/auxii"
          target="_blank"
          rel="noopener noreferrer"
        >
          by auxii
        </a>
      </header>
    </div>
  );
}

export default App;
