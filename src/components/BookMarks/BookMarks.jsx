import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-4 mt-2 pt-4">
            <div className='bg-sky-200 p-7 rounded-lg mb-6'>
                <h3 className="text-4xl text-center">Reading Time: {readingTime}</h3>
            </div>
            <div className='bg-gray-300 p-7 rounded-lg'>
                <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;