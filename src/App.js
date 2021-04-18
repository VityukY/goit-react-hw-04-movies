import { Route, NavLink, Switch } from 'react-router-dom';
import { Component } from 'react';
import HomeView from './pages/HomePage';
import MovieView from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './styles.css';

class App extends Component {
   state = {};

   render() {
      return (
         <div className="App">
            <ul className="linkList">
               <li>
                  <NavLink exact to="/" className="navLink" activeClassName="navLink__active">
                     Home Page
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/movies" className="navLink" activeClassName="navLink__active">
                     Search Movie
                  </NavLink>
               </li>
            </ul>
            <Switch>
               <Route path="/movies/:movieId" component={MovieDetailsPage} />
               <Route path="/movies" component={MovieView} />
               <Route path="" component={HomeView} />
            </Switch>
         </div>
      );
   }
}

export default App;
