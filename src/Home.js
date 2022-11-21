import { useEffect, useState } from "react"

import ErrorMessage from "./errorMessage"
import "./Home.css"


const URL = process.env.REACT_APP_API_BASE_URL
const key2 = process.env.REACT_APP_API_KEY_2




function filterVideos(search, videos) {
 return videos.filter((video) => {
     // console.log(video.items.snippet.title)
      return video.items.snippet.title.toLowerCase().match(search.toLowerCase())
 })
}

export default function Home () {
   const [videos, setVideos] = useState([])
   const [input, setInput] = useState('')
   const [searchError, setSearchError] = useState(false)
   
   
   function getAllVideos (title) {
    const url = `${URL}?&maxResults=20&order=relevance&q=${title}&part=snippet&key=${key2}`
    return fetch(url)
    .then((res) => 
    {return res.json()});
}
   function handleChange (e) {
    // e.preventDefault()
    const title = e.target.value;
    setInput(title)
    
   }

   function handleSubmit (){

   }

   // setup a form 
   // then put an onsubmit in the form element 
   //create a handle submit function
   //prevent default then you can call get all videos funtion
   // at the end of the fetch need to do another .then to get the result 
   // can use line 17 setVideos to set the state

//    useEffect(()=>{
//    
//         .catch((error)=> {
//             console.log(error);
//             setSearchError(true)
//         })
//    }, [])
    return (
        <div>
            { searchError ? (
                    
                <>  
                  <ErrorMessage/>
                </>
                ):(
                    
                    <label htmlFor="searchBar" className="searchLabel">
                    Search: 
                    <form> 
                    <input
                    type="text"
                    value={input}
                    id="input"
                    onChange={handleChange}
                    >
                    </input>

                    <button
                    type="submit"
                    id="searchButton"
                    onSubmit={getAllVideos(input)}>
                        Search
                    </button>
                    </form>
                </label> 
                )
            }
           
        </div>
    )
}