import { useState } from 'react';

export default function TipSelect({ text, isPercentage, setIsPercentage }) {
  return (
    <>
      <div>
        {text}
        <select
          value={isPercentage}
          onChange={(e) => setIsPercentage(e.target.value)}
        >
          <option value='0'>Dissatisfied (0%)</option>
          <option value='5'>It was ok (5%)</option>
          <option value='10'>It was good (10%)</option>
          <option value='20'>Amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

// my the best vers
// export default function TipSelect({ text, isPercentage, setIsPercentage }) {
//   return (
//     <>
//       <div>
//         {text}
//         <select
//           value={isPercentage}
//           onChange={(e) => setIsPercentage(e.target.value)}
//         >
//           <option value='0'>Dissatisfied (0%)</option>
//           <option value='5'>It was ok (5%)</option>
//           <option value='10'>It was good (10%)</option>
//           <option value='20'>Amazing! (20%)</option>
//         </select>
//       </div>
//     </>
//   );
// }

// my vers
// export default function TipSelect({ text, isPercentage, setIsPercentage }) {
//   //   const [isPercentage, setIsPercentage] = useState(0);
//   //   console.log(isPercentage);
//   return (
//     <>
//       <div>
//         {text}
//         <select
//           value={isPercentage}
//           onChange={(e) => setIsPercentage(e.target.value)}
//         >
//           <option value='0'>Dissatisfied (0%)</option>
//           <option value='5'>It was ok (5%)</option>
//           <option value='10'>It was good (10%)</option>
//           <option value='20'>Amazing! (20%)</option>
//         </select>
//       </div>
//     </>
//   );
// }
