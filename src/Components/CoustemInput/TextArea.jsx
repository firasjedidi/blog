import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
 function TextArea(props,ref) {
  return (
     <section className='sec'>
        <TextareaAutosize ref={ref} {...props}	/> 
      </section>
  )
}
const forwaeredref=React.forwardRef(TextArea)
export default forwaeredref