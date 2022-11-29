import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

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

   function getAllVideos () {
        const url = `${URL}?maxResults=20&order=relevance&q=${input}&part=snippet&key=${key2}`
        fetch(url)
        .then((res) => 
            res.json()
        )
        .then((res) => {
            console.log(res)
            setVideos(res.items)
        }); 
    }

    useEffect(()=>{

    },[])


   function handleChange (e) {
    const title = e.target.value;
    setInput(title)
}

   function handleSubmit (e) {
    e.preventDefault()
    getAllVideos()
    setVideos("")
    setInput("")
}

   // setup a form 
   // then put an onsubmit in the form element 
   //create a handle submit function
   //prevent default then you can call get all videos funtion
   // at the end of the fetch need to do another .then to get the result 
   // can use line 17 setVideos to set the state

    return (
        <div className="grad">
            { searchError ? (
                <>  
                  <ErrorMessage/>
                </>
                ):(
                    <label htmlFor="searchBar" className="searchLabel">
                        <p></p>
                    Search For A Video: 
                        <form onSubmit={handleSubmit}>
                            <p></p> 
                            <input
                            type="text"
                            value={input}
                            id="input"
                            onChange={handleChange}
                            >
                            </input>
                            <p></p>
                            <button
                            type="submit"
                            id="searchButton"
                            >
                            Search
                            </button>
                            <p></p>
                        </form>
                </label> 
                )
            }
           {
            videos && videos.map((eachVideo) => {
                return (
                <div className="results">
                    <img src={eachVideo.snippet.thumbnails.default.url} alt="thumbnail" />
                    <Link to= {`/video/${eachVideo.id.videoId}`}>
                    <li className="videoTitles">{eachVideo.snippet.title}</li></Link>
                </div>
                )
            })
           }
        </div>
    )
}