import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import shar from "./webp/coin.webp";
function Share() {
  var shera = [
    { _id: "61607cd7f077d73cb7da2b84", st: "PANDING", nams: "Vaibhav Das" },
    { _id: "61607cd7f077d73cb7da2b84", st: "Active", nams: "Harish" },
  ];
  const [Ref, setRef] = useState(shera);

  const history = useHistory();
  const callAboutpage = async () => {
    try {
      const res = await fetch("/abt", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      shera = data.ref;
      setRef(shera);
      // console.log(data.transi);
      // console.log(Transi);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutpage();
  }, []);

  const sharecard = Ref.map((currentv, ind) => {
    var col = "#1dcc70";
    if (currentv.st === "PANDING") {
      col = "#ff396f";
    }
    return (
      <div
        className="middle-container d-flex justify-content-between align-items-center mt-3 p-2"
        key={ind}
      >
        <div className="dollar-div px-3" style={{ background: col }}>
          <div className="round-div">
            <i className="fas fa-user-plus"></i>
          </div>
        </div>
        <div className="d-flex flex-column text-right mr-2">
          {" "}
          <span className="current-balance">{currentv.nams}</span>{" "}
          <span className="amount">
            <span className="dollar-sign"></span>
            {currentv.st}
          </span>{" "}
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        <div className="main-page-wrapper">
          <div className="how-afiliate-works">
            <div className="container">
              <div className="wrapper">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <img src={shar} alt="" />
                  </div>
                  <div className="col-md-6 col-12">
                    <h2>How it works</h2>
                    <ul className="card">
                      <li>
                        <div className="num">1</div>
                        Promote <b>1club.in</b> on your website or social media
                      </li>
                      <li>
                        <div className="num">2</div>
                        For every visitor who signs up and invest at least ₹200
                      </li>
                      <li>
                        <div className="num">3</div>
                        You will receive ₹100
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center ">
          <div className="card">
            <h2
              style={{
                margin: "0",
                fontSsize: "20px",
                lineHeight: "1em",
                paddingRight: "16px",
              }}
            >
              All Ref
            </h2>
            {/* wthdraw */}
            {/* /wdthdra */}
            {sharecard}
            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <NavLink to="/transaction" style={{ width: "100%" }}>
                <button
                  className="btc shadow-dreamy gbut"
                  type="submit"
                  style={{ width: "100%", background: "#ffb400" }}
                >
                  <i className="fas fa-share-alt"></i> Invite
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
