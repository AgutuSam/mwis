import React from 'react';



const Footer = () => {
    return(
    <>
    <footer id="pt-footer">
         <div className="pt-footer-style-1">
            <div className="pt-footer-top">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-md-6">
                        <div className="footer-logo">
                           <div className="row">
                              <div className="col-sm-12">
                                 <img className="img-fluid pt-footer-logo" src="images/logo-white.png" alt="logo-white"/>
                                 {/* <p className="text-white">Lorem Ipsum is simply dummied text of the printing and typesetting
                                    industry.
                                 </p> */}
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-lg-3 col-md-6">
                        <div className="pt-footer1">
                           <h4 className="footer-title text-white">Useful links</h4>
                           <div className="menu-footer-menu-container">
                              <ul id="menu-footer-menu" className="menu">
                                 <li>
                                    <a href="/ourprocess">Our Process</a>
                                 </li>
                                 <li>
                                    <a href="/ourteam">Our Team</a>
                                 </li>
                                 <li>
                                    <a href="/contactus">Contact Us</a>
                                 </li>
                                 <li>
                                    <a href="/ourclients">Our Clients</a>
                                 </li>
                                 <li>
                                    <a href="/aboutus">About Us</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div> */}
                     {/* <div className="col-lg-3  col-md-6 ">
                        <div className="pt-footer1-menu pt-footer1">
                           <h4 className="footer-title">Our serive</h4>
                           <div className="list-inline pt-footer1-menu">
                              <ul className="pt-service">
                                 <li>
                                    <a href="!#">
                                    Visualizing Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Daily Dose of Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Architizer Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Daily Dose of Architecture </a>
                                 </li>
                                 <li>
                                    <a href="!#">
                                    Visualizing Architecture </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div> */}
                     <div className="col-lg-6  col-md-6">
                        <div className="pt-footer2">
                           <h4 className="footer-title text-white">Our Contact</h4>
                           <div className="row">
                              <div className="col-sm-12">
                                 <ul className="pt-contact pt-2">
                                 <li>
                                       <i class="fas fa-map-marker-alt"></i>
                                       <span class="text-white">
                                       Maji House, Upper hill, Off Ngong road, Nairobi.</span>

                                    </li>
                                    <li class="pt-3">
                                       <a href="tel:+1800001658"><i class="fa fa-phone"></i>
                                       <span class="text-white">Telephone: +254 020 2716103, 4900000</span>
                                       </a>
                                    </li>
                                    <li class="pt-3">
                                       <a href="mailto:info@water.go.ke"><i class="fa fa-envelope"></i><span
                                          class="text-white">ps@water.go.ke</span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="pt-copyright-footer">
               <div class="container">
                  <div class="row flex-row-reverse">
                     <div class="col-md-12 text-center align-self-center">
                        <span class="pt-copyright"><a target="_blank" href="/">Copyright 2023 Private Public Partnerships - Ministry of Water Sanitation and Irrigation All Rights
                        Reserved.</a></span>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </footer>
      </>
    );

}
export default Footer;