import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import AppBar from './components/AppBar';
import HomeView from './pages/HomePage';
import MovieView from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';

import './styles.css';

class App extends Component {
   state = {};

   render() {
      return (
         <div className="App">
            <AppBar />
            <Switch>
               <Route path={routes.movieDetauls} component={MovieDetailsPage} />
               <Route path={routes.movies} component={MovieView} />
               <Route path={routes.home} component={HomeView} />
            </Switch>
         </div>
      );
   }
}

export default App;
