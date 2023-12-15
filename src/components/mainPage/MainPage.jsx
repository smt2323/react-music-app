

import { Input } from "@mui/material"; 
import "./mainPage.css"; 
import axios from "axios"; 
import { useState, useEffect } from "react"; 
import Tracks from "../tracks/Tracks";
 

const runSearch = (text, tracks) => {
  if(text.trim ().lengh === 0) return tracks;

  const foundTracks = tracks.filter(({title, artists}) => {
    return title.toLowerCase(). includes  (text.toLowerCase())
    || artists.toLowerCase(). includes  (text.toLowerCase())
    
  })

  return foundTracks

}


const MainPage = () => { 
    const[data,setData] = useState([]) 
    const [inputValue, setInputValue] = useState("")

    const onChange = ({ target }) => {
      setInputValue(target.value)
    }

  //2 params (1 -f unction, 2 - [deps, deps2....]) 
  useEffect(() => { 
    const getMisic = async () => { 
      const response = await axios.get("/data.json"); 
      console.log(response.data); 
      setData(response.data) 
    }; 
    getMisic() 
  }, []); 
   
if(data.lengh === 0){ 
    return <h2>Loading...</h2>; 
} 
  return ( 
    <div className="search"> 
      <Input onChange={onChange} className="input" placeholder="Поиск треков" /> 
      <div className="list"> 
      {runSearch (inputValue, data).map(mp3 => <Tracks key={mp3.id} {...mp3}/> )}
        
      </div> 
    </div> 
  ); 
}; 
 
export default MainPage;