import React from 'react';
import call from "./webp/6.webp";
import mail from "./webp/8.webp";
import qua from "./webp/7.webp";
function Contact() {
  return (
    <>
        <div className="theme-inner-banner">
				<div className="custom-container-one">
					<h2 className="banner-title">Contact us</h2>
					<p>We’re happy to answer any questions you may have, get in touch and let us know how we can help.</p>
				</div> 
			</div> 
			
			<div className="container">
				<div className="contact-info-box">
					<div className="row">
						<div className="col-md-4">
							<div className="single-box">
								<div className="icon-box"><img src={call} alt="" className="icon"/></div>
								<h5 className="title font-fix">Call us</h5>
								<p>Call our Support Team at <a href="tel:7000392596">+91 7000 392 596</a></p>
							</div> 
						</div> 
						<div className="col-md-4">
							<div className="single-box">
								<div className="icon-box"><img src={qua} alt="" className="icon"/></div>
								<h5 className="title font-fix">Help and Support</h5>
								<p>We’re here to help with any questions. Contact us<a href="tel:7000392596">Help Center</a>.</p>
							</div> 
						</div> 
						<div className="col-md-4">
							<div className="single-box">
								<div className="icon-box"><img src={mail} alt="" className="icon"/></div>
								<h5 className="title font-fix">Email us</h5>
								<p>Send an email to <a href="mailto:help@1club.in">help@1club.in</a></p>
							</div> 
						</div> 
					</div> 
				</div> 
			</div> 
			{/* <!-- 
			=============================================
				Address section
			============================================== 
			--> */}
			<div className="container">
				<div className="address-wrapper">
					<div className="row no-gutters">
						<div className="col-md-6">
							<div className="single-block border-fix">
								<h6>1club Headquarters</h6>
								<p>Indore <br/> madhya pradesh, <br/> India, 451010</p>
							</div> 
                            {/* <!-- /.single-block --> */}
						</div> 
                        {/* <!-- /.col- --> */}
						<div className="col-md-6">
							<div className="single-block">
								<h6>Other Questions</h6>
								<p>For help locating a specific department, including partnership opportunities, please email <a href="mailto:info@1club.in">info@1club.in</a></p>
							</div> 
                            {/* <!-- /.single-block --> */}
						</div> 
                        {/* <!-- /.col- --> */}
					</div> 
                    {/* <!-- /.row --> */}
				</div>
                 {/* <!-- /.address-wrapper --> */}
			</div>
    </>
  );
}

export default Contact;