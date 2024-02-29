import { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sort, setSort] = useState("input");

    let sortedItems;

    switch (sort) {
        case 'packed': sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)); break;
        case 'description': sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); break;
        case 'input': // fall through is intentional
        default: sortedItems = items;
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
            </ul>

            <div className="actions">
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                {items.length ?
                    <button onClick={onClearItems}>Clear items</button>
                    : ""}
            </div>
        </div>
    );
}
