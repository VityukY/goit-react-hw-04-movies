import { Component } from 'react';
import ActorCard from './ActorCard';
import unknowm from '../images/unknown.jpg';

class Cast extends Component {
   state = {
      actors: this.props.cast,
   };
   render() {
      return (
         <div className="castinContainer">
            <h1 className="castinTitle">Cast </h1>
            {this.state.actors && (
               <ul className="castList">
                  {this.state.actors.map(({ cast_id, name, profile_path }) => (
                     <ActorCard
                        key={cast_id}
                        name={name}
                        src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : unknowm}
                     />
                  ))}
               </ul>
            )}
         </div>
      );
   }
}

export default Cast;
