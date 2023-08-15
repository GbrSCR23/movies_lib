import { useState } from "react"; //hook, pra controlar nosso Search
import { Link, useNavigate } from "react-router-dom"; //vamos usar pra navegar o usuario, quando ele de o enter no search
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"; //icones da nossa pag

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState(""); //começando como uma stringa "" vazia
  const navigate = useNavigate(); //invocando o UseNavigate()

  const handleSubmit = (e) => { //mapeando o evento. pega o evento (e) 
    e.preventDefault();

    if (!search) return; //se eu não tiver nada no search eu vou da um retorne

    navigate(`/search?q=${search}`, { replace: true }); //se tiver o filme eu vou pra pagina search
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} //mudança do UseState. OnChange={(e)} pegando o evento (e.target value)// quando escreve alguma coisa no input eu to mudando o estado
          //
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
