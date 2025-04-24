function Card({ card, onClick }) {
  return (
    <div className="card" onClick={() => onClick(card)}>
      <img src={card.image} alt={card.name} width='150px' />
      <h3>{card.name}</h3>
    </div>
  );
}

export default Card;