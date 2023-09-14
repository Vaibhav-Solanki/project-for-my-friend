import React,{ useEffect,useState }  from 'react';
import {NavLink,useHistory} from "react-router-dom";
function Withdraw() {
    var withd ={balance:"10000",wia:600};
const [withdra, setwithdra] = useState(withd);




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
      withd.balance=data.balance;
      setwithdra(withd);
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


const changeG = (e)=>{
  setwithdra({wia:e.target.value,balance:withdra.balance});
  }

  return (
    <>
    <div style={{marginTop:"20px",marginBottom:"15px"}}>
        <div className="container d-flex justify-content-center ">
    <div className="card">
        <h2 style={{margin:"0",
    fontSsize:"20px",
    lineHeight:"1em",
    paddingRight:"16px"}}><center>Withdraw</center></h2>
        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3">
                <div className="round-div"><i className="fas fa-rupee-sign dollar"></i></div>
            </div>
            <div className="d-flex flex-column text-right mr-2"> <span className="current-balance">Current Balance</span> <span className="amount"><span className="dollar-sign">₹</span>{withdra.balance}</span> </div>
        </div>
        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3" style={{background:"#33ff00"}}>
                <div className="round-div"><i className="fas fa-rupee-sign dollar"></i></div>
            </div>
            <div className="d-flex flex-column text-right mr-2"> <span className="current-balance">Withdraw</span> <span className="amount"><span className="dollar-sign">₹</span>{withdra.wia}</span> </div>
        </div>

        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
        <input type="range" min="500" max={withdra.balance} style={{width:"100%",color:"red"}} onChange={changeG} defaultValue={withdra.wia}></input>
        </div>
        
        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <NavLink to="/logout" style={{width:"100%"}}><button className="btc shadow-dreamy gbut" type="submit" style={{width:"100%",background:"#ff396f"}}>
                                    <i className="fa fa-arrow-down"></i> Withdraw
                                </button></NavLink>
        </div>
{/* blank */}
    </div>
</div>
    </div>


    </>
  );
}

export default Withdraw;