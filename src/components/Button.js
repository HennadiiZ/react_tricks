export default function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ background: bgColor, color: textColor }}
      className='message'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// export default function Button({ bgColor, textColor, btnName, onClick }) {
//   return (
//     <button
//       style={{ background: bgColor, color: textColor }}
//       className='message'
//       onClick={onClick}
//     >
//       {btnName}
//     </button>
//   );
// }
