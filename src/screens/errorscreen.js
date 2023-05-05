import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Otherbanner from '../components/otherbanner'
import Errorbody from '../components/errorbody'
const errorscreen = (props) => {
   return (
      <>
         <Header />
         <Otherbanner name={props.name} />
         <Errorbody />
         <Footer />
      </>
   )
}

export default errorscreen
