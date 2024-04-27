export default function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <em> please add the items to list </em>
      </div>
    );
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "Evereything is packed and get set go"
        : `you have ${numItems} items on your list and you have already packed 
        ${numItemsPacked} (${percentage}%)`}
    </footer>
  );
}
