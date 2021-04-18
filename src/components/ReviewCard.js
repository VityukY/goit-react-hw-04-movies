const ReviewCard = ({ author, content }) => {
   return (
      <li className="reviewContainer">
         <h3>{author}</h3>
         <p> {content}</p>
      </li>
   );
};

export default ReviewCard;
