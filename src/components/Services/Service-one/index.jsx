import React from 'react';
import Servcard from './Servcard';


const Service = () => {
    return(
    <>
       <section className="services wow animate__fadeIn" data-wow-delay="0.2s">
         <div className="container">
            <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-xl-12 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1  wow animate__fadeInUp" data-wow-duration="1s"
                        data-wow-delay="1s">PROCESS</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Our Work Process</span>
                     <h2 className="pt-section-title">A Public–Private Partnership</h2>
                     <p className="pt-section-description">The government of Kenya has embraced the concept of private-public partnerships (PPPs) as an innovative and effective economic and financial model for developing critical infrastructure projects, such as the construction of dams. By engaging the private sector, the government aims to leverage their expertise, resources, and efficiency to accelerate the implementation of dam projects, which are vital for sustainable economic growth and development. Through PPPs, the government can harness private investment and technical know-how to overcome financial constraints and deliver high-quality dams that meet the country's water and energy needs. These partnerships foster collaboration between the public and private sectors, enabling risk-sharing, cost-efficiency, and enhanced project management. By adopting this model, Kenya is fostering a conducive environment for investment, promoting economic growth, and ensuring the long-term sustainability of its water and energy infrastructure.
                     </p>
                  </div>
               </div>
               <div className="col-lg-3"></div>
            </div>
            <div className="row">
               <Servcard 
               img="images/blog/blog-6.jpg"
               title="Construction Management"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
               <Servcard
               img="images/blog/blog-3.jpg" 
               title="Expert Mechanical"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard 
                img="images/blog/blog-2.jpg"
               title="Architecture & Building"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard 
                img="images/blog/blog-7.jpg"
               title="Tiling & Painiting"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard
                img="images/blog/blog-1.jpg" 
               title="Apartment Design"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
                <Servcard
                img="images/blog/blog-4.jpg" 
               title="Facade Engineering"
               des="Lorem Ipsum is simply dummy text of the printing Ipsum has been the standard ."
               />
               
             
                 
            </div>
         </div>
      </section>
      </>
    );

}
export default Service;