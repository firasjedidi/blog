import  React,{useEffect,useState}  from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import  Write  from "./Write.jsx";
import Home from "./Home";
import Stories from "./Stories";
import Lists from "./Lists";
import ListLayout from "./ListLayout";
import Profile from "./Profile";
import About from './About';
import Tag  from "./Tag";
import LayOut from "./LayOut";
import  UserProfiles  from "./UsersProfiles";
import "./Components/CoustemNav/NavBars.css"
function App() {
  const[ info,setInfo]=useState()
  useEffect(()=>{
   
    setInfo(JSON.parse(localStorage.getItem("user")))
  },[])
console.log(info);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  info={info} Token={info?info.token:""}/>} />
          <Route path="/Stories" element={<Stories info={info}/>} />
          <Route path="/Saved" element={<Lists info={info}/>} />
          <Route path="/Saved/:name" element={<ListLayout info={info}/>} />
          <Route path="/Profile" element={<Profile info={info}/>} />
          <Route path="/Write" element={<Write info={info}/>} />
          <Route path="/About" element={<About info={info}/>} />
          <Route path="/Tag/:tag" element={<Tag info={info}/>} />
          <Route path="/:users/:title" element={<LayOut info={info}/>} />
          <Route path="/:user" element={<UserProfiles info={info}/>} />
        </Routes>
      </Router>
    </div>
  )
}



export default App