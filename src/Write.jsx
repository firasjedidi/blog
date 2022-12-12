import  React ,{useRef,useEffect,useState} from "react";
import Input from "./Components/CoustemInput/Input";
import TextArea from "./Components/CoustemInput/TextArea"
import AddButton from "./Components/CoutemButton/AddButton";
import Image from "./Components/Image";
import axios from 'axios'
import FormData from "form-data";
import NavBar from "./Components/CoustemNav/NavBar";
import Publish from "./Components/Dialogs/Publish";
const Write = () => {
  const title=useRef(null)
  const text=useRef(null)
  const [inpuVal,SetInputVal]=useState({title:'',text:'',image:'',cover_img:'',context:''})
  const [response,SetResponse]=useState('saving...')
  const [dialog,setDialog]=useState(false)
  const handleClickToOpen=()=>{
   setDialog(true)
  }
  const handleToClose=()=>{
   setDialog(false)
  }
  useEffect(()=>{
    title.current.focus()
  },[])
  const focus=(name)=>{
    console.log(name);
    if(name === "title"){
      text.current.focus()
    }else{
      if(inpuVal.text.length === 0)
      title.current.focus()
    }
  }
  const handelChange=async(event)=>{
    const {name,value}=event.target
    if(name === "title" || name ==='text'){
      SetInputVal((prevState)=>{
        return{
          ...prevState,
          [name]:value
        }
      })
    }else{
      SetInputVal({image:URL.createObjectURL(event.target.files[0])})
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "iyhf8gx0")
      var res=await axios.post("https://api.cloudinary.com/v1_1/dod9yhmlt/image/upload",formData)
      SetInputVal({image:res.data.url}) 
      
    }
  }
  const keyEvents=(event)=>{
    const {name}=event.target
   if(event.key === "Enter"){
    return focus(name) 
   }
   if(event.key === "Backspace"){
    return focus(name) 
   }
  }

    useEffect(()=>{
      // axios.put("http://localhost:5000/api/write",inpuVal)
    },[])
  
  return (
    <div >
      <section className="sec">
        <NavBar res={response} handleClickToOpen={handleClickToOpen}  /> 
      </section> 
      
      <div className="flex">	
        { inpuVal.image
          ?
            <Image src={inpuVal.image} className='post-img'  onKeyDown={(e)=>keyEvents(e)}  />
          :
            <AddButton className='add' name='image' onChange={(e)=>{handelChange(e)}}  />
        }
        <Input type="text"  ref={title} name='title'className="title"
          placeholder="Title"
          onChange={(e)=>{handelChange(e)}} 
          onKeyPress={(e)=>keyEvents(e)} 
        />
      </div>
     
      <TextArea   type="text" ref={text} name='text' className="text"  
        placeholder="Tell your story..."	 
        onChange={(e)=>{handelChange(e)}} 
        onKeyDown={(e)=>keyEvents(e)}  
      />
      {dialog? 
      <Publish dialog={dialog} 
      handleToClose={handleToClose} 
      SetInputVal={SetInputVal} inpuVal={inpuVal} /> 
      : null}
    </div>
  )
}

export default Write
