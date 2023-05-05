import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Otherbanner from '../components/otherbanner'
import Productbody from '../components/productbody'

const productscreen = (props) => {
   return (
      <>
         <Header />
         <Otherbanner name={props.name} />
         <Productbody />
         <Footer />
      </>
   )
}

export default productscreen
