import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Homebanner from '../components/homebanner'
import Homemain from '../components/homemain'
import Homegallery from '../components/homegallery'
import Hometestinomial from '../components/hometestinomial'

const homescreen = () => {
   return (
      <>
         <Header />
         <Homebanner />
         <Homemain />
         <Hometestinomial />
         <Homegallery />
         <Footer />
      </>
   )
}

export default homescreen
