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
     document.getElementById("loaderdiv").style.display="block";
     document.getElementById("moviesdiv").style.display="none";
     document.getElementById("Moviesfinder").style.display="none";
     document.getElementById("searchbar").style.display="none";
   document.getElementById("tittle").value="";
    try{
     if(title===""){
         alert("Please enter a movie title");
         window.location.reload();
     }
         const info= await fetch(`https://www.omdbapi.com/?s=${title}&apikey=f629ca98`);
         const thewholedata= await info.json();
         setoutput(thewholedata.Search);
         document.getElementById("loaderdiv").style.display="none";
         document.getElementById("moviesdiv").style.display="flex";
     document.getElementById("Moviesfinder").style.display="block";
     document.getElementById("searchbar").style.display="flex";

if(thewholedata.Response==="False"){
    alert("Movie Not Found");
    window.location.reload();
   }
   }
   
   catch(error){
    
    alert("Movie Not Found");
    window.location.reload();
      document.getElementById("loaderdiv").style.display="none";
  
      document.getElementById("Moviesfinder").style.display="block";
      document.getElementById("searchbar").style.display="flex";

   }
    }
const eventHandler= (sam) =>{
    if(sam.key==="Enter"){
      getinfo();
     setTititle(""); 
    }9
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
        fontSize: "30px",
        fontWeight: "bold",
        fontFamily: "Montserrat', sans-serif",
        color: "white",
        marginTop: "50px",
        marginBottom: "50px"
  
      }} id="Moviesfinder"> Fast Movie Finder App</h1>
      <div id="searchbar">
      <input type="text" id="tittle" 
      onKeyDown={eventHandler}
      placeholder ="Enter the movie  title" onChange={handleTitleChange}>
      </input>
      <button onClick={getinfo} id="button"
        >Search

      </button>
        </div>
        <div 
        >
          <span class="loader" id="loaderdiv"></span>
        </div>
        
      <div id="moviesdiv">
        {
          output.map((movies)=>{
            return (<div key={movies.imdbID} id="eachmovie"
            // onClick={gotodetails}
            >
              <h1 style={{
                margin :"0px",
                fontSize: "20px",
                color: "white",
              fontFamily: "'Emily's Candy', cursive",
                fontWeight: "bold"
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
