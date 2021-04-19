import movie_strip from '../images/movie_strip.jpg';

const MovieCard = ({ id, title, backdrop_path }) => {
   const imgURL = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : movie_strip;

   return (
      <li key={id} className="movieCard">
         <h1 className="movieCard_title"> {title}</h1>
         <img src={imgURL} alt={title} className="movieCard_images" />
      </li>
   );
};

export default MovieCard;
