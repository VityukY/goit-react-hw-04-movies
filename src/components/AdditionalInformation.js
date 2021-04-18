import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieCasting from './MovieCasting';
import FilmReviews from './FilmReviews';

class AdditionalMovieInformation extends Component {
   state = {
      castShow: false,
      reviewsShow: false,
   };

   castToogle = () => {
      this.setState(prevState => ({
         castShow: !prevState.castShow,
         reviewsShow: false,
      }));
   };
   reviewsToogle = () => {
      this.setState(prevState => ({
         reviewsShow: !prevState.reviewsShow,
         castShow: false,
      }));
   };

   render() {
      const { id, cast, reviews } = this.props;
      const { castShow, reviewsShow } = this.state;

      return (
         <>
            <div className="additionalInformation">
               <NavLink to={`/movies/${id}/cast`}>
                  <button type="button" onClick={this.castToogle}>
                     {castShow ? 'Close Cast' : 'Open Cast'}
                  </button>
               </NavLink>

               <NavLink to={`/movies/${id}/reviews`}>
                  <button type="button" onClick={this.reviewsToogle}>
                     {reviewsShow ? 'Close Reviews' : 'Open Reviews'}
                  </button>
               </NavLink>
            </div>
            <div>
               {castShow && (
                  <Route
                     path="/movies/:movieId/cast"
                     render={props => {
                        return <MovieCasting {...props} cast={cast} />;
                     }}
                  />
               )}

               {reviewsShow && (
                  <Route
                     path="/movies/:movieId/reviews"
                     render={props => {
                        return <FilmReviews {...props} reviews={reviews} />;
                     }}
                  />
               )}
            </div>
         </>
      );
   }
}
export default AdditionalMovieInformation;
