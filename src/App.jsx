import { Outlet } from "react-router-dom"; //um outlet deve ser usado numa rota do pai né Para renderizar os filhos essa rota isso permite elementos neste na componente nesta na iguais e. a gente Abstrai aquele comportamento de ter um tildren.25 de abr. de 2022

import Navbar from "./components/Navbar"; //nosso navbar

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
