import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Car1 from './components/Car1';
import Car2 from './components/Car2';
import { useState } from 'react';
import Todos from './components/Todo';
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
