
import "./App.css";
import logo from "./Components/logo.png";
import Game from "./Components/Game";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="navn">Tic Tac Toe</h1>
        <h2 className="navn">Click the logo</h2>
        <a href="https://github.com/sanelp">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </header>
      <Game />
      <footer>
        <p className="footer">Made by Sanelp</p>
      </footer>
    </div>
  );
}

export default App;
