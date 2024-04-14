import { useParams } from 'react-router-dom';

function BookPage({ books }) {
  const bookId = Number(useParams().bookId);
  const book = books.find(book => book.id === bookId);

  if (!book) {
    return <div className='no-info'>No book data available</div>;
  }

  return (
    <div className='the-book'>
      <div className="book-item separate" style={{ backgroundColor: book.color }}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div className="info">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.plot}</p>
        <div>
          <h3>Audience: {book.audience}</h3>
          <h3>Pages: {book.pages}</h3>
          <h3>First published: {book.year}</h3>
          <h3>Publisher: {book.publisher}</h3>
        </div>
        <button>Oh, i want to read it!</button>
      </div>
    </div>
  )
}

export default BookPage