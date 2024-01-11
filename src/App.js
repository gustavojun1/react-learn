import { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

// "let" é utilizado quando desejamos declarar uma variável mutável, mas com escopo local apenas
let count = 0;
const generateId = () => {
  return count + 1;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("função chamada em app");
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      // o operador de desestruturação "..." é utilizado para retornar todos os elementos de uma coleção
      return [...existingTasks, newTask];
    });
  };
  // multi-line returns (which are 99% of the cases) must lie between parenthesis
  return (
    <div className="App">
      {/*Os componentes a seguir são instanciados como self closing tags, ou seja, tags de uma linha só que não precisam de um bloco propriamente dito*/}
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
        <TaskList title="Em andamento" onAddTask={addTask} tasks={tasks} />
        <TaskList title="Completa" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
