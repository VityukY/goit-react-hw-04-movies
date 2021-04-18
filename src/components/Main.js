import FilmList from './FilmList';
import Button from './Button';

const Main = ({ movies, action }) => {
   return (
      <>
         <FilmList movies={movies} />
         <Button action={action}>Load More</Button>
      </>
   );
};

export default Main;
