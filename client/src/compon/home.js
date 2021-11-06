import React from 'react';
import {NavLink} from "react-router-dom";
import '../css/style.css';
import '../css/respon.css';
import pic2 from './webp/pic-2.webp';
import pic1 from './webp/pic-1.webp';
import curpng from './webp/currency.webp';
import pic4 from './webp/pic-4.webp';

function Home() {
  
  return (
  <>
<div className="nomics-ticker-widget" data-name="Bitcoin" data-base="BTC" data-quote="INR"></div>
    <div className="main-page-wrapper">
      {/* <!-- 
			=============================================
				Cryonik Main Banner
			============================================== 
			--> */}
      <div className="Cryonik-main-banner" style={{
    paddingTop:"20px",
    paddingBottom:"20px"
}}>
        <div className="container">
          <div className="main-wrapper clearfix">
            <div className="text-wrapper float-left">
              <h1
                className="main-title fadeInDown wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.5s"
              >
                Your best crypto Startup agency
              </h1>
              
              <p
                className="sub-text fadeInUp wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.5s"
              >
                The fast and most populer currency for your future online
                business.
              </p>
              <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
          <NavLink to="/Pricing" style={{color:"White",fontWeight:"400"}}>
            <div className="dollar-div px-3" style={{background:"#ff396f"}}>
                Pricing
            </div>
            </NavLink>
            <NavLink to="/Contact" style={{color:"White",fontWeight:"400"}}>
            <div className="dollar-div px-3" style={{background:"#ffb400"}}>
                Contact Us
            </div>
            </NavLink>
            <NavLink to="/policy" style={{color:"White",fontWeight:"400"}}>
            <div className="dollar-div px-3" style={{background:"black"}}>
                Our policy
            </div>         
            </NavLink>
        </div>
            </div>
            {/* <!-- /.text-wrapper --> */}
          </div>
          {/* <!-- /.main-wrapper --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.Cryonik-main-banner -->
      <!-- 
			=============================================
				Investment Calculation
			============================================== 
			--> */}
      {/* <!-- /.investment-calculation -->
      <!-- 
			=============================================
				About Cryonik
			============================================== 
			--> */}
      <div className="section-spacing">
        <div className="about-Cryonik">
          <div className="container">
            <h2 className="title">
              Automate your coins <br />
              within minutes
            </h2>
            <div className="row single-box">
              <div className="col-xl-6 col-lg-5 col-12 order-lg-last">
                <div className="img-wrapper gif-box">
                  <img src={pic2} className="home_img" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 order-lg-first col-12">
                <div className="text-wrapper right-space">
                  <ul>
                    <li>
                      <div className="serial">1</div>
                      <h5>Sign up</h5>
                      <p>
                        Sign up on web, iOS or Android and go trough our easy
                        registration process.
                      </p>
                    </li>
                    <li>
                      <div className="serial">2</div>
                      <h5>Deposit your coins</h5>
                      <p>
                        Select between Bitcoin, Etherum or Litecoin and deposit
                        money into your Cryonik wallet.
                      </p>
                    </li>
                    <li>
                      <div className="serial">3</div>
                      <h5>Setup your investment</h5>
                      <p>
                        You're in charge, decide for how long you want to invest
                        and the frequency of your payouts.
                      </p>
                    </li>
                    <li>
                      <div className="serial">4</div>
                      <h5>Then, we put our magic to work</h5>
                      <p>
                        In minutes, we'll put your coins to work like the
                        world's smartest investors.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row single-box">
              <div className="col-lg-6 col-12 order-lg-last">
                <div className="text-wrapper left-space space-fix">
                  <h2 className="title">Decentralized Minning</h2>
                  <p>
                    Bitcoin or cryptocurrency mining software is used to generate new cryptocurrency and introduce components to an existing Blockchain. The new cryptocurrency that is mined is taken by the mining party after validation as a reward for adding to the Blockchain.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-first">
                <div className="img-wrapper">
                  <img src={pic1} className="home_img" alt="" />
                </div>
              </div>
            </div>
            <div className="row single-box">
              <div className="col-lg-6 col-12">
                <div className="text-wrapper right-space">
                  <h2 className="title">Money and Smart wallet</h2>
                  <p>
                    A crypto wallet is a place where you can securely keep your crypto. There are many different types of crypto wallets, but the most popular ones are hosted wallets, non-custodial wallets, and hardware wallets.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="img-wrapper">
                  <img src={pic2} className="home_img" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.about-Cryonik --> */}
      </div>
      {/* <!-- /.section -->
      <!-- 
			=============================================
				Currency Wallet
			============================================== 
			--> */}
      <div className="section-spacing">
        <div className="currency-wallet">
          <div className="container">
            <img src={curpng} className="home_img" alt="" />
            <h2>Local Currency Wallet</h2>
            <p>
              You can freely choose the currency you want for your Cryonik
              wallet, from INR, USD, EUR, GBP, CAD, CNY, JPY and RUB.
            </p>
          </div>
        </div>
        {/* <!-- /.currency-wallet --> */}
      </div>
      {/* <!-- /.section -->
      <!-- 
			=============================================
				Getting Start Banner
			============================================== 
			--> */}
      {/* <!-- /.section-spacing -->
      <!--
			=====================================================
				Our Security
			=====================================================
			--> */}
      <div className="our-security section-spacing">
        <div className="container">
          <h2 className="title">
            The security of your coins is our <br />
            highest priority
          </h2>
          <div className="row single-box">
            <div className="col-lg-7 col-12 order-lg-last">
              <div className="img-wrapper clearfix">
                <img src={pic4} className="home_img" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-12 order-lg-first">
              <div className="text-wrapper right-space">
                <ul>
                  <li>
                    <h5>Invest Securely</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </li>
                  <li>
                    <h5>Loss Protection</h5>
                    <p>
                      here are many variations of passages of Lorem Ipsum
                      available, but the majority.
                    </p>
                  </li>
                  <li>
                    <h5>Higher grade Security</h5>
                    <p>
                      Mauris bibendum diam turpis, aliquet eleifend ex dictum
                      sit amet. Etiam ut est purus.
                    </p>
                  </li>
                  <li>
                    <h5>Encrypted SSL</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                </ul>
                <a
                  href="cryptonet/crypto/security.html"
                  className="feature theme-button-two"
                  >Security features</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--
			=====================================================
				Download Section
			=====================================================
			--> */}
      
      {/* <!-- /.download-section -->
      <!--
			=====================================================
				Join our community
			=====================================================
			--> */}
      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
     
     

    </div>
    <span style={{height:"80px",width:"100%",position:"absolute"}}></span>
    </>
  );
}

export default Home;