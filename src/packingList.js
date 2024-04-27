import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setsortBy] = useState("input");
  let sorteditems;
  if (sortBy === "input") sorteditems = items;
  if (sortBy === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => {
          // console.log(item);
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">sort by Input order</option>
          <option value="description">sort by Input description</option>
          <option value="packed">sort by packed value</option>
        </select>
        <button onClick={onClearItem}>Clear</button>
      </div>
    </div>
  );
}
