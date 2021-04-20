import { Component } from 'react';
import MovieDetailsCard from '../components/MovieDetailsCard';
import apis from '../service/apiMovies';
import AdditionalMovieInformation from '../components/AdditionalInformation';
import Button from '../components/Button';
import routes from '../routes';
class MovieDetailsPage extends Component {
   state = {
      movieId: this.props.match.params.movieId,
      title: null,
      poster_path: null,
      overview: null,
      cast: null,
      reviews: null,
      location: this.props.location || null,
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
   handleGoBack = () => {
      const { location } = this.state;
      const { history } = this.props;
      history.push({
         pathname: location?.state?.from.pathname || routes.home,
      });
      if (!!location?.state?.query) {
         history.push({
            search: `?query=${location.state.query}`,
         });
      }
   };
   render() {
      const { title, overview, poster_path, cast, reviews, movieId } = this.state;
      return (
         <>
            {this.state.title && (
               <>
                  <Button action={this.handleGoBack}>go back</Button>

                  <MovieDetailsCard title={title} overview={overview} poster={poster_path} />
                  <AdditionalMovieInformation cast={cast} reviews={reviews} id={movieId} />
               </>
            )}
         </>
      );
   }
}

export default MovieDetailsPage;
/*   history.push({
         pathname: location?.state?.from.pathname || routes.home,
         search: `?query=${location.state?.query || null}`,
      });*/
