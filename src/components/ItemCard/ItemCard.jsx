import { useContext } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

import "./ItemCard.css";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const isLiked = item.likes?.some(_id => _id === currentUser?._id);
  console.log(isLiked);


  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img onClick={() => {
        handleCardClick(item);
      }} className="card__img" src={item.link || item.imageUrl} alt={item.name} />
      <button
        type="button"
        onClick={() => handleCardLike(item._id, isLiked)}
        className={`card__like_button ${isLiked ? 'card__like_button_liked' : ''}`}
      ></button>
    </li>
  );
}

export default ItemCard;
