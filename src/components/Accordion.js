// import faqs from '../data/faqs';
import { useState } from 'react';

export default function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion'>
      {faqs.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}

      {/* <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title='Test 1'
        num={22}
        key='test 1'
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem> */}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>

      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}

// nt mine
// export default function Accordion({ faqs }) {
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
//       <div className='number'>
//         {index < 9 ? `0${index + 1}` : `${index + 1}`}
//       </div>
//       <div className='title'>{item.title}</div>
//       <div className='icon'>{isOpen ? '-' : '+'}</div>
//       {isOpen && <div className='content-box'>{item.text}</div>}
//     </li>
//   );
// }

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
