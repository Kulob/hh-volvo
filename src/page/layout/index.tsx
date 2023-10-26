import { Box, Container } from '@mui/material'
import React from 'react'
import TopBar from '../../components/top-bar'
import { Outlet } from 'react-router-dom'
import './layout.scss'

const Layout = () => {
  return (
    <Box 
    display='flex'
    justifyContent='center'
    alignItems={'center'}
    margin="auto"
    // height={'100vh'}
    position='relative'
    >
    {/* <Container maxWidth="lg"> */}
        <div className="layout">
        <TopBar/>
        </div>
            <Outlet/>
    {/* </Container> */}
    </Box>
  )
}

export default Layout