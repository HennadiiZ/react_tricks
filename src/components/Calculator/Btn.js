export default function Btn({ click, children }) {
  return <button onClick={click}>{children}</button>;
}
