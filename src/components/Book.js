import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../redux/books/booksSlice';
import RemoveButton from './RemoveButton';

/*eslint-disable */
const BookInfo = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = (idBook) => {
    dispatch(removeBookFromApi(idBook));
  };

  return (
    <div className="book-container">
      <div className="book-item">
        <p className="book-category">{book.category}</p>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <ul className="book-actions">
          <li>Comments</li>
          <li>
            <RemoveButton handleRemoveClick={() => { handleClick(book.item_id); }} />
          </li>
          <li>Edit</li>
        </ul>
      </div>
       <div className="book-item"> 
         <div className="book-improvment">
            <div className="circle">
            </div>
            <div className="percentage">
              <p className="competion-percentage"> 64 % </p> 
              <p className="completed"> completed </p>
            </div>
          </div>
        </div>
        <div className="book-item chapter-part"> 
          <div className="progress-divider"></div>
          <div className="book-chapter">
            <p className="current-chapter"> CURRENT CHAPTER </p>
            <p className="percentage"> Chapter 1 </p>
            <button type="button" className="progress-btn">UPDATE PROGRESS </button>
          </div>
       </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookInfo;
