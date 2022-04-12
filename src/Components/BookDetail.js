import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { bookContext } from '../Context/BookCon'

const BookDetail = () => {

    const {searchResult : books} = useContext(bookContext)
    const {id} = useParams()
    
    const filterBook = books.filter((book) => {
        return (book.id === id)
      
    })
    console.log(filterBook)

    const {description,imageLinks:{thumbnail},language,subtitle,title,pageCount} = filterBook[0]?.volumeInfo
  return (
    <div className='book_detail'>
    <p>Book Detail</p>
    <img className='detail_img' src={thumbnail} alt='none'/>
    <p>{title}</p>
    <small>{subtitle}</small>
    <p>Description : <p className='description'>{description}</p></p>
    <p><span>Total no. of pages - {pageCount}</span> Language - {language}</p>
    </div>
  )
}

export default BookDetail