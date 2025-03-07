import {useState} from "react"
import { useNavigate } from "react-router-dom";
const  Search=() =>{
    const [title ,setTititle]=useState('');
    const[output,setoutput] = useState([]);
    const navigate = useNavigate();

    const handleTitleChange = (e) => {
      setTititle(e.target.value);
    }
   const getinfo= async () => {
    try{
     if(title===""){
         alert("Please enter a movie title");
         return;
     }
         const info= await fetch(`https://www.omdbapi.com/?s=${title}&apikey=f629ca98`);
         const thewholedata= await info.json();
         setoutput(thewholedata.Search);
   }
   catch(error){
     setoutput(["Error"]);
   }}
const eventHandler= (sam) =>{
    if(sam.key==="Enter"){
      getinfo();
     setTititle(""); 
    }
}
const gotodetails=()=>{
  navigate('Details');
}

  
  return (
    
    <div 
    style={{
      backgroundColor: "black",
      height:"auto",
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "35px",
        color: "white",
        marginTop: "50px",
        marginBottom: "50px"
  
      }}>Movie Finder</h1>
      <div id="searchbar">
      <input type="text" id="tittle" 
      onKeyDown={eventHandler}
      placeholder ="Enter Movie the tittle" onChange={handleTitleChange}>
      </input>
      <button onClick={getinfo} id="button"
        >Search

      </button>
        </div>
      <div id="moviesdiv">
        {
          output.map((movies)=>{
            return (<div key={movies.imdbID} id="eachmovie"
            onClick={gotodetails}>
              <h1 style={{
                margin :"0px",
                fontSize: "17px",
                color: "white"
              }}
              >{movies.Title}</h1>
              <h2 
              style={{
                margin :"0px",
                fontSize: "17px",
                color: "white"
              }}
              >{movies.Year}</h2>
               <img src={movies.Poster} alt={movies.Title} id="eachposter"/>
             
            </div>)
          })
        }
      </div>
     
    </div>
  )
}

export default Search
