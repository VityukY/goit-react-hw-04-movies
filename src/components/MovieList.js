import { Link, withRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies, location }) => {
   return (
      <ul className="movieList">
         {movies.map(({ id, title, backdrop_path }) => (
            <Link
               key={id}
               to={{
                  pathname: `/movies/${id}`,
                  state: {
                     from: location,
                  },
               }}
               className="link"
            >
               <MovieCard id={id} title={title} backdrop_path={backdrop_path} />
            </Link>
         ))}
      </ul>
   );
};

export default withRouter(MovieList);
