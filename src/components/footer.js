import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
   return (
      <>
         <section className="footer_wrapper mt-3 mb-md-0">

            <div className="container px-5 px-lg-0">
               <div className="row">

                  <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                     <h5>Tazza</h5>
                     <p className="mb-4 ps-0 company_details">
                        What is vegetable shopping called?
                        greengrocer
                        A greengrocer is a shopkeeper who sells fruit and vegetables. A greengrocer or a greengrocer's is a
                        shop where fruit and vegetables are sold......
                     </p>

                     <div className="contact_info">
                        <ul className="list_unstyled">
                           <li>
                              <Link to="/"><i className="fa fa-home me-3"></i>No. 96,South city,
                                 Kolkata</Link>
                           </li>
                           <li>
                              <Link to="/"><i className="fa fa-phone me-3"></i>91+ 5646278654</Link>
                           </li>
                           <li>
                              <Link to="/"><i className="fa fa-envelope me-3"></i>mayuk@gmail.com</Link>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                     <h5>Customer support</h5>
                     <ul className="link-widget p-0">
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Product returns</Link></li>
                        <li><Link to="/">Wholesale Policy</Link></li>
                     </ul>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                     <h5>Customer support</h5>
                     <ul className="link-widget p-0">
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Product returns</Link></li>
                        <li><Link to="/">Wholesale Policy</Link></li>
                     </ul>
                  </div>

                  <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                     <h5>Newsletter</h5>
                     <div className="form-group mb-4">
                        <input type="email" className="form-control bg-transparent" placeholder="Enter your email here" />
                        <button type="submit" className="btn main-btn">Subscribe</button>
                     </div>
                     <h5>Stay connected</h5>
                     <ul className="social-network d-flex align-items-center p-0">
                        <li>
                           <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li>
                           <Link to="/"><i className="fab fa-twitter"></i></Link>
                        </li>
                        <li>
                           <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                        <li>
                           <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="container-fluid copyright_section">
               <p>
                  Copyright <Link to="/">&copy; 2021 Tazza farming company</Link> All rights
                  reserved...
               </p>
            </div>
         </section>

      </>
   )
}

export default footer

