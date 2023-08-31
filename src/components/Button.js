export default function Button({ btnName, PrevButton }) {
  return (
    <button
      style={{ background: '#7950f2', color: '#fff' }}
      className='message'
      onClick={PrevButton}
    >
      {btnName}
    </button>
  );
}
