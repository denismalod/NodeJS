import TodoList from "./TodoList.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login.js";
import Logout from "./Logout.js";
import { TokenContext } from "./utility.js";
import TodoDetail from './TodoDetail.js'; 

function App() {
  const [token, setToken] = useState(undefined);

  function acceptToken(tkn) {
    setToken(tkn);
  }

  return (
    <BrowserRouter> 
      <nav>
        {token && (
           <Link to="/" className="brand"> 
            <span>Список дел</span>
          </Link> 
        )}

        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">
          &#9776;
        </label>
        <div className="menu">
          {token && <Logout acceptToken={acceptToken} />}
        </div>
      </nav>
      <TokenContext.Provider value={token}>
              <Routes> 
                  <Route path="/" element={ 
                      <TodoList /> 
                  } /> 
                  <Route path="/:id" element={ 
                      <TodoDetail /> 
                  } /> 
                  <Route path="/login" element={ 
                      <Login acceptToken={acceptToken} /> 
                  } /> 
              </Routes> 

      </TokenContext.Provider>
      <p className="copyright">Все права принадлежат читателю книги.</p>
    </BrowserRouter> 
  );
}

export default App;
