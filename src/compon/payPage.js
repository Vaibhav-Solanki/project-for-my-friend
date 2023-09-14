import React from 'react';
function Paypage() {
  return (
    <><div style={{marginTop:"1%",position:"absolute",width:"100%"}}>
      <div className="card" style={{height:"100%"}}>
       <form className="" action="/paynow" method="post">
              <div className="form-group">
                <input className="form-control" type="text" name="name"  required placeholder="Enter your Name"/>
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email"  required placeholder="Enter your Email"/>
              </div>
              <div className="form-group">
                <input className="form-control" type="number" name="phone"  required placeholder="Enter your mobile number"/>
              </div>              
              <div className="form-group">
                <button className="btn form-control btn-primary">Proceed to Pay</button>
              </div>
            </form>
            </div>
            </div>
    </>
  );
}

export default Paypage;