import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryStatus } from '../redux/categories/categoriesSlice';

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);
  const underConstructionText = categories[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryStatus());
  }, [dispatch]);

  return (
    <div className="container" style={{ backgroundColor: '#fff', padding: '22px' }}>
      <h1>{underConstructionText}</h1>
    </div>
  );
};

export default Category;
