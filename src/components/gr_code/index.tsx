import { Button } from '@mui/material'
import React from 'react'
import './gr_code.scss'
import QrImg from '../../assets/qr-code.jpg'
import { useNavigate } from 'react-router-dom'

const QrCode = () => {
  const navigate = useNavigate()
  return (
    <div className='gr'>
        <div className="gr_info">

        <h5 className=''>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</h5>
        </div>
        <img src={QrImg} alt="" />
        <p>Сканируйте QR-код или нажмите ОК</p>
        <Button onClick={() => navigate('/contact')} sx={{background:'#000', color:'#fff', marginBottom: '10px', width:'156px', height:'52px'}}>Ok</Button>
    </div>
  )
}

export default QrCode