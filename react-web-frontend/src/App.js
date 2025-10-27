import logo from "./logo.svg";
import "./App.css";

function App() {
  const token = " . . . Электронный жетон . . . ";
  return (
    <>
      <nav>
        <a href="/" className="brand">
          <span>Список дел</span>
        </a>
        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">
          &#9776;
        </label>
        <div className="menu"></div>
      </nav>
      <TodoList token={token} />
      <p className="copyright">Все права принадлежат читателю книги.</p>
    </>
  );
}

export default App;
