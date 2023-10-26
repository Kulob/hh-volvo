import React from 'react';
import HomePage from './page/home';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './page/contacts';
import InfoPage from './page/info';
import Layout from './page/layout';
import Order from './components/order';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route path='' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/order' element={<Order/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
