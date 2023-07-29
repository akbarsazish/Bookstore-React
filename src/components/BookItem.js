import PropTypes from 'prop-types';

/* eslint-disable */
const BookItem = ({ itemProp, setBooks, delBook}) => { 
 return ( 
   <li>
     { itemProp.title }
     <button onClick={() => delBook(itemProp.id)}>Delete</button>
  </li>
 );
}
export default BookItem;

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
