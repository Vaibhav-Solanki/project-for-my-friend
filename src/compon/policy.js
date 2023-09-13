import React from "react";

import { NavLink } from "react-router-dom";
function Rpolicy() {
  return (
    <>
      <div
        style={{
          marginTop: "1%",
          position: "absolute",
          width: "100%",
          padding: "2%",
        }}
      >
        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
          <NavLink to="/policy" style={{ color: "White", fontWeight: "400" }}>
            <div className="dollar-div px-3" style={{ background: "#ff396f" }}>
              Privacy Policy
            </div>
          </NavLink>
          <NavLink to="/Rpolicy" style={{ color: "White", fontWeight: "400" }}>
            <div className="dollar-div px-3" style={{ background: "#ffb400" }}>
              Refund policy
            </div>
          </NavLink>
          <NavLink to="/toc" style={{ color: "White", fontWeight: "400" }}>
            <div className="dollar-div px-3" style={{ background: "black" }}>
              TERMS AND CONDITIONS
            </div>
          </NavLink>
        </div>
        <div className="card">
          <h2
            style={{
              margin: "0",
              fontSsize: "20px",
              lineHeight: "1em",
              paddingRight: "16px",
            }}
          >
            <center>
              Refund
              <br />
              and
              <br />
              Cancellation Policy
            </center>
          </h2>
          <br />
          Our focus is complete customer satisfaction. In the event, if you are
          displeased with the services provided, we will refund back the money,
          provided the reasons are genuine and proved after investigation.
          Please read the fine prints of each deal before buying it, it provides
          all the details about the services or the product you purchase.
          <br />
          <br />
          In case of dissatisfaction from our services, clients have the liberty
          to cancel their projects and request a refund from us. Our Policy for
          the cancellation and refund will be as follows:
          <br />
          <br /> Cancellation Policy
          <br />
          <br />
          For Cancellations please contact the us via contact us link.
          <br />
          <br />
          Requests received later than 3 business days prior to the end of the
          current service period will be treated as cancellation of services for
          the next service period.
          <br />
          <br />
          Refund Policy
          <br />
          <br />
          We will try our best to create the suitable design concepts for our
          clients.
          <br />
          <br />
          In case any client is not completely satisfied with our products we
          can provide a refund.
          <br />
          <br />
          If paid by credit card, refunds will be issued to the original credit
          card provided at the time of purchase and in case of payment gateway
          name payments refund will be made to the same account.
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Rpolicy;
