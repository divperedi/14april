import { Link } from 'react-router-dom';

function BooksPage({ books }) {
    console.log(books);
    return (
        <main>
            <div className="books-list">
                {books.map((book, index) => (
                    <Link to={`/book/${book.id}`} key={index} className='books-link'>
                        <div className="book-item" style={{ backgroundColor: book.color }}>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default BooksPage