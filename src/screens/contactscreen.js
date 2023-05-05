import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Otherbanner from '../components/otherbanner'
import Contactbody from '../components/contactbody'


const contactscreen = (props) => {
   return (
      <>
         <Header />
         <Otherbanner name={props.name} />
         <Contactbody />
         <Footer />
      </>
   )
}


export default contactscreen
