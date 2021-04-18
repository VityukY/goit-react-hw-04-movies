import { Component } from 'react';

import apis from '../service/apiMovies';
import Main from '../components/Main';

class HomeView extends Component {
   state = {
      movies: [],
      page: 1,
   };
   componentDidMount() {
      this.fetchTrends();
   }
   fetchTrends = () => {
      apis.Trends(this.state.page).then(data =>
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
            <h1> Week Trends</h1>
            {movies.length > 0 && <Main movies={movies} action={this.fetchTrends} />}
         </>
      );
   }
}

export default HomeView;
