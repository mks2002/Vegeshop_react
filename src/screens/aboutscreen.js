import React from 'react'

import Header from "../components/header";
import Footer from '../components/footer';
import Otherbanner from '../components/otherbanner';
import Aboutbody from '../components/aboutbody';


const aboutscreen = (props) => {
   return (
      <>
         <Header />
         <Otherbanner name={props.name} />
         <Aboutbody />
         <Footer />
      </>
   )
}

export default aboutscreen
