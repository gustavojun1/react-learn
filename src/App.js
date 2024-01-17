import { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

// "let" é utilizado quando desejamos declarar uma variável mutável, mas com escopo local apenas
let count = 0;
const generateId = () => {
  count++;
  return count;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
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

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      // para todas as tasks existentes, retorna a sem alteração a não ser quando chegamos no id da task a ser alterada
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  // multi-line returns (which are 99% of the cases) must lie between parenthesis
  return (
    <div className="App">
      {/*Os componentes a seguir são instanciados como self closing tags, ou seja, tags de uma linha só que não precisam de um bloco propriamente dito*/}
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Pendente")}
          onTaskUpdate={updateTask}
          listState="Pendente"
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Em andamento"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Em andamento")}
          onTaskUpdate={updateTask}
          listState="Em andamento"
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((task) => task.state === "Completa")}
          onTaskUpdate={updateTask}
          listState="Completa"
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
