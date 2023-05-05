import React from 'react'

const homemain = () => {
   return (
      <>
         {/* this will contain the above card about and the below card of the homescreen.... */}
         <section className="feature_section">
            <div className="container">
               <div className="row">
                  <div className="col-6 col-lg-3 mb-5">
                     <div className="card features-box">
                        <div className="text-center">
                           <div className="features-icon-border">
                              <div className="features-icon">
                                 <img src="./images/feature-icon/ui-chat.svg" alt="image is loading" />
                              </div>
                           </div>

                           <div className="features-text">
                              <h3>24/07 Support</h3>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-6 col-lg-3 mb-5">
                     <div className="card features-box">
                        <div className="text-center">
                           <div className="features-icon-border">
                              <div className="features-icon">
                                 <img src="./images/feature-icon/truck-loaded.svg" alt="image is loading" />
                              </div>
                           </div>

                           <div className="features-text">
                              <h3>Free Shipping</h3>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-6 col-lg-3 mb-5">
                     <div className="card features-box">
                        <div className="text-center">
                           <div className="features-icon-border">
                              <div className="features-icon">
                                 <img src="./images/feature-icon/wheat.svg" alt="image is loading" />
                              </div>
                           </div>

                           <div className="features-text">
                              <h3>Fresh & Healthy</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-6 col-lg-3 mb-5">
                     <div className="card features-box">
                        <div className="text-center">
                           <div className="features-icon-border">
                              <div className="features-icon">
                                 <img src="./images/feature-icon/lemon.svg" alt="image is loading" />
                              </div>
                           </div>

                           <div className="features-text">
                              <h3>From our farm</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="landing_about_section">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-sm-8">
                     <div className="about-content">
                        <h2>We providing Services Since 1841 with proud.</h2>

                        <div className="about-details">
                           <p className="fw-bold">
                              A vegetable market is a type of building or structure created and designed in various colors,
                              materials, shapes, sizes, and styles with accurate and specific fruit and vegetables. Vegetable
                              markets provide healthier food items that are fresher than the ones available in supermarkets.
                           </p>
                           <p>
                              A vegetable market is a type of building or structure created and designed in various colors,
                              materials, shapes, sizes, and styles with accurate and specific fruit and vegetables. Vegetable
                              markets provide healthier food items that are fresher than the ones available in supermarkets.
                           </p>

                           <p>
                              A vegetable market is a type of building or structure created and designed in various colors,
                              materials, shapes, sizes, and styles with accurate and specific fruit and vegetables. Vegetable
                              markets provide healthier food items that are fresher than the ones available in
                              supermarkets.....
                           </p>
                           <a href="/about" className="btn main-btn">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="landing_product_section">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-12 text-center pb-5">
                     <h2 className="section-title">Our Best Selling Products</h2>
                     <p className="section-subtitle">
                        the passage experienced a surge in popularity during the 1960s
                        when again during the 90s as desktop publishers.
                     </p>
                  </div>
               </div>

               <div className="row mx-0">
                  <div className="col-lg-3 col-sm-6 mb-5">
                     <div className="card product-card">
                        <div className="product-img">
                           <img src="./images/products/product-2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                           <h3>Oranges</h3>
                           <span>$50 KG</span>
                        </div>
                        <div className="product-details">
                           <a href="/product" className="btn main-btn"> View PRoducts</a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5">
                     <div className="card product-card">
                        <div className="product-img">
                           <img src="./images/products/product-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                           <h3>Musk Melon</h3>
                           <span>$75 KG</span>
                        </div>
                        <div className="product-details">
                           <a href="/product" className="btn main-btn"> View PRoducts</a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5">
                     <div className="card product-card">
                        <div className="product-img">
                           <img src="./images/products/product-3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                           <h3>Apple</h3>
                           <span>$50 KG</span>
                        </div>
                        <div className="product-details">
                           <a href="/product" className="btn main-btn"> View PRoducts</a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5">
                     <div className="card product-card">
                        <div className="product-img">
                           <img src="./images/products/product-4.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                           <h3>Dragonfruit</h3>
                           <span>$80 KG</span>
                        </div>
                        <div className="product-details">
                           <a href="/product" className="btn main-btn"> View PRoducts</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
      </>
   )
}

export default homemain

