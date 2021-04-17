import axios from 'axios';
import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../components/Cast';
import ReviewsFilm from '../components/ReviewsFilm';

class MovieDetailsPage extends Component {
   state = {
      movieId: this.props.match.params.movieId,
      title: null,
      poster_path: null,
      overview: null,
      cast: null,
      reviews: null,
      filmReviews: null,
      castRevies: false,
      filmReviewsOpen: false,
   };
   componentDidMount() {
      this.featchMovieDetaild();
      this.castRequest();
      this.reviewsRequest();
   }
   featchMovieDetaild = () => {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US`,
         )
         .then(response => this.setState({ ...response.data }));
   };

   castReviewsToogle = () => {
      this.setState(prevState => ({
         castRevies: !prevState.castRevies,
         filmReviewsOpen: false,
      }));
   };
   revwsReviewsToogle = () => {
      this.setState(prevState => ({
         filmReviewsOpen: !prevState.filmReviewsOpen,
         castRevies: false,
      }));
   };

   castRequest = () => {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${this.state.movieId}/credits?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US`,
         )
         .then(response => this.setState({ cast: response.data.cast }));
   };
   reviewsRequest = () => {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${this.state.movieId}/reviews?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&language=en-US&page=1`,
         )
         .then(response =>
            this.setState({ filmReviews: response.data.results }),
         );
   };

   render() {
      const { title, overview, poster_path } = this.state;
      return (
         <>
            {this.state.title && (
               <>
                  <h1>{title}</h1>
                  <p>{overview}</p>
                  <img
                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     alt={title}
                  />

                  <NavLink to={`/movies/${this.state.movieId}/cast`}>
                     <button type="button" onClick={this.castReviewsToogle}>
                        {this.state.castRevies ? 'Close Cast' : 'Open Cast'}
                     </button>
                  </NavLink>
                  <NavLink to={`/movies/${this.state.movieId}/reviews`}>
                     <button type="button" onClick={this.revwsReviewsToogle}>
                        {this.state.filmReviewsOpen
                           ? 'Close Reviews'
                           : 'Open Reviews'}
                     </button>
                  </NavLink>

                  {this.state.castRevies && (
                     <Route
                        path="/movies/:movieId/cast"
                        render={props => {
                           return <Cast {...props} cast={this.state.cast} />;
                        }}
                     />
                  )}

                  {this.state.filmReviewsOpen && (
                     <Route
                        path="/movies/:movieId/reviews"
                        render={props => {
                           return (
                              <ReviewsFilm
                                 {...props}
                                 reviews={this.state.filmReviews}
                              />
                           );
                        }}
                     />
                  )}
               </>
            )}
         </>
      );
   }
}

export default MovieDetailsPage;
