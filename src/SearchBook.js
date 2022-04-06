import React, { useState } from 'react'

const SearchBook = () => {

    const [input,setInput] = useState()

  return (
    <div className='search_book'>
        <p className='search_heading'>SearchBook</p>
        <div className='input_section'>
        <input onChange={(e) => setInput(e.target.value) } className='input_field'/>
        <button className='input_save_btn'>Save Search</button></div>   
    </div>
  )
}

export default SearchBook