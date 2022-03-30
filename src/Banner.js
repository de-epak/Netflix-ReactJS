import axios from './axios'
import React ,{useEffect,useState} from 'react'
import requests from './requests'
import './Banner.css'
const base_url="https://image.tmdb.org/t/p/w1280/"
function Banner() {
  const [movie,setMovies]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchNetflixOrginals); 
      setMovies(
        request.data.results[
          Math.floor(Math.random()*request.data.results.length)
        ]
      );
      return request;
    }  
    fetchData();
    },[]);

  console.log({movie})
  function truncate(str,n){
    return str?.length> n ? str.substr(0,n-1)+"...":str;
  }
  return (
    <header 
    className='banner' style={{
       backgroundSize:"cover",
       backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
       backgroundPosition:"center center",
    }}>
      <div className='banner_contents'>
          <h1 className='banner_tittle'>{movie?.title ||movie?.name ||movie?.original_name}</h1>
          <div className='banner_buttons'>
            <button className='banner_button'>play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>
            {truncate(movie?.overview,150)}
          </h1>
          {/* backgroundimg,title,div with buttons,descrip */}
      </div>
      <div className='banner--fadebottom'/>
    </header>
  )
}

export default Banner;