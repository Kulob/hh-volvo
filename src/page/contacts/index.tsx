import React, { FC, useEffect, useState } from 'react'
import PhoneComponents from '../../components/phone'
import { useNavigate } from 'react-router-dom';

const useIdleTimer = (ms: number) => {
  const [isIdle, setIsIdle] = useState(false);
 
  useEffect(() => {
     let idleTimer: string | number | NodeJS.Timeout | null | undefined = null;
 
     const handleIdle = () => {
       setIsIdle(true);
     };
 
     const handleActive = () => {
       setIsIdle(false);
     };
 
     const startIdleTimer = () => {
       idleTimer = setTimeout(handleIdle, ms);
     };
 
     const resetIdleTimer = (idleTimer: any) => {
       clearTimeout(idleTimer);
       startIdleTimer();
     };
 
     window.addEventListener('load', startIdleTimer);
     window.addEventListener('mousemove', resetIdleTimer);
     window.addEventListener('keydown', resetIdleTimer);
     window.addEventListener('touchstart', resetIdleTimer);
 
     return () => {
       clearTimeout(idleTimer as number);
       window.removeEventListener('load', startIdleTimer);
       window.removeEventListener('mousemove', resetIdleTimer);
       window.removeEventListener('keydown', resetIdleTimer);
       window.removeEventListener('touchstart', resetIdleTimer);
     };
  }, [ms]);
 
  return isIdle;
 };
const ContactPage:FC = ():JSX.Element => {
  const navigate = useNavigate()
  const isIdle = useIdleTimer(1000 * 60); // 1 minute idle time
 
  if (isIdle) {
     navigate('/')
  }
  return (
    <div>
      
    <PhoneComponents/>
    </div>
  )
}

export default ContactPage