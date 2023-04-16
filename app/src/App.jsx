import { useState } from 'react'
import './App.css'

function App() {

  return (
    <section className = 'booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img 
    src="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg" 
    alt="Atomic Habits by James Clear"
    />
);
const Title = () => <h2>Book Title</h2>;
const Author = () => <h4>Book Author</h4>;

export default App;
