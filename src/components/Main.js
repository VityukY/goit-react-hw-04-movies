import MovieList from './MovieList';
import Button from './Button';
import { withRouter } from 'react-router-dom';

const Main = ({ movies, action, query }) => {
   return (
      <>
         <MovieList movies={movies} query={query} />
         <Button action={action}>Load More</Button>
      </>
   );
};

export default withRouter(Main);
