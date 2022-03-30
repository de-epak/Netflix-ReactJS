import axios from './axios';
import React, { useState,useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

const base_url= "https://image.tmdb.org/t/p/w1280";
const Url="https://www.youtube.com/watch"

function Row({title,fetchUrl,isLargerRow}) {
  const [movies,setMovies]=useState([]);
  const[trailerUrl,setTrailerUrl]=useState("");
  useEffect(()=>{
    // u need to use async fn to get data from 3rd party api
    // usually async fn has special way while use it inside useeffect
    async function fetchData(){
        const request=await axios.get(fetchUrl);
        // console.log(request)
        setMovies(request.data.results)
        console.log(request.data.results)
        return request;
    }
    fetchData();
  },[fetchUrl])
//   console.log("movies",movies)
  const opts={
      height:"390",
      width:"100%",
      playervars:{
        //https://developers.google.com/youtube/player_parameters
      },
      autoplay:1
  }
  const handleClick=(movie)=>{
      if(trailerUrl){
          setTrailerUrl("");
      }else{
          movieTrailer(movie?.name|| "")
          .then((url)=>{
            // console.log(movie?.name)
            const urlParams=new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        });
        //   .catch((error)=> console.log(error));
      }
      }
  
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
            {movies.map(movie =>(
                <img  className={`row_poster ${isLargerRow && 'row_posterLarger'}`}
                // onClick={()=>handleClick(movie)}
                key={movie.id}
                src={`${base_url}${isLargerRow?movie.poster_path : movie.backdrop_path}`} //using conditional rend
                alt={movie.name}/>
            ))}  
        </div>
        {/* <youtube videoId="" opts={opts}/>  */}
        {/* {trailerUrl && <ReactPlayer videoId={trailerUrl} opts={opts}/>} */}
    </div>
    )

}

export default Row