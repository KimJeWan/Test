import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { Routes, useParams } from "react-router-dom";

const MoviesDetail = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [movieInfo, setMovieInfo] = useState()

    useEffect (() => {
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`).then((respone)=>{
            console.log(respone.data.data.movie)
            setMovieInfo(respone.data.data.movie)
            setLoading(false)
        })
    } ,[])
    
    return(
        <>
        {loading ? (<div> loading ...</div>) : (
            <div>
                <div>제목 : {movieInfo.title}</div>
                <div><a href={movieInfo.url}>링크 : {movieInfo.url}</a></div>
                <div>평점 : {movieInfo.rating}</div>
                <div>상영시간 : {movieInfo.runtime} 분</div>
                <div>내용 : {movieInfo.description_full}</div>
                <br/>
                <img src={movieInfo.medium_cover_image} />
                
            </div>
        )}
         

        </>
    )
}

export default MoviesDetail;