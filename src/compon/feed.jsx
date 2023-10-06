import React, { useEffect, useState } from "react";

function Feed() {
  var Feedi = [
    "-Mhu8UK3yW0",
    "eBOtnccUxbE",
    "jV68yMnH01o",
    "S3uTR-P0ycA",
    "sh7jXV3nwUo",
    "aJFllw4DOmo",
    "A7qobDg6m-s",
    "e8B8Eh-CfWI",
    "mfVW4OYSqtA",
    "Q8Hdvy0SpU0",
  ];
  const [Feeder, setFeeder] = useState(Feedi);
  const callAboutpage = async () => {
    try {
      const res = await fetch("/fid", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      Feedi = data;
      setFeeder(Feedi);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAboutpage();
  }, []);
  const Feedcard = Feeder.map((currentv, ind) => {
    var T_link = "https://img.youtube.com/vi/" + currentv + "/0.jpg",
      V_link = "https://img.youtube.com/vi/" + currentv;
    return (
      <div
        className="middle-container d-flex justify-content-between align-items-center mt-3 p-2 shadow-dreamy"
        key={ind}
        style={{ margin: "3%", background: "white" }}
      >
        <a href={V_link} style={{ width: "100%" }}>
          <img
            src={T_link}
            alt="fireSpot"
            className="imgnav"
            style={{ width: "100%", borderRadius: "6px", objectFit: "cover" }}
          />
        </a>
      </div>
    );
  });
  return (
    <div
      style={{
        marginTop: "1%",
        position: "absolute",
        width: "100%",
        zIndex: "-3",
      }}
    >
      <div
        className="middle-container d-flex justify-content-between align-items-center mt-3 p-2 shadow-dreamy"
        style={{ margin: "3%", background: "white" }}
      >
        <h2
          style={{
            margin: "0",
            fontSsize: "20px",
            lineHeight: "1em",
            paddingRight: "16px",
            color: "#0a58ca",
          }}
        >
          <center>What people thinks about us</center>
        </h2>
      </div>
      {Feedcard}
      <span
        style={{ height: "80px", width: "100%", position: "absolute" }}
      ></span>
    </div>
  );
}

export default Feed;
