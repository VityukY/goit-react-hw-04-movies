import { Link } from 'react-router-dom';
import CardFilm from './CardFilm';

const FilmList = ({ movies }) => {
   return (
      <ul className="filmList">
         {movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`} className="link">
               <CardFilm
                  id={movie.id}
                  title={movie.title}
                  backdrop_path={movie.backdrop_path}
                  overview={movie.overview}
               />
            </Link>
         ))}
      </ul>
   );
};

export default FilmList;
