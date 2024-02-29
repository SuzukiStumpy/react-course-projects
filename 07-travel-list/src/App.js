import { useState } from 'react';
import './index.css';

import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure you want to clear all items?");

    if (confirmed) {
      setItems([]);
    }
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => (item.id === id) ? { ...item, packed: !item.packed } : item));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
