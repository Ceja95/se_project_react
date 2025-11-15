import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

import "./ItemCard.css";

function ItemCard({ item, handleCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const isLiked = item.likes?.some(_id => _id === currentUser?._id);
  const likeButtonClassName = `card__like_button ${isLiked ? 'card__like_button_liked' : ''}`;

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token?.length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img onClick={() => {
        handleCardClick(item);
      }} className="card__img" src={item.link || item.imageUrl} alt={item.name} />
      {isLoggedIn && (
        <button
          type="button"
          onClick={() => handleCardLike(item._id, isLiked)}
          className={likeButtonClassName}
        >
        </button>
      )}
    </li>
  );
}

export default ItemCard;
