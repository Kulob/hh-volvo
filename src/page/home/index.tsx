import React from 'react'
import TopBar from '../../components/top-bar'
import Banner from '../../components/banner'
import QrCode from '../../components/gr_code'
import './home.scss'

const HomePage = () => {
  return (
    <div className='home'>
    <Banner/>
    <div className='gr_code'>

    <QrCode/>
    </div>
    </div>
  )
}

export default HomePage