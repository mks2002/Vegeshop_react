import React from 'react'

const errorbody = () => {
  return (
    <>
    
      <section class="contact_section">
        <div class="container">
          <div class="row align-items-center flex-column flex-lg-row-reverse">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="">
                <img src="./images/error_404.png" alt="" />
              </div>
            </div>
            <div class="col-lg-5 pb-5 text-center text-lg-start">
              <h2 class="section-title">
                Opps.... This page is not found..
              </h2>
              <p class="text-black">
                Sorry ,the page you are requested is currently not available so please try again later after some
                time...
              </p>
              <a class=" btn main-btn " aria-current="page" href="/">Back to Home</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default errorbody
