import React from "react";
/* Note que imports de CSS não são importados para uma variável em específico por não exportar um valor ou entidade propriamente ditos*/
import "./navbar.css";

// "export" faz com que o módulo em questão (função Navbar) fique disponível para importação por outros arquivos
// "default" é usado em conjunto para definir esse módulo como o a exportação padrão (podendo ser importada com qualquer nome no arquivo de destino); caso contrário, teríamos sempre que importar como Navbar
export default function Navbar() {
  return (
    /*A tag "<nav>" representa uma seção que contém links de navegação, seja para outras áreas da página ou outras páginas*/
    <nav className="navbar">
      {/*A tag "<span>" é um conteiner de linha genérico, ou seja, é usado quando nenhum outro elemento semântico, como um título ou um parágrafo, é adequado*/}
      <span>React Kanban</span>
    </nav>
  );
}
