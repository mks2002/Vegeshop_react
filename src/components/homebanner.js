import React from 'react'

const homebanner = () => {
   return (
      <>
         <section className="banner_section">
            <div className="container">
               <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="carousel-caption">
                           <div className="banner_content index">
                              <h1>100% Organic</h1>
                              <h3>Fresh and Natural farm Food</h3>
                              <p>
                                 The readable content of a page when looking at its layout
                                 point of using of letters ,as opposed.
                              </p>
                              <a href="/product" className="btn main-btn">All PRoducts</a>
                           </div>
                        </div>
                     </div>

                     <div className="carousel-item">
                        <div className="carousel-caption">
                           <div className="banner_content">
                              <h1>100% Organic</h1>
                              <h3>Fresh and Natural farm Food</h3>
                              <p>
                                 The readable content of a page when looking at its layout
                                 point of using of letters ,as opposed.
                              </p>
                              <a href="/product" className="btn main-btn">All PRoducts</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default homebanner
