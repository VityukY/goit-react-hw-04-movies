import { Component } from 'react';
import ReviewCard from './ReviewCard';

class ReviewsFilm extends Component {
   state = {};

   render() {
      return (
         <>
            <h1>Reviews </h1>
            {this.props.reviews.length > 0 ? (
               <ul className="castList">
                  {this.props.reviews.map(review => (
                     <ReviewCard
                        key={review.id}
                        id={review.id}
                        author={review.author}
                        content={review.content}
                     />
                  ))}
               </ul>
            ) : (
               <h3> 'We have no reviews for this film'</h3>
            )}
         </>
      );
   }
}

export default ReviewsFilm;

/*                     <li key={review.id} className="reviewContainer">
                        <h3>{review.author}</h3>
                        <p> {review.content}</p>
                     </li>*/
