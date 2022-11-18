import { useEffect, useState } from "react"
import { getAllVideos } from "./fetch"
import ErrorMessage from "./errorMessage"
import "./Home.css"

export default function Home () {
   const [videos, setVideos] = useState({})
   const [input, setInput] = useState('')
   const [searchError, setSearchError] = useState(false)
   

   function filterVideos(search, videos) {
    return videos.filter((video) => {
        // console.log(video.items.snippet.title)
         return video.items.snippet.title.toLowerCase().match(search.toLowerCase())
    })
   }

   function handleChange (e) {
    const title = e.target.value;
    // const result = title.length ? filterVideos(title,videos):videos
    setInput(title)
    // setVideos(result)
   }
    
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
                    onSubmit={getAllVideos}>
                        Search
                    </button>
                </label> 
                )
            }
           
        </div>
    )
}