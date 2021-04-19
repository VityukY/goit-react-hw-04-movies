import { Component } from 'react';
import MovieDetailsCard from '../components/MovieDetailsCard';
import apis from '../service/apiMovies';
import AdditionalMovieInformation from '../components/AdditionalInformation';
import Button from '../components/Button';
class MovieDetailsPage extends Component {
   state = {
      movieId: this.props.match.params.movieId,
      title: null,
      poster_path: null,
      overview: null,
      cast: null,
      reviews: null,
   };

   componentDidMount() {
      this.featchMovieDetails();
      this.fetchCast();
      this.fetchReviews();
   }

   featchMovieDetails = () => {
      apis.MovieDetails(this.state.movieId).then(response => this.setState({ ...response.data }));
   };

   fetchCast = () => {
      apis.Cast(this.state.movieId).then(response => this.setState({ cast: response.data.cast }));
   };

   fetchReviews = () => {
      apis.Reviews(this.state.movieId).then(response => this.setState({ reviews: response.data.results }));
   };

   render() {
      const { title, overview, poster_path, cast, reviews, movieId } = this.state;
      return (
         <>
            {this.state.title && (
               <>
                  <Button action={() => this.props.history.push(this.props.location.state.from)}>
                     go back
                  </Button>

                  <MovieDetailsCard title={title} overview={overview} poster={poster_path} />
                  <AdditionalMovieInformation cast={cast} reviews={reviews} id={movieId} />
               </>
            )}
         </>
      );
   }
}

export default MovieDetailsPage;
/*query=Batman*/