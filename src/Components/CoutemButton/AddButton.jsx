import React from 'react'
import { MdOutlineAddCircleOutline } from "react-icons/md"
export default function AddButton(props) {
  return (
    <section className='upload-sec'> 
        <label  htmlFor='add' >
          < MdOutlineAddCircleOutline   className='upload-icon' />
        </label>
        <input type="file" id='add' {...props} />
    </section>
  )
}
