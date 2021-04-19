import { Component } from 'react';
import ReviewCard from './ReviewCard';

class MovieReviews extends Component {
   state = {};

   render() {
      return (
         <>
            <h1>Reviews </h1>
            {this.props.reviews.length > 0 ? (
               <ul className="castList">
                  {this.props.reviews.map(({ id, author, content }) => (
                     <ReviewCard key={id} id={id} author={author} content={content} />
                  ))}
               </ul>
            ) : (
               <h3> 'We have no reviews for this movie'</h3>
            )}
         </>
      );
   }
}

export default MovieReviews;
