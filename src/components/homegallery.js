import React from 'react'

const homegallery = () => {
   return (
      <>
         <section className="gallery_section">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center pb-5">
                     <h2 className="section-title">Our Gallery</h2>
                     <p className="section-subtitle">
                        the passage experienced a surge in popularity during the 1960s
                        when again during the 90s as desktop publishers.
                     </p>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-1.jpg" data-lightbox="image" data-title="Lemon">
                        <img src="images/gallery/g-1.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>

                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-2.jpg" data-lightbox="image" data-title="Fresh Fruits">
                        <img src="images/gallery/g-2.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-3.jpg" data-lightbox="image" data-title="Fresh juice">
                        <img src="images/gallery/g-3.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-4.jpg" data-lightbox="image" data-title="Lemon juice">
                        <img src="images/gallery/g-4.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-5.jpg" data-lightbox="image" data-title="Vegetables">
                        <img src="images/gallery/g-5.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>
                  <div className="col-sm-6 col-lg-4 mb-4">
                     <a href="images/gallery/g-6.jpg" data-lightbox="image" data-title="Organic fruits">
                        <img src="images/gallery/g-6.jpg" className="img-fluid rounded-3" alt="img not found" />
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default homegallery


