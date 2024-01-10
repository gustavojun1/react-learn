import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  // multi-line returns (which are 99% of the cases) must lie between parenthesis
  return (
    <div className="App">
      {/*Os componentes a seguir são instanciados como self closing tags, ou seja, tags de uma linha só que não precisam de um bloco propriamente dito*/}
      <Navbar />
      <TaskList title="Pendente" />
      <TaskList title="Em andamento" />
      <TaskList title="Completa" />
    </div>
  );
}
