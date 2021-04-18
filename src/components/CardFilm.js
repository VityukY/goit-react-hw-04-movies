import film_strip from '../images/film_strip.jpg';

const CardFilm = ({ id, title, backdrop_path, overview }) => {
   const imgURL = backdrop_path
      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
      : film_strip;
   const description = overview.slice(0, 170);

   return (
      <li key={id} className="filmCard">
         <h1 className="filmCard_title"> {title}</h1>
         <img src={imgURL} alt={title} className=" cardFilm_images" />
         <p className="description">{`${description}...`}</p>
      </li>
   );
};

export default CardFilm;
