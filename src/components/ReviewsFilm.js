import { Component } from 'react';

class ReviewsFilm extends Component {
   state = {
      reviews: this.props.reviews,
   };

   render() {
      return (
         <>
            <h1>reviews </h1>
            {this.state.reviews && (
               <ul className="castList">
                  {this.state.reviews.map(review => (
                     <div>
                        <h3>{review.author}</h3>
                        <p> {review.content}</p>
                     </div>
                  ))}
               </ul>
            )}
         </>
      );
   }
}

export default ReviewsFilm;
