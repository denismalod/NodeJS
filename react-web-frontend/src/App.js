import TodoList from './TodoList.js'; 

function App() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NjE1Njk1MzJ9.Xzv0rNyzortp8Tq1M73Ok9HEq8Ezy9ZH7Zq4f9gAY-M";
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
