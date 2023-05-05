

import React from 'react'
// here we pass the value from the main page and use that value..
const otherbanner = (props) => {
   const name = `${props.name} Page`
   return (

      <>

         <section class="banner_section">
            <div class="container">
               <div class="banner_content">
                  <h1>{name} </h1>
               </div>
            </div>

         </section>

      </>
   )
}

export default otherbanner
