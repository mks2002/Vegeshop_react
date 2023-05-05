import React from 'react'

const contactbody = () => {
  return (
    <>

      <section class="contact_sectioin">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center pb-5">
              <h2 class="section-title">Get in touch</h2>
              <p class="section-subtitle">
                if you have any query or any problbem with our services than you can contact us any time 24/7 our
                employees are always ready to solved your problem...
              </p>
            </div>
            <div class="col-12 contact-form">
              <div class="row">
                <div class="col-lg-7 mb-5">

                  <div class="row g-3">
                    <div class="col-md-6 mb-4">
                      <input type="text" class="form-control" placeholder="Your Name  * " required />
                    </div>
                    <div class="col-md-6 mb-4">
                      <input type="email" class="form-control" placeholder="Your email  * " required />
                    </div>

                    <div class="col-md-6 mb-4">
                      <input type="text" class="form-control" placeholder="Your address  * " required />
                    </div>

                    <div class="col-md-6 mb-4">
                      <input type="number" class="form-control" placeholder="Your phone no.  * " required />
                    </div>

                    <div class="col-12 mb-4">
                      <textarea class="form-control" cols="30" rows="10" placeholder="your Message"></textarea>
                    </div>

                    <div class="col-12 mb-4">
                      <button type="submit" class="btn main-btn">
                        Send message
                      </button>
                    </div>

                  </div>

                </div>

                <div class="col-lg-5 mb-5">
                  <div class="content-box ms-sm-5">
                    <ul class="info-box clearfix">
                      <li>
                        <i class="fas fa-phone-alt"></i>
                        <p>Any questions? Call us</p>
                        <div>
                          <a href="#">+91 585 825 6325</a>
                        </div>
                      </li>

                      <li>
                        <i class="far fa-envelope-open"></i>
                        <p>Any questions? Email us</p>
                        <div>
                          <a href="#">tazza@gmail.com</a>
                        </div>
                      </li>
                    </ul>
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

export default contactbody
