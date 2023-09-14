import React, {useState} from 'react';
import {NavLink,useHistory} from "react-router-dom";
function Register() {
    const history = useHistory();
  const [user, setUser] = useState({
    name:"",email:"",phone:"",activation:"" ,password:"",cpassword:""
  });
  let name, value;
  const handleInputes = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }
  const postData = async (e) =>{
        e.preventDefault();
        const{name ,email ,phone ,activation ,password ,cpassword} = user;

        const res = await fetch('/regi',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name ,email ,phone ,activation ,password ,cpassword
            })
        })
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("failed");
            console.log(data);
        }else{
            window.alert("Payment Done Id Has been Activated");
            console.log(data);
            // payNow();
            history.push('/Pricing');
        }


    }
  return (<><div className="raw shadow-dreamy domino">
                        <h5 className="card-b">Register</h5>
                        <form method="post">
                            <div className="form-floating mb-3">
                                <input type="text" name="name" className="form-control borad" id="name" placeholder="john doe" 
                                value ={user.name}
                                onChange={handleInputes} />
                                <label htmlFor="name">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control borad" id="email" placeholder="name@example.com" 
                                value ={user.email}
                                onChange={handleInputes} />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" name="phone" className="form-control borad" id="phone" placeholder="name@example.com" 
                                value ={user.phone}
                                onChange={handleInputes} />
                                <label htmlFor="phone">Mobile no.</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="activation" className="form-control borad" id="activation" placeholder="Ca2596" 
                                value ={user.activation}
                                onChange={handleInputes} />
                                <label htmlFor="activation">Activation Code</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name="password" className="form-control borad" id="floatingPassword" placeholder="Password" 
                                value ={user.password}
                                onChange={handleInputes} />
                                <label htmlFor="floatingPassword" >New Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name="cpassword" className="form-control borad" id="cPassword" placeholder="Password" 
                                value ={user.cpassword}
                                onChange={handleInputes} />
                                <label htmlFor="cPassword" >conform password</label>
                            </div>
                            <div className="d-grid">
                                <button className="btc shadow-dreamy pbo" type="submit" onClick={postData} style={{backgroundColor:"#1dcc70"}}>Register</button>
                            </div>
                            <hr className="my-4"/>
                            <div className="d-grid">
                                <NavLink to="/login" style={{width:"100%"}}><button className="btc shadow-dreamy gbut" style={{width: "100%", background: "#5957f9"}}><i className="fas fa-sign-out-alt"></i>login</button></NavLink>
                            </div>
                        </form>
    </div>



    </>
  );
}

export default Register;
