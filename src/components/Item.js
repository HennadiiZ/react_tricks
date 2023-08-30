export default function Item({ item, onDeleteItems, onCheckedItems }) {
  console.log(item.packed);

  return (
    <li>
      <input type='checkbox' onChange={(e) => onCheckedItems(item.id)} />

      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
