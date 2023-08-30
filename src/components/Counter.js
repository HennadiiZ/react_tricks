import { useState } from 'react';

export default function Counter() {
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

//1st version
// function Counter() {
//   const num = 1;
//   const date = new Date('Wed Jul 21 2027');

//   const [step, setStep] = useState(num);
//   const [count, setCount] = useState(num);

//   date.setDate(date.getDate() + count);

//   return (
//     <div className='steps'>
//       <div>
//         <button onClick={() => setStep(() => step - num)}>-</button>
//         Step: {step}
//         <button onClick={() => setStep(() => step + num)}>+</button>
//       </div>
//       <div>
//         <button onClick={() => setCount(() => count - step)}>-</button>
//         Count: {count}
//         <button onClick={() => setCount(() => count + step)}>+</button>
//       </div>
//       <div>
//         <p>
//           {/* {step} days from today is {date.toDateString()} */}
//           {count === 0
//             ? 'Today is '
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//           {date.toDateString()}
//         </p>
//       </div>
//     </div>
//   );
// }
