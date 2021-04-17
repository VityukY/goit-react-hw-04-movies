import axios from 'axios';
import { Component } from 'react';
import FilmCard from '../components/filmCard';
import { Link } from 'react-router-dom';

class HomeView extends Component {
   state = {
      movies: [],
      page: 1,
   };
   componentDidMount() {
      this.fetchTrends();
   }
   fetchTrends = () => {
      axios
         .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=0e0748a6c8b324a098ac6737209de7e8&page=${this.state.page}`,
         )
         .then(response => {
            return response.data.results;
         })
         .then(data =>
            this.setState(prevState => ({
               page: prevState.page + 1,
               movies: [...prevState.movies, ...data],
            })),
         );
   };

   render() {
      const { movies } = this.state;
      return (
         <>
            <h1> HomePage</h1>
            {movies.length > 0 && (
               <>
                  <ul className="filmList">
                     {movies.map(movie => (
                        <Link to={`/movies/${movie.id}`} className="link">
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
                     <button type="button" onClick={this.fetchTrends}>
                        Загрузить еще
                     </button>
                  </div>
               </>
            )}
         </>
      );
   }
}

export default HomeView;
