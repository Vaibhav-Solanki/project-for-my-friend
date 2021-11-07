import React from 'react';
import {NavLink} from "react-router-dom";
function Pricing() {
  return (
    <><div style={{marginTop:"20px",position:"absolute",width:"100%"}}>
        <div class="card">

    <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3" style={{width:"100%"}}>
            <h2 style={{margin:"0",
    fontSsize:"20px",
    lineHeight:"1em",
    paddingRight:"16px",color:"white"}}><center>Early Member</center></h2>
            </div>
            </div>
            <br/>

							<ul>
								<li>
									<h5>Customized</h5>
									<p>Decide how much can you invest, for how long you want to invest and the frequency of your payouts. </p>
								</li>
								<li>
									<h5>Automated</h5>
									<p>No trading knowledge needed. We'll put your coins to work like the world's smartest investors.</p>
								</li>
								<li>
									<h5>Professionally Managed</h5>
									<p>We wake up each morning dedicating our lives to researching and identify the highest probability trades.</p>
								</li>
								<li>
									<h5>Loss Protection</h5>
									<p>Your investment is covered by our loss protection policy.</p>
								</li>
								<li>
									<h5>Fast Withdrawals</h5>
									<p>Get your withdrawals faster, any funds that you withdraw should reach your address in less than 2 hours.</p>
								</li>
								<li>
									<h5>Cryonik Prepaid Card</h5>
									<p>Withdraw funds straight from your Cryonik Wallet to your Cryonik Prepaid Mastercard.</p>
								</li>
								<li>
									<h5>blue Account</h5>
									<p>Receive expert investment advice, exclusive reports and updates via email and SMS.</p>
								</li>
								<li>
									<h5>24 Hour Support</h5>
									<p>Call, chat or email us anytime you need a helping hand.</p>
								</li>
                                <li >
                                    
                                </li>
							</ul>
                            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3">
            <div className="round-div"><i className="fas fa-rupee-sign dollar"></i></div>
            </div>
            <div className="d-flex flex-column text-right mr-2"> <span className="current-balance">Price</span> <span className="amount"><span className="dollar-sign">₹</span>400</span> </div>
            </div>
                            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2"><a href="https://buy.stripe.com/6oEdTK2JwdDH2VG001" style={{width: "100%"}}><button class="btc shadow-dreamy gbut" type="submit" style={{width: "100%", background: "#5957f9"}}><i class="far fa-money-bill-alt"> </i> Buy Now</button></a></div>
                            </div>
                            
	<span style={{height:"80px",width:"100%",position:"absolute"}}></span>
</div>
    </>
  );
}

export default Pricing;