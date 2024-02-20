import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log('Bookmark adding soon');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
