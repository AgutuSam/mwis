import React from 'react';


const Location = () => {
    return(
    <>
       <section className="pt-section">
         <div className="container">
            <div className="row">
               <div className="col-xl-4  col-lg-6 col-12 mb-4">
                  <div className="icon-box1 text-center">
                     <div className="icon-box-icon">
                        <span className="icon animation">
                        <i className="fas fa-map-marker-alt"></i>
                        </span>
                     </div>
                     <div className="icon-box-content">
                        <h3 className="icon-box-title">
                           <span>Our Location</span>
                        </h3>
                        <p className="icon-box-description">Maji House, Upper hill, Off Ngong road, Nairobi.</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4  col-lg-6 col-12 mb-4 mb-sm-0 mt-lg-0">
                  <div className="icon-box1 text-center">
                     <div className="icon-box-icon">
                        <span className="icon animation">
                        <i className="fas fa-phone-alt"></i>
                        </span>
                     </div>
                     <div className="icon-box-content">
                        <h3 className="icon-box-title">
                           <span>Our Location</span>
                        </h3>
                        <p className="icon-box-description">
                        +254 020 2716103 <br />
+254 020 4900000
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4  col-lg-12 col-12 mt-md-4 mt-lg-0">
                  <div className="icon-box1 text-center">
                     <div className="icon-box-icon">
                        <span className="icon animation">
                        <i className="fas fa-envelope"></i>
                        </span>
                     </div>
                     <div className="icon-box-content">
                        <h3 className="icon-box-title">
                           <span>Mail us</span>
                        </h3>
                        <p className="icon-box-description">
                        ps@water.go.ke <br />
ppp@water.go.ke
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="backgrount-image-right d-md-inline-block wow animate__fadeInRight" id="location">
            <img className="img-fluid" src="images/bg/bg-01.png" alt="bg-img"/>
         </div> */}
      </section>
      </>
    );

}
export default Location;