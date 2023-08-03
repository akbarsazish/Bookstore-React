import React from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable */
const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
  return (
    <div className="container" style={{ backgroundColor: '#fff', padding: '22px' }}>
        {categories.map((category) => (
        <div key={book.item_id}>
           { category }
        </div>
      ))}
    </div>
  );
};
export default Category;
