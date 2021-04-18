const MovieDetailsCard = ({ title, overview, poster }) => {
   return (
      <div className="MovieDetailsContainer">
         <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            height="400"
         />
         <div className="MovieDetailsDescription">
            <h1>{title}</h1>
            <p>{overview}</p>
         </div>
      </div>
   );
};

export default MovieDetailsCard;
