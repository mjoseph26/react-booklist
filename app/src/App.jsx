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
    <section className = 'booklist'>
      <EventExample />
      {bookArray.map((book) => {
        const {img, title, author, id} = book;
        //console.log(img, title, author)
        return <Book key={id} id={id} img={img} title={title} author={author} getBook={getBook} />;
        }
      )};
    </section>
  );
  
}
export default App;
