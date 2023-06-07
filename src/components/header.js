import React from 'react'
import { useState , useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

   const [fix, setFix] = useState(false);

   function handleScroll() {
     if (window.pageYOffset > 20) {
       setFix(true);
     } else {
       setFix(false);
     }
   }
 
   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);




   
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
                           <li className="nav-item">
                              <NavLink className="nav-link" activeClassName="active" to="/signup">Signup</NavLink>
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

