export default function CardItem({ card, selectedId, onClick }) {
  return (
    <li
      onClick={onClick}
      className={card.id === selectedId ? 'selected-two' : ''}
    >
      {card.id === selectedId ? card.answer : card.question}
    </li>
  );
}
