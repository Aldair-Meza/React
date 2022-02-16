import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { useState } from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState (null);
  const [valor, setValor] = useState("");
  const [contar, setContar] = useState(0);
  const [movimiento, setMovimiento] = useState('Ingreso')
  const [saldinicial, setSaldinicial] = useState(1000000)
  const [saldfinal, setSaldfinal] = useState(1000000)
  const [buscar, setBuscar] = useState("")

  
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header saldfinal={saldfinal} setSaldfinal={setSaldfinal}
            saldinicial={saldinicial} setSaldinicial={setSaldinicial}/>
        </div>
        <div className='formulario'>
          <Formulario input={input} setInput={setInput} 
            todos={todos} setTodos={setTodos}
            edit={edit} setEdit={setEdit}
            valor={valor} setValor={setValor}
            contar={contar} setContar={setContar}
            movimiento={movimiento} setMovimiento={setMovimiento}
            saldfinal={saldfinal} setSaldfinal={setSaldfinal}
            saldinicial={saldinicial} setSaldinicial={setSaldinicial}
            buscar={buscar} setBuscar={setBuscar}
            />

        </div>

        <div className='lista'>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit}/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
