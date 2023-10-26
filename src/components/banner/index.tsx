import React, { FC, useEffect, useState } from 'react'
import BannerImg from '../../assets/banner.jpg'
import Video from '../../assets/Volvo_Trucks.mp4'
import './banner.scss'
import { Box, Fade, FormControlLabel, Switch, TextField } from '@mui/material'

const Banner:FC = (): JSX.Element => {
    const [seconds, setSeconds] = useState(0)
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        if (isStarted) {
            return
        }
        const timeoutId = setInterval((): void => {
            setSeconds((prev) => prev + 1)
        }, 1000);
        return () => {
            clearInterval(timeoutId)
        }
    },[isStarted])
    
    
    return (
        <div className='banner'>
        {
            seconds > 5 ?
            <video autoPlay loop controls muted playsInline>
                <source src={Video} type='video/mp4'/>
            </video> :
            <img src={BannerImg} alt='banner'/> 
        }
       
    </div>
  )
}
export default Banner
