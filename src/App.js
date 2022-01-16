import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { useState } from 'react';
import TodoList from './components/TodoList';


function App() {
  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState (null);
  const [valor, setValor] = useState("");
  const [contar, setContar] = useState(0);

  
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Formulario input={input} setInput={setInput} 
            todos={todos} setTodos={setTodos}
            edit={edit} setEdit={setEdit}
            valor={valor} setValor={setValor}
            contar={contar} setContar={setContar}/>

        </div>

        <div>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit}/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
