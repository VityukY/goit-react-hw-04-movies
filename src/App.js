import { Route, NavLink, Switch } from 'react-router-dom';
import { Component } from 'react';
import HomeView from './pages/HomePage';
import MovieView from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
/*import axios from 'axios';*/
import './styles.css';

class App extends Component {
   state = {};
   componentDidMount() {
      /* this.fetchMovie();*/
   }
   /*
   fetchMovie = () => {
      axios
         .get(
            'https://api.themoviedb.org/3/movie/550?api_key=0e0748a6c8b324a098ac6737209de7e8',
         )
         .then(response => {
            return response.data;
         })
         .then(data =>
            this.setState({
               id: data.id,
               title: data.title,
               overview: data.overview,
               backdrop_path: data.backdrop_path,
            }),
         );
   };
*/
   render() {
      return (
         <div className="App">
            <ul>
               <li>
                  <NavLink exact to="/" className="" activeClassName="">
                     Home Page
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/movies" className="" activeClassName="">
                     Movies Page
                  </NavLink>
               </li>
            </ul>
            <Switch>
               <Route exact path="/" component={HomeView} />
               <Route path="/movies/:movieId" component={MovieDetailsPage} />
               <Route path="/movies" component={MovieView} />
            </Switch>
         </div>
      );
   }
}

export default App;

/*
'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
*/
/*title: "Fight Club"

overview: discr
backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
*/
/*      const { title, overview, backdrop_path } = this.state;
      const imgURL = `https://image.tmdb.org/t/p/w500${backdrop_path}`;*/

/*            {title && (
               <>
                  <p>Name: {title}</p>
                  <img src={imgURL} alt={title} />
                  <p>Description: {overview}</p>
               </>
            )}*/

/*state = {
                  id: null,
      title: null,
      overview: null,
      backdrop_path: null,
            }*/
