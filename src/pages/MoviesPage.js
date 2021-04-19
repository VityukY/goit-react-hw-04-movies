import { Component } from 'react';
import apis from '../service/apiMovies';
import SearchForm from '../components/SeacrhForm';
import Main from '../components/Main';
//import routes from '../routes';
//import { Route } from 'react-router-dom';

class MovieView extends Component {
   state = {
      query: '',
      page: 1,
      movies: [],
   };

   submitFormHandler = async value => {
      await this.setState({ movies: [], page: 1, query: value });
      this.fetchMovies(this.state.page);
   };

   fetchMovies = () => {
      apis.Movies(this.state.query, this.state.page).then(data =>
         this.setState(prevState => ({
            movies: [...prevState.movies, ...data],
            page: prevState.page + 1,
         })),
      );
   };
   render() {
      const { movies } = this.state;

      return (
         <>
            <SearchForm submitFormHandler={this.submitFormHandler} />
            {movies.length > 0 && <Main movies={movies} action={this.fetchMovies} />}
         </>
      );
   }
}

export default MovieView;
/*            
           

            {movies.length > 0 && (
               <Route
                  path={routes.movieQuery}
                  render={props => {
                     return <Main {...props} movies={movies} action={this.fetchMovies} />;
                  }}
               />
            )}

*/
