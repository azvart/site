import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Components/Main/home';
import Contacts from './Components/Main/contacts';
import Faq from './Components/Main/faq';
import Records from './Components/Main/contacts';
import Footer from './Components/Footer/footer';

const App = () => {
  return(
      <div className='container-fluid'>
        <BrowserRouter>
        <Header />
        <Route path='/home' render={ () => <Home /> } />
        <Route path ='/contacts' render={ () => <Contacts /> } />
        <Route path ='/faq' render ={ ()=> <Faq /> } />
        <Route path ='/records' render={ ()=> <Records /> } />
        </BrowserRouter>
        <Footer />
      </div>
  )
}

export default App;
