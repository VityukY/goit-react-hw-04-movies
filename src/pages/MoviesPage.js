import { Component } from 'react';
import axios from 'axios';
import FilmCard from '../components/filmCard';
import { Link } from 'react-router-dom';

class MovieView extends Component {
   state = {
      query: '',
      page: 1,
      movies: [],
   };
   changeHandler = e => {
      this.setState({ query: e.currentTarget.value });
   };

   submitHandler = async e => {
      e.preventDefault();
      await this.setState({ movies: [], page: 1 });
      this.fetchMovies(this.state.page);
   };
   fetchMovies = () => {
      axios
         .get(
            `https://api.themoviedb.org/3/search/movie?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&query=${this.state.query}&page=${this.state.page}&include_adult=false`,
         )
         .then(response => {
            return response.data.results;
         })
         .then(data =>
            this.setState(prevState => ({
               movies: [...prevState.movies, ...data],
               page: prevState.page + 1,
            })),
         );
   };
   render() {
      return (
         <>
            <h1> компонент поиска фильмов</h1>
            <form onSubmit={this.submitHandler}>
               <input value={this.state.query} onChange={this.changeHandler} />
               <button type="submit"> Искать фильм </button>
            </form>
            {this.state.movies.length > 0 && (
               <>
                  <ul className="filmList">
                     {this.state.movies.map(movie => (
                        <Link
                           to={`${this.props.match.url}/${movie.id}`}
                           className="link"
                        >
                           <FilmCard
                              id={movie.id}
                              title={movie.title}
                              backdrop_path={movie.backdrop_path}
                              overview={movie.overview}
                           />
                        </Link>
                     ))}
                  </ul>
                  <div className="btnContaine">
                     <button type="button" onClick={this.fetchMovies}>
                        Загрузить еще
                     </button>
                  </div>
               </>
            )}
         </>
      );
   }
}

export default MovieView;

/*'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.*/

/*https://api.themoviedb.org/3/search/movie?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&query=Batman&page=1&include_adult=false*/
