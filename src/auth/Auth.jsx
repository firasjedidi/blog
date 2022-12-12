import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

export const login=async(data)=>{
   
    var res= await axios.post('http://localhost:5000/api/login',data)
    if(res.data.msg=== "The user has been registerd with us!"){
        localStorage.setItem('user',JSON.stringify(res.data))
        window.location="http://localhost:3000/"
    }else alert(res.data.msg)
}


export const signUp=async(data)=>{

    var res= await axios.post('http://localhost:5000/api/signup',data)
    if(res.data.msg=== "The user has been registerd with us!"){
      let info=await axios.get(`http://localhost:5000/api/user/${res.data.res}`)
      localStorage.setItem('user',JSON.stringify({...info.data,...res.data.token}))
    }else alert(res.data.msg)
  }

export  const Update = async(data) => {

    var res= await axios.post('http://localhost:5000/api/editProfile',data)
    console.log(res);
}
