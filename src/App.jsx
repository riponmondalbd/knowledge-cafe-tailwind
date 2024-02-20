import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
