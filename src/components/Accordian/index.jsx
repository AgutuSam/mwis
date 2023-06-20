import React from 'react';


const Accordian = (prop) => {
    return(
    <>
     <section className="accordian">
         <div className="container">
            <div className="row d-flex align-items-center">
               {/* <div className="about-img-block text-center col-xl-6 mb-5 mb-xl-0">
                  <img className="img-fluid about-img" src={prop.img} alt="demo-img"/>
                  <img className="img-fluid about-img-5 d-xl-inline-block d-md-inline-block d-none"
                     src="images/about/demo-6.png" alt="background"/>
               </div> */}
               <div className="col-xl-12">
                  <div className="pt-section-title-box text-center">
                     <span className="pt-section-sub-title">Standard In Industrial Contracting.</span>
                     <h2 className="pt-section-title">Have questions / Not sure how to proceed?</h2>
                     <p className="pt-section-description">In case you dont find what you are looking for feel free to contact us.
                     </p>
                  </div>
                  <div className="pt-accordion-block">
                     <div className="pt-accordion-box pt-active 1">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">
                              Where do you get Project information
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> The Project Information Memorandum (PIM), summary data and location details are available from the portal link https://ppp.water.go.ke/dashboard. The PIM contains brief project and country information, and the qualification criteria. 
                           </p>
                        </div>
                     </div>
                     <div className="pt-accordion-box 2">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">
                              Will the Government provide support measures for project viability?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> The government will discuss the Viability Support Measures on a case-by-case basis following the submission of the Full Project Proposal. These may include: Letter of Support, tariff structure, tax rebates on capital costs, project site acquisition, among others. 
                           </p>
                        </div>
                     </div>
                     <div className="pt-accordion-box 3">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">Will the government provide the required PPP project sites?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> 
The government shall acquire land for PPP projects sites based on the optimized/agreed project designs, and then lease the same to the private party. The terms of the lease shall be negotiated between the government and the private party. However, the private party may opt to fund the acquisition of the land in order to hasten the process. In all cases, the Government will facilitate the legal processes that will effectuate acquisition of the private land. 
                           </p>
                        </div>
                     </div>
                       <div className="pt-accordion-box 3">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">Which mechanism are in place to secure the water revenue stream which underwrites the PPP project?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> 
The investors will design, build, finance and operate the water storage and treatment plant and transmission line to a bulk delivery point. The investors will negotiate and sign a Bulk Water Purchase Agreement with the designated public entity. The government will facilitate offtake by the public entity who in return will pay bulk tariff based on the amount of treated domestic and/or irrigation water and electricity delivered. A letter of support from GoK will ensure that the designated public entities always remit the amounts due to the private party.
                           </p>
                        </div>
                     </div>
                       <div className="pt-accordion-box 3">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">What is the interface of the projects and Non-Revenue Water (NRW) and Water Last Mile Connectivity?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> 
The government is cognizant of the potential negative impacts of NRW and last mile infrastructure deficit on project viability. Therefore, National and county government are working together to ensure connectedness between bulk and retail water services. Whereas the public entity will primarily be responsible for the development and management downstream works, part of last mile investment may be included as part of the PPP project for bulk water supply or under separate management contract. The specific requirement for each project will be detailed in the Request for Proposal (RFP) document.
                           </p>
                        </div>
                     </div>
                      
                        <div className="pt-accordion-box 5">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">Will investors have an opportunity to negotiate the project structuring and associated risks?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> 
In the first step, the private party will propose structure that will optimally deliver on the project, and allocate responsibilities and rights of each party. The private party will also be expected to identify and assess the different categories of risks associated with the project, alternative tools for managing risk, and proposed allocations of the residual risk. This submission will form the basis for negotiation with the Contracting Authority.
                           </p>
                        </div>
                     </div>
                         <div className="pt-accordion-box 3">
                        <div className="pt-ad-title">
                           <h4 className="ad-title-text">Are the tariffs in US Dollars or Kenya Shillings and if the latter, are the investors protected from the Foreign Exchange risks?
                              <i aria-hidden="true" className="ion ion-ios-arrow-down active"></i><i aria-hidden="true"
                                 className="ion ion-ios-arrow-up inactive"></i>
                           </h4>
                        </div>
                        <div className="pt-accordion-details">
                           <p className="pt-detail-text"> 
The tariffs will be charged in Kenya Shillings. Government and investors will discuss the sharing of currency exchange risk, where this applies, and depending on the nature and source of the exchange rate risk. The government expects and encourages the investors to explore project design choices that reduce exposure to currency risks and other risks.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Accordian;