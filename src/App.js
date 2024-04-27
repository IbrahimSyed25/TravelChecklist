import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./packingList.js";
import Stats from "./Stats.js";
export default function App() {
  const [items, setitems] = useState([]);
  function handleItems(item) {
    setitems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handletoggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // console.log(items);
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure want to delete the item sin list"
    );
    console.log(items.length);
    items.length > 0 && confirmed && setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handletoggleItem}
        onClearItem={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
