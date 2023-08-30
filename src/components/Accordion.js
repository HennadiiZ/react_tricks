// import faqs from '../data/faqs';
import { useState } from 'react';

export default function Accordion({ faqs }) {
  return (
    <ul className='accordion content-box'>
      {faqs.map((item, index) => (
        <AccordionItem item={item} index={index} key={Math.random()} />
      ))}
    </ul>
  );
}

function AccordionItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={`item ${isOpen ? 'open' : ''}`} onClick={handleItemClick}>
      <div className='number'>
        {index < 9 ? `0${index + 1}` : `${index + 1}`}
      </div>
      <div className='title'>{item.title}</div>
      <div className='icon'>{isOpen ? '-' : '+'}</div>
      {isOpen && <div className='content-box'>{item.text}</div>}
    </li>
  );
}

// mine 2
// export default function Accordion() {
//   return (
//     <ul className='accordion content-box'>
//       {faqs.map((item, index) => (
//         <AccordionItem item={item} index={index} key={Math.random()} />
//       ))}
//     </ul>
//   );
// }

// function AccordionItem({ item, index }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleItemClick = () => {
//     console.log(isOpen);
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <li className={`item ${isOpen ? 'open' : ''}`} onClick={handleItemClick}>
//       <div className='number'>0{index + 1}</div>
//       <div className='title'>{item.title}</div>
//       <div className='icon'>{isOpen ? '-' : '+'}</div>
//       {isOpen && <div className='content-box'>{item.text}</div>}
//     </li>
//   );
// }

// mine
// export default function Accordion() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleItemClick = () => {
//     console.log(isOpen);
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <ul className='accordion'>
//       {faqs.map((item, index) => (
//         <li className='item' onClick={handleItemClick} key={Math.random()}>
//           <div className='number'>0{index + 1}</div>
//           <div className='title'>{item.title}</div>
//           <div className='icon'>{isOpen ? '-' : '+'}</div>
//           {isOpen && <div className='title'>{item.text}</div>}
//         </li>
//       ))}
//     </ul>
//   );
// }
