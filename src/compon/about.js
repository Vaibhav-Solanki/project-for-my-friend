import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
function About() {
  const logout = async () => {
    try {
      const res = await fetch("/logt", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      window.alert("User Loged Out");
      history.push("/");
      // console.log(data.transi);
      // console.log(Transi);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };
  // dhare card
  var shera = [
    { _id: "61607cd7f077d73cb7da2b84", st: "PANDING", nams: "Vaibhav Das" },
    { _id: "61607cd7f077d73cb7da2b84", st: "Active", nams: "Harish" },
  ];
  const [Ref, setRef] = useState(shera);
  let lans = Ref.length;
  const sharecard = Ref.map((currentv, inx) => {
    var col = "#1dcc70";
    if (currentv.st === "PANDING") {
      col = "#ff396f";
    }
    if (lans - 6 < inx) {
      return (
        <div
          className="middle-container d-flex justify-content-between align-items-center mt-3 p-2"
          key={inx}
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
    } else {
      return <></>;
    }
  });
  // usercard

  const [user, setUser] = useState({
    email: "",
    password: "",
    balance: 0,
  });
  var trans = [
    { _id: "61607cd7f077d73cb7da2b84", amount: 0, datew: "20/09/2000" },
    { _id: "61607cd7f077d73cb7da2b84", amount: 0, datew: "20/09/2000" },
  ];
  const [Transi, setTransi] = useState(trans);

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
      trans = data.transi;
      setTransi(trans);
      setUser({
        name: data.name,
        email: data.email,
        balance: Number(data.balance),
      });
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

  let lan = Transi.length;
  const trancard = Transi.map((currentv, ind) => {
    let cl = "fa fa-arrow-down";
    let col = "#1dcc70";
    if (currentv.amount < 0) {
      cl = "fa fa-arrow-up";
      col = "#ff396f";
    }
    if (lan - 6 < ind) {
      return (
        <div
          className="middle-container d-flex justify-content-between align-items-center mt-3 p-2"
          key={ind}
        >
          <div className="dollar-div px-3" style={{ background: col }}>
            <div className="round-div">
              <i className={cl}></i>
            </div>
          </div>
          <div className="d-flex flex-column text-right mr-2">
            {" "}
            <span className="current-balance">{currentv.datew}</span>{" "}
            <span className="amount">
              <span className="dollar-sign">₹</span>
              {currentv.amount}
            </span>{" "}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  });

  return (
    <>
      <div style={{ marginTop: "1%", position: "absolute", width: "100%" }}>
        <div className="container d-flex justify-content-center ">
          <div className="card">
            <div className="top-container">
              {" "}
              <img
                src="https://i.imgur.com/G1pXs7D.jpg"
                className="img-fluid profile-image"
                width="70"
                alt="user"
              />
              <div className="ml-3" style={{ marginLeft: "20px" }}>
                <h5 className="name">{user.name}</h5>
                <p className="mail">{user.email}</p>
              </div>
            </div>
            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <div className="dollar-div px-3">
                <div className="round-div">
                  <i className="fas fa-rupee-sign dollar"></i>
                </div>
              </div>
              <div className="d-flex flex-column text-right mr-2">
                {" "}
                <span className="current-balance">Current Balance</span>{" "}
                <span className="amount">
                  <span className="dollar-sign">₹</span>
                  {user.balance}
                </span>{" "}
              </div>
            </div>

            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <NavLink to="/withdraw" style={{ color: "black" }}>
                <div
                  className="dollar-div px-3"
                  style={{ background: "#ff396f" }}
                >
                  <div className="round-div">
                    <i className="fa fa-arrow-down"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/share" style={{ color: "black" }}>
                <div
                  className="dollar-div px-3"
                  style={{ background: "#ffb400" }}
                >
                  <div className="round-div">
                    <i className="fas fa-share-alt"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/setting" style={{ color: "black" }}>
                <div
                  className="dollar-div px-3"
                  style={{ background: "black" }}
                >
                  <div className="round-div">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <div style={{ width: "100%" }}>
                <button
                  className="btc shadow-dreamy gbut"
                  onClick={logout}
                  style={{ width: "100%", background: "black" }}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            </div>
            {/* blank */}
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
              Transaction
            </h2>
            {/* wthdraw */}
            {trancard}
            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <NavLink to="/transaction" style={{ width: "100%" }}>
                <button
                  className="btc shadow-dreamy gbut"
                  type="submit"
                  style={{ width: "100%", background: "#6236ff" }}
                >
                  <i className="fas fa-sign-out-alt"></i> Load more
                </button>
              </NavLink>
            </div>

            {/* /wdthdra */}
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
              Referral Income
            </h2>
            {/* wthdraw */}
            {sharecard}
            <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
              <NavLink to="/share" style={{ width: "100%" }}>
                <button
                  className="btc shadow-dreamy gbut"
                  type="submit"
                  style={{ width: "100%", background: "#ffb400" }}
                >
                  <i className="fas fa-share-alt"></i> Load more
                </button>
              </NavLink>
            </div>

            {/* /wdthdra */}
          </div>
        </div>
        <span
          style={{ height: "80px", width: "100%", position: "absolute" }}
        ></span>
      </div>
    </>
  );
}

export default About;
