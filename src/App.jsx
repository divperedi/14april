import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';

const getBooks = (setBooks) => {
  axios.get('https://santosnr6.github.io/Data/childrens_books.json')
    .then(response => {
      console.log(response.data);
      setBooks(response.data);
    })
    .catch(error => console.log(error));
}

function App() {
  const [books, setBooks] = useState([]);

  useEffect (() => {
    getBooks(setBooks);
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <WelcomePage /> } />
        <Route path="/books" element={ <BooksPage books={books}/> } />
        <Route path="/book/:bookId" element={ <BookPage books={books} /> } />     
      </Routes>
    </>
  )
}

export default App
