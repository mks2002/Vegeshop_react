import React from 'react'

const hometestinomial = () => {
   return (
      <>
         <section className="testimonial_section">
            <div className="container">
               <div className="row pb-5">
                  <div className="col-12 text-center">
                     <h2 className="section-title">Our Happy Customers</h2>
                     <p className="section-subtitle">
                        the passage experienced a surge in popularity during the 1960s
                        when again during the 90s as desktop publishers...
                     </p>
                  </div>
               </div>

               <div className="row justify-content-center">
                  <div className="col-xl-8 col-md-10">
                     {/* <!-- here we paste the bootstrap code of testinomial --> */}

                     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                              className="active" aria-current="true" aria-label="Slide
                           1"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                              aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                              aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                              <div className="d-sm--flex row">
                                 <div className="profile-box col-sm-5">
                                    <img src="./images/testimonial/cust-2.jpg" className="img-fluid" alt="" />
                                 </div>

                                 <div className="card col-sm-7">
                                    <div className="desc-box">
                                       <p className="fst-italic">
                                          Not only was customer support very fast , but the
                                          design is very proffesional . will definitely be
                                          looking for new products in the future from this
                                          author..
                                       </p>
                                       <div className="my-4">
                                          <h4>Jecob Oramason</h4>
                                          <p className="m-0 text-white">Happy Customers</p>
                                       </div>
                                       <img src="./images/testimonial/qoutes.svg" className="float-end" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="carousel-item">
                              {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                              <div className="d-sm-flex row">
                                 <div className="profile-box col-sm-5">
                                    <img src="./images/testimonial/cust4.jpg" className="img-fluid" alt="" />
                                 </div>
                                 <div className="card col-sm-7">
                                    <div className="desc-box">
                                       <p className="fst-italic">
                                          Not only was customer support very fast , but the
                                          design is very proffesional . will definitely be
                                          looking for new products in the future from this
                                          author..
                                       </p>
                                       <div className="my-4">
                                          <h4>Michel Mical</h4>
                                          <p className="m-0 text-white">Happy Customers</p>
                                       </div>
                                       <img src="./images/testimonial/qoutes.svg" className="float-end" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="carousel-item">
                              {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                              <div className="d-sm--flex row">
                                 <div className="profile-box col-sm-5">
                                    <img src="./images/testimonial/cust-3.jpg" className="img-fluid" alt="" />
                                 </div>
                                 <div className="card col-sm-7">
                                    <div className="desc-box">
                                       <p className="fst-italic">
                                          Not only was customer support very fast , but the
                                          design is very proffesional . will definitely be
                                          looking for new products in the future from this
                                          author..
                                       </p>
                                       <div className="my-4">
                                          <h4>dwain michel</h4>
                                          <p className="m-0 text-white">Happy Customers</p>
                                       </div>
                                       <img src="./images/testimonial/qoutes.svg" className="float-end" alt="" />
                                    </div>
                                 </div>
                              </div>
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

export default hometestinomial


