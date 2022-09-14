import React from "react"; 

export const CurrentTime_HH_MM_SS = () => {
    const now = new Date()

    const hours = ('0' + now.getHours()).slice(-2)
    const minutes = ('0' + now.getMinutes()).slice(-2)
    const seconds = ('0' + now.getSeconds()).slice(-2)

    const TimeString = hours + ':' + minutes + ':' + seconds

    return TimeString
}

export const CurrentTime_HH_MM = () => {
    const now = new Date()

    const hours = ('0' + now.getHours()).slice(-2)
    const minutes = ('0' + now.getMinutes()).slice(-2)
    
    const TimeString = hours + ':' + minutes

    return TimeString
}

