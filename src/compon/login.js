import React, {useState} from 'react';
import {NavLink,useHistory} from "react-router-dom";
  

function Login() {
    const history = useHistory();
  const [user, setUser] = useState({
    email:"",password:""
  });
  let name, value;
  const handleInputes = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }
  const postData = async (e) =>{
        e.preventDefault();
        const{email ,password} = user;

        const res = await fetch('/Au',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email ,password
            })
        })
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("failed");
            console.log(data);
        }else{
            window.alert(data.message);
            console.log(data);
            history.push('/about');
        }


    }
  return (
    <>
        <div className="raw shadow-dreamy domino">
                        <h5 className="card-b">Sign In</h5>
                        <form method="post" >
                            <div className="form-floating mb-3">
                                <input type="email" name="email" className="form-control borad" id="floatingInput" placeholder="name@example.com" 
                                value ={user.email}
                                onChange={handleInputes} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" name="password" className="form-control borad" id="floatingPassword" placeholder="Password" 
                                value ={user.password}
                                onChange={handleInputes} />
                                <label htmlFor="floatingPassword" >Password</label>
                            </div>
    
                            <div className="form-check mb-3">
                                <input className="form-check-input borad" type="checkbox" name="remember" value="" id="rememberPasswordCheck"/>
                                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                    Remember password
                                </label>
                            </div>
                            <div className="d-grid">
                                <button className="btc shadow-dreamy pbo" type="submit" onClick={postData} style={{backgroundColor:"#5957f9"}}>Sign
                                    in</button>
                            </div>
                            <hr className="my-4"/>
                            <div className="d-grid">
                               <NavLink to="/register" style={{width:"100%"}}><button className="btc shadow-dreamy gbut" style={{width: "100%", background: "#1dcc70"}}><i className="fas fa-sign-out-alt"></i>Register</button></NavLink>
                            </div>
                            
                           
                        </form>
    </div>
    </>
  );
}

export default Login;
