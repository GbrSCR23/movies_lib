import { useEffect, useState } from "react"; //importando alguns hooks, o useState pra renderizar o estado, e useEffect pra gente fazer chamada do api quando a página carregar
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API; //Importando API
const apiKey = import.meta.env.VITE_API_KEY; //Importando a chave do api
//assim a gente tem os dois valores da api que a gente precisa pra ela funcionar 

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); //Chamamos de Top
  //Movies pq é onde tem os melhores filmes, setTopMovies = pra gerenciar o estado e o UseState nosso hook que faz esse geranciamento de estado sem precisar carregar a página e voltar do 0


  const getTopRatedMovies = async (url) => { //função assincrona 
    const res = await fetch(url); //
    const data = await res.json(); // dados do filme 
    setTopMovies(data.results);
  };

  useEffect(() => { //Tem a possibilidade de executar a função em alguns estágios
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; //montando a url dos top filmes, moviesURL é a nossa api, ela tem alguns dados dos top filmes 

    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []); //aqui vamos jogar todos os dados nesse array dependencia []) do useffect


  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2> 
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)} 
          
      </div>
    
    </div>

    //imprindo os top filmes 
    // esperando que topmovies.lenght tem mais de 0 elementos
    // key id é uma chave única que cada filme tem
  );
};

export default Home;
