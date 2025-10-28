import "./ItemCard.css";

function ItemCard({ item, handleCardClick, handleCardLike, currentUser }) {
  //const isLiked = item.likes?.some(id => id === currentUser._id);
  const token = localStorage.getItem("jwt");
  
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img onClick={() => {
        handleCardClick(item);
      }} className="card__img" src={item.link || item.imageUrl} alt={item.name} />
       <button type="button" onClick={() => handleCardLike(item._id, token)} className="card-like__button"></button>
    </li>
  );
}

export default ItemCard;
