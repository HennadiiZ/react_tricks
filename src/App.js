import './App.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
      <FlashCards cards={questions} />
      <FlashCardList cards={questions} />
      {/* <FlashCardsTwo cards={questions} /> */}
      <Counter />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  // const [number, setNumber] = useState(10);

  // function handleAddItem(item) {
  //   setItems((items) => [...items, item]);
  //   console.log(items);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (!description) {
      return;
    }

    // setItems((items) => [...items, newItem]);
    // console.log(items);

    // handleAddItem(newItem);
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(+e.target.value);
        }}
      >
        {/* {initialItems.map((item, idx) => (
          <option value={idx + 1}>{idx + 1}</option>
        ))} */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => {
          console.log(e.target);
          setDescription(e.target.value);
        }}
      />
      {/* <input
        type='number'
        value={number}
        onChange={(e) => {
          console.log(e.target.value);
          setNumber(e.target.value);
        }}
      /> */}
      <button>Add</button>
      <button>NO</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className='list'>
      <ul>
        {/* {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))} */}
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  console.log(item);
  return (
    <li>
      <input type='checkbox' />
      {/* <input type="checkbox" {item.packed && 'checked="checked"'} /> */}
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
//
function FlashCards({ cards }) {
  console.log(cards);
  return (
    <ul className='flashcards'>
      {cards.map((item) => (
        <Card card={item} key={item.id} />
      ))}
    </ul>
  );
}

function Card({ card }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li
      onClick={() => setIsShow(() => !isShow)}
      className={isShow ? 'selected' : ''}
    >
      {!isShow ? card.question : card.answer}
    </li>
  );
}

export default App;

//

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
function FlashCardList({ cards }) {
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

function CardItem({ card, selectedId, onClick }) {
  return (
    <li
      onClick={onClick}
      className={card.id === selectedId ? 'selected-two' : ''}
    >
      {card.id === selectedId ? card.answer : card.question}
    </li>
  );
}

// counter and range
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // range

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
