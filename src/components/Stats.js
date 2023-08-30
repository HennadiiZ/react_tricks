export default function Stats({ totalItems, PackedItemCountInPercentage }) {
  // if (!totalItems) {
  //   return (
  //     <footer className='stats'>
  //       <em>You have not packed anything so far!!!</em>
  //     </footer>
  //   );
  // }
  const packedPercentage = PackedItemCountInPercentage();

  return (
    <footer className='stats'>
      {/* <em>
          {PackedItemCountInPercentage() === 100
            ? 'You got everything'
            : `You have ${totalItems} items on your list, and you already packed
          (${PackedItemCountInPercentage()} %)`}
        </em> */}

      {totalItems > 0 ? (
        <em>
          {+packedPercentage === 100
            ? 'You got everything'
            : `You have ${totalItems} items on your list, and you already packed (${packedPercentage} %)`}
        </em>
      ) : (
        <em>You have not packed anything so far.</em>
      )}
    </footer>
  );
}
