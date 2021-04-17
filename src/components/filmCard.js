const FilmCard = ({ id, title, backdrop_path, overview }) => {
   const imgURL = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

   return (
      <li key={id} className="filmCard">
         <h1 className="filmCard_title"> {title}</h1>
         <img src={imgURL} alt={title} className=" cardFilm_images" />
         <p className="description">Description: {overview}</p>
      </li>
   );
};
export default FilmCard;
