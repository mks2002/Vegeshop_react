import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

   const [fix, setFix] = useState(false)
   function setFixed() {
      if (document.documentElement.scrollTop > 20) {
         setFix(true)
      } else {
         setFix(false)
      }
   }
   window.addEventListener('scroll', setFixed)


   return (
      <>
         <header id="full_nav">
            <div className="header">
               <div className="container">
                  <nav className={fix ? 'navbar navbar-expand-lg header-scrolled' : 'navbar navbar-expand-lg'}>
                     {/* <nav className='navbar navbar-expand-lg'> */}
                     <Link className="navbar-brand" to="/">
                        <img src="./images/logo.png" alt="logo" />
                     </Link>

                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                        <i className="fas fa-stream navbar-toggler-icon"></i>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav mx-auto">
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/product">Product</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/gallery">Gallery</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                           </li>
                        </ul>
                        <div className="header-right">
                           <div className="text-lg-end">
                              <span> Call us! </span>
                              <span className="phone_no"> +91 5454564654</span>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
            </div>
         </header>
      </>
   )
}

export default Header


{/* <ul className="navbar-nav mx-auto">
  <li className="nav-item">
     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
     <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
     <Link className="nav-link" to="/product">Product</Link>
  </li>
  <li className="nav-item">
     <Link className="nav-link" to="/gallery">Gallery</Link>
  </li>
  <li className="nav-item">
     <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul> */}