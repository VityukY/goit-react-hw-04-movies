import MovieList from './MovieList';
import Button from './Button';

const Main = ({ movies, action }) => {
   return (
      <>
         <MovieList movies={movies} />
         <Button action={action}>Load More</Button>
      </>
   );
};

export default Main;
