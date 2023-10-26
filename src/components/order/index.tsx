import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import QrImg from '../../assets/qr-code.jpg'

const Order = () => {
  return (
    <div className="phone">
      <div className="phone_container">
        <div className="phone_left">
          <h2>ЗАЯВКА ПРИНЯТА</h2>
          <span>Держите телефон под рукой.  Скоро с Вами свяжется наш менеджер.</span>
        </div>
        <div className="phone_right">
          <Link to='/' className="phone_close">
          <Button variant="contained" sx={{ background:'#000', color:'#fff'}}>X</Button>
          </Link>
          <div className="phone_gr">
            <h4 className="phone_info">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</h4>
            <img src={QrImg} alt="Qr"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order