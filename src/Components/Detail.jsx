const Seedetail=()=>{
   return (
        <div id="moviesdiv">
        {
          output.map((movies)=>{
            return (<div key={movies.imdbID} id="eachmovie"
            >
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

   )
        
}

export default Seedetail