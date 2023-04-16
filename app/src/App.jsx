import { useState } from 'react'
import './App.css';
import EventExample from './EventExample';
import Book from './book';
import bookArray from './books';





function App() {
  
  const getBook = bookArray.find(id => {
    id === bookArray.id;
  });
  console.log(getBook);


  return (
    <section className = 'booklist'>
      <EventExample />
      {bookArray.map((book) => {
        const {img, title, author, id} = book;
        //console.log(img, title, author)
        return <Book key={id} img={img} title={title} author={author} getBook={getBook} />;
        }
      )};
    </section>
  );
}
export default App;
