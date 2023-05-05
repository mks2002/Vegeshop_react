import React from 'react'

const signup = () => {
   return (
      <>
         <section className="From my-4  mysignupdiv">
            <div className="container">
               <div className="row no-gutters row111 mydiv">

                  <div className="col-lg-6 d-flex align-items-center">
                     <img src="./images/about/about-img.jpg" className="img-fluid mysignupimg" alt="" />
                  </div>

                  <div className="col-lg-6 px-5 pt-5">
                     <h4>Register your account</h4>

                     <div className="container">

                        <form method="POST">

                           <div className="form-row">
                              <div className="col-lg-12">
                                 <input type="text" placeholder="Username" name="name" required className="form-control my-3 p-4" />
                                 <input type="email" placeholder="Email-Address" className="form-control my-3 p-4" name="useremail" required />
                              </div>
                           </div>

                           <div className="form-row">
                              <div className="col-lg-12">
                                 <input type="password" placeholder="password" name="password" required
                                    className="form-control my-3 p-4" />
                                 <input type="password" name="cpassword" placeholder="confirm password" className="form-control my-3 p-4"
                                    required />
                              </div>
                           </div>

                           <div className="form-row">
                              <div className="col-lg-7 m-auto">
                                 <button type="submit" className="btn1 mt-3 mb-5">Register Now</button>
                              </div>
                           </div>

                           <p>
                              Already have an account <a href="{% url 'login' %}">login here</a>
                           </p>
                           
                        </form>

                     </div>

                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default signup
