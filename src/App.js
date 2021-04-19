import { Route, Switch } from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';
import AppBar from './components/AppBar';
import routes from './routes';

import './styles.css';

const HomeView = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */));
const MovieView = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movie-page" */));
const MovieDetailsPage = lazy(() =>
   import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */),
);

class App extends Component {
   state = {};

   render() {
      return (
         <div className="App">
            <AppBar />
            <Suspense fallback={<h1>грузимся...</h1>}>
               <Switch>
                  <Route path={routes.movieDetauls} component={MovieDetailsPage} />
                  <Route path={routes.movies} component={MovieView} />
                  <Route path={routes.home} component={HomeView} />
               </Switch>
            </Suspense>
         </div>
      );
   }
}

export default App;
