import { useState } from 'react';
import CardItem from './CardItem';

// two cards in one
// function FlashCardsTwo({ cards }) {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(id) {
//     setSelectedId(id);
//   }

//   return (
//     <ul className='flashcards-two'>
//       {cards.map((card) => (
//         <li
//           key={card.id}
//           onClick={() => handleClick(card.id)}
//           className={card.id === selectedId ? 'selected-two' : ''}
//         >
//           {card.id === selectedId ? card.answer : card.question}
//         </li>
//       ))}
//     </ul>
//   );
// }

// two flashcards in two
export default function FlashCardList({ cards }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    // setSelectedId(id);
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <ul className='flashcards-two'>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          selectedId={selectedId}
          onClick={() => handleClick(card.id)}
        />
      ))}
    </ul>
  );
}
