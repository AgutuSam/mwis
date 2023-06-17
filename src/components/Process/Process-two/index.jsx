import React from 'react';


const Process = () => {
    return(
    <>
      <section className="process-step wow animate__fadeIn" data-wow-delay="0.2s">
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
               </div>
               <div className="col-xl-12 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                        data-wow-delay="1s">Process</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Our Work Process</span>
                     <h2 className="pt-section-title">A Public–Private Partnership</h2>
                     <p className="pt-section-description">The government of Kenya has embraced the concept of private-public partnerships (PPPs) as an innovative and effective economic and financial model for developing critical infrastructure projects, such as the construction of dams. By engaging the private sector, the government aims to leverage their expertise, resources, and efficiency to accelerate the implementation of dam projects, which are vital for sustainable economic growth and development. Through PPPs, the government can harness private investment and technical know-how to overcome financial constraints and deliver high-quality dams that meet the country's water and energy needs. These partnerships foster collaboration between the public and private sectors, enabling risk-sharing, cost-efficiency, and enhanced project management. By adopting this model, Kenya is fostering a conducive environment for investment, promoting economic growth, and ensuring the long-term sustainability of its water and energy infrastructure.
                     </p>
                  </div>
               </div>
               <div className="col-xl-3">
               </div>
            </div>
            <div className="row  mt-4 mt-lg-5">
               <div className="col-xl-4 col-lg-6 col-md-6 mb-5 mb-lg-0 text-center">
                  <div className="pt-process-step pt-process-2">
                     <img className="pt-before-img d-xl-inline-block d-none " src="images/arrow-2.png" alt="arrow-img"/>
                     <div className="pt-process-media">
                        <i className=" flaticon-015-calculator-1"></i>
                        <span className="pt-process-number">1</span>
                     </div>
                     <div className="pt-process-info">
                        <h3 className="pt-process-title">Project Proposal & Planing</h3>
                        {/* <p className="pt-process-description">Lorem Ipsum is simply dummy text of the printing and
                           typesetting
                           industry.
                        </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6 mb-5 mb-lg-0 text-center">
                  <div className="pt-process-step pt-process-2">
                     <img className="pt-before-img  d-xl-inline-block d-none" src="images/arrow-1.png" alt="arrow-img"/>
                     <div className="pt-process-media">
                        <i className=" flaticon-030-presentation"></i>
                        <span className="pt-process-number">2</span>
                     </div>
                     <div className="pt-process-info">
                        <h3 className="pt-process-title">General Contract + Development</h3>
                        {/* <p className="pt-process-description">Lorem Ipsum is simply dummy text of the printing and
                           typesetting
                           industry.
                        </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-12 col-md-6 col-md-12 text-center pt-xl-0 pt-md-4">
                  <div className="pt-process-step pt-process-2">
                     <div className="pt-process-media">
                        <i className=" flaticon-044-design-tools"></i>
                        <span className="pt-process-number">3</span>
                     </div>
                     <div className="pt-process-info">
                        <h3 className="pt-process-title">Maintenance and Handover</h3>
                        {/* <p className="pt-process-description">Lorem Ipsum is simply dummy text of the printing and
                           typesetting
                           industry.
                        </p> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="process-img d-md-inline-block">
            <img className="img-fluid wow animate__fadeInRight" src="images/about/unnamed-1.png" alt="demo-img"/>
         </div>
      </section>
      </>
    );

}
export default Process;