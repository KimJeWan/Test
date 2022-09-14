import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "../config";
import { CurrentTime_HH_MM_SS } from "./CurrentTime";

const GetWeather = ( props ) => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')
    // const now = new(Date)
    
    const weatherApiKey = Config.WeathetAPI

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${weatherApiKey}`).then((respone) => {
            setWeather(respone.data.weather[0].main)
            console.log(respone.data.weather[0].main)
        }).catch((err) => {
            setWeather('err')
        })
    },[props.city])

    console.log(weather)

    const testFn = () => {
        if(weather == 'err')
        {
            return (
            <p>도시 이름을 확인해주세요</p>
            )
        } 
        else 
        {
            return (
            <p>현재 시각 : <CurrentTime_HH_MM_SS /> {props.city}의 날씨는 {weather}입니다</p>
            )
        }
        
    }

    return (
        <>
          {testFn()}
        </>
    )
}

export default GetWeather