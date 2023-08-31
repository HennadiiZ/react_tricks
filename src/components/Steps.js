import { useState } from 'react';
import Button from './Button';

export default function Steps({ messages }) {
  const [step, setStep] = useState(1);
  const [switcher, setSwitcher] = useState(false);

  function PrevButton() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function NextButton() {
    if (step < messages.length) {
      setStep((step) => step + 1);
    }
  }

  return (
    <div className='body'>
      <div className='switcher' onClick={() => setSwitcher((is) => !is)}>
        X
      </div>
      <div className='steps' style={{ display: switcher ? 'none' : 'block' }}>
        <div className='numbers'>
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>

        <p className='message' key={messages[step - 1]}>
          Step {step}: {messages[step - 1]}
        </p>

        <div className='buttons'>
          <Button btnName='Prev' PrevButton={PrevButton} />
          <Button btnName='Next' PrevButton={NextButton} />
        </div>
      </div>
    </div>
  );
}

// export default function Steps({ messages }) {
//   const [step, setStep] = useState(1);
//   const [switcher, setSwitcher] = useState(false);

//   //   const arr = useState(1);
//   //   console.log(arr);

//   function PrevButton() {
//     if (step > 1) {
//       // setStep(step - 1);
//       setStep((step) => step - 1);
//     }
//   }

//   function NextButton() {
//     if (step < messages.length) {
//       // setStep(step + 1);
//       setStep((step) => step + 1);
//     }
//   }

//   //   function toggleSwitcher() {
//   //     setSwitcher(!switcher);
//   //   }

//   return (
//     <div className='body'>
//       <div className='switcher' onClick={() => setSwitcher((is) => !is)}>
//         X
//       </div>
//       <div className='steps' style={{ display: switcher ? 'none' : 'block' }}>
//         <div className='numbers'>
//           <div className={step >= 1 ? 'active' : ''}>1</div>
//           <div className={step >= 2 ? 'active' : ''}>2</div>
//           <div className={step >= 3 ? 'active' : ''}>3</div>
//         </div>

//         <p className='message' key={messages[step - 1]}>
//           Step {step}: {messages[step - 1]}
//         </p>

//         <div className='buttons'>
//           <button
//             className='message'
//             style={{ background: '#7950f2', color: '#fff' }}
//             onClick={PrevButton}
//           >
//             Prev
//           </button>
//           <button
//             className='message'
//             style={{ background: '#7950f2', color: '#fff' }}
//             onClick={NextButton}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
