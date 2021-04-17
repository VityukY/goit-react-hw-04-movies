import { Component } from 'react';

class Cast extends Component {
   state = {
      actors: this.props.cast,
   };
   /*   componentDidMount() {
         console.log(this.props.cast);
      }
      componentDidUpdate() {
         console.log(this.props.cast);
      }*/
   render() {
      return (
         <>
            <h1>Cast </h1>
            {this.state.actors && (
               <ul className="castList">
                  {this.state.actors.map(actor => (
                     <div>
                        <h3>{actor.name}</h3>
                        <img
                           width="250"
                           src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                           alt={actor.name}
                        />
                     </div>
                  ))}
               </ul>
            )}
         </>
      );
   }
}

export default Cast;
