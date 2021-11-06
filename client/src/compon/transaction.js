import React, { useEffect,useState } from 'react';
import {useHistory} from "react-router-dom";
function Transaction() {
  var trans= [{_id: '61607cd7f077d73cb7da2b84', amount: 0, datew: '20/09/2000'},
{_id: '61607cd7f077d73cb7da2b84', amount: 0, datew: '20/09/2000'}];
  const [Transi, setTransi] = useState(trans);
  
const history = useHistory();
  const callAboutpage = async () =>{
    try {
      const res = await fetch('/abt',{
        method:"GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      trans=data.transi;
      setTransi(trans);
      // console.log(data.transi);
      // console.log(Transi);

      if(res.status!== 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err)
      history.push('/login');
    }
  }
  useEffect(() => {
    callAboutpage();
  }, []);
  const trancard = Transi.map((currentv,ind)=>{
    let cl = "fa fa-arrow-down";
    let col = '#1dcc70';
    if(currentv.amount<0){
       cl = "fa fa-arrow-up";
     col = '#ff396f';

    }
    return(
       <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2" key={ind}>
            <div className="dollar-div px-3" style={{background:col}}>
                <div className="round-div"><i className={cl}></i></div>
            </div>
            <div className="d-flex flex-column text-right mr-2"> <span className="current-balance">{currentv.datew}</span> <span className="amount"><span className="dollar-sign">₹</span>{currentv.amount}</span> </div>
        </div>
    )
  });




  return (
    <>
    <div style={{marginTop:"15px",marginBottom:"15px"}}>
<div className="container d-flex justify-content-center ">
    <div className="card">
        <h2 style={{margin:"0",
    fontSsize:"20px",
    lineHeight:"1em",
    paddingRight:"16px"}}>Transaction</h2>
    {/* wthdraw */}
    {trancard}
    {/* /wdthdra */}
    
     </div>
</div>
</div>
    </>
  );
}

export default Transaction;
