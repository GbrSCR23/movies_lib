import { Link } from "react-router-dom"; //um link, pq temos um link que muda pra view de filme


import { FaStar } from "react-icons/fa"; //as estrelas do filme (icones)

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return ( //movie.title = titulo do filme, 
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} /> 
      <h2>{movie.title}</h2> 
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
    //Fstar movie.vote_average = nota do filme.
    //Show link se não for leva pra uma página espécifica 
  );
};

export default MovieCard;
