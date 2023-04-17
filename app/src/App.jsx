import { useState } from 'react'
import './App.css';
import EventExample from './EventExample';
import Book from './book';
import bookArray from './books';





function App() {
  const getBook = (id) => {
    const book = bookArray.find(book => book.id === id);
    console.log(book);
  };
  return (
    <>
      <header className="hero">
        <h1>Amazon Best Sellers</h1>
        <p>Our most popular products based on sales. Updated frequently.</p>
      </header>
      <h2>Best Sellers in Books</h2>
      <section className = 'booklist'>
        {bookArray.map((book) => {
          const {img, title, author, id} = book;
          return <Book key={id} id={id} img={img} title={title} author={author} getBook={getBook} />;
          }
        )}
      </section>
    </>
  );
  
}
export default App;
