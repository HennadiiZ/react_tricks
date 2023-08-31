import TipSelect from './TipSelect';
import { useState } from 'react';

export default function TipCalculator() {
  // const [isPercentage, setIsPercentage] = useState(0); // rewrite
  const [serviceTipPercentage, setServiceTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const [isBill, setIsBill] = useState(0);

  // const tipAmount = (isBill * isPercentage) / 100;
  const tipAmount =
    (isBill * (+serviceTipPercentage + +friendTipPercentage)) / 100;
  // console.log('tipAmount', tipAmount);
  const totalAmountWithTip = +isBill + +tipAmount;
  // console.log('totalAmountWithTip', totalAmountWithTip);

  function resetHandler() {
    setIsBill(0);
    // setIsPercentage(0);
    setServiceTipPercentage(0);
    setFriendTipPercentage(0);
  }

  return (
    <div>
      <div>
        How much was the bill?
        <input
          type='number'
          value={isBill}
          onChange={(e) => setIsBill(e.target.value)}
        />
      </div>

      <TipSelect
        text='How did you like the service?'
        isPercentage={serviceTipPercentage}
        setIsPercentage={setServiceTipPercentage}
      />

      <TipSelect
        text='How did your friend like the service?'
        isPercentage={friendTipPercentage}
        setIsPercentage={setFriendTipPercentage}
      />

      <h2>
        You pay total of ${totalAmountWithTip} (${isBill} + ${tipAmount} tip)
      </h2>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

// half of my vers
// export default function TipCalculator() {
//   const [isPercentage, setIsPercentage] = useState(0);
//   const [isBill, setIsBill] = useState(0);

//   const tipAmount = (isBill * isPercentage) / 100;
//   console.log('tipAmount', tipAmount);
//   const totalAmountWithTip = +isBill + +tipAmount;
//   console.log('totalAmountWithTip', totalAmountWithTip);

//   function resetHandler() {
//     setIsBill(0);
//     setIsPercentage(0);
//   }

//   return (
//     <div>
//       <div>
//         How much was the bill?
//         <input
//           type='number'
//           value={isBill}
//           onChange={(e) => setIsBill(e.target.value)}
//         />
//       </div>

//       <TipSelect
//         text='How did you like the service?'
//         isPercentage={isPercentage}
//         setIsPercentage={setIsPercentage}
//       />

//       <TipSelect
//         text='How did your friend like the service?'
//         isPercentage={isPercentage}
//         setIsPercentage={setIsPercentage}
//       />

//       <h2>
//         You pay total of ${totalAmountWithTip} (${isBill} + ${tipAmount} tip)
//       </h2>
//       <button onClick={resetHandler}>Reset</button>
//     </div>
//   );
// }
