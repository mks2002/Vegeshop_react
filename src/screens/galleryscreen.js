import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Otherbanner from '../components/otherbanner'
import Gallerybody from '../components/gallerybody'

const galleryscreen = (props) => {
   return (
      <>
         <Header />
         <Otherbanner name={props.name} />
         <Gallerybody />
         <Footer />
      </>
   )
}

export default galleryscreen
