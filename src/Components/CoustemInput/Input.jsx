import React from 'react'

 function Input(props,ref) {
  return (
    <section className="sec"> 
      <input  ref={ref} {...props}/>  
    </section>
  )
}
const forwaeredref=React.forwardRef(Input)
export default forwaeredref