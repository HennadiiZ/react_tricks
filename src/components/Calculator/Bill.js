export default function Bill({ isBill, setIsBill, children }) {
  return (
    <div>
      {children}
      <input
        type='number'
        value={isBill}
        onChange={(e) => setIsBill(e.target.value)}
      />
    </div>
  );
}
