import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../style/Movie.css'

const Movies = ( ) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then((respone) => {
          setMovies(respone.data.data.movies)
          setLoading(false)
        })
      },[])
      console.log(movies)
    return (
        <div className="test">
            {loading ? ( <div> loading... </div>): (<div>
                {movies.map((item, index) => {
                return (
                    <div key={index} className='container'>
                        <h1><Link to={`/movieDetail/${item.id}`}>{item.title_english}</Link></h1> 
                        <h3>평점 : {item.rating}</h3>
                        <h4>내용 : {item.description_full.length > 100 ? (
                            <>{item.description_full.slice(0,100)} ...</>
                        ) : (
                            <>
                            {item.description_full}
                            </>)}</h4>
                        <img src={item.medium_cover_image}/>
                    </div>
                )
            })}
            </div>) }
        </div>
    )
}

export default Movies;