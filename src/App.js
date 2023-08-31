import './App.css';
import { useState } from 'react';
// import initialItems from './data/initialItems';
import questions from './data/questions';
import faqs from './data/faqs';
import messages from './data/messages';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import Counter from './components/Counter'; // counter and range
import FlashCardList from './components/FlashCardList';
import Accordion from './components/Accordion';
import Steps from './components/Steps';
// import Button from './components/Button';
import TipCalculator from './components/Calculator/TipCalculator';

function App() {
  const [items, setItems] = useState([]);
  const totalItems = items.length;

  const PackedItemCountInPercentage = () => {
    // Filter the items to get an array of packed items
    const packedItems = items.filter((item) => item.packed);

    // Calculate the percentage of packed items
    const percentagePacked = (packedItems.length / totalItems) * 100;
    console.log('percentagePacked:', percentagePacked + '%');
    return percentagePacked.toFixed(0);
  };

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((it) => it.id !== id));
    console.log(items);
  }

  function clearAllItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) {
      setItems([]);
    }
  }

  function handleCheckedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className='app'>
      <TipCalculator />
      <Accordion faqs={faqs} />
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        clearAllItems={clearAllItems}
        onDeleteItems={handleDeleteItem}
        onCheckedItems={handleCheckedItem}
      />
      <Stats
        totalItems={totalItems}
        PackedItemCountInPercentage={PackedItemCountInPercentage}
      />
      <FlashCards cards={questions} />
      <FlashCardList cards={questions} />
      <Counter />
      <Steps messages={messages} />
    </div>
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
