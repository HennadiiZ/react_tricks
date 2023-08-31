export default function Message({ messages, step, classN, children }) {
  return (
    <p className={classN} key={messages[step - 1]}>
      {children}
    </p>
  );
}
