import "./styles.css";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  // multi-line returns (which are 99% of the cases) must lie between parenthesis
  return (
    <div className="App">
      {/*O componente em questão é instanciado como uma self closing tag, ou seja, uma tag de uma linha só que não precisa de um bloco propriamente dito*/}
      <Navbar />
      <h1>Hello World</h1>
      <h2>Learning react</h2>
      <ul className="lista">
        <li>item1</li>
        <li>item2</li>
      </ul>
    </div>
  );
}
