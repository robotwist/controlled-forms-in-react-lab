import { useState } from 'react';

function Bookshelf() {
    const [books, setBooks] = useState([
        { title: 'Bible', author: 'God' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: '1984', author: 'George Orwell' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'Moby Dick', author: 'Herman Melville' },
        { title: 'War and Peace', author: 'Leo Tolstoy' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
        { title: 'The Silmarillion', author: 'J.R.R. Tolkien' },
        { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien' },
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label><br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    /><br /><br />
                    <label htmlFor="author">Author:</label><br />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    /><br /><br />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bookshelf;
