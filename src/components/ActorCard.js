const ActorCard = ({ name, src }) => {
   return (
      <li className="actorContainer">
         <h3 className="actorName">{name}</h3>
         <img width="100" height="150" src={src} alt={name} />
      </li>
   );
};
export default ActorCard;
