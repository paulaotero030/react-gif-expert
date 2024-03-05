import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    <span
      key='unique'
      style={{
        color: '#FF00FF',
        fontSize: '30px',
        textAlign: 'center',
        marginTop: '80px',
      }}
    >
      Hace click en tu Gif favorito!
    </span>,
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h3 style={{ color: 'white' }}>Aplicacion de Gif</h3>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
