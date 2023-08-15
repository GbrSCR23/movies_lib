import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill, //icones
} from "react-icons/bs";

import MovieCard from "../components/MovieCard"; 

import "./Movie.css"; //estilo

const moviesURL = import.meta.env.VITE_API; //nossas urls
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams(); //pegando id que está na url, 
  const [movie, setMovie] = useState(null); //

  const getMovie = async (url) => { //função de carregar o filme 
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data); //trazendo o filme 
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => { //pssaando o id do filme
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && ( //retornando um objeto 0 
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3> 
              <BsWallet2 /> Orçamento: 
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
