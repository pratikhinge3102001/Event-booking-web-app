import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const UpdatePassComp=()=>{
    const[pass,setPass]=useState("");
    const[pass1,setPass1]=useState("");
    const[pass2,setPass2]=useState("");
    const[msg,setMsg]=useState("");
    const[msg2,setMsg2]=useState("");
    const navigate= useNavigate();
   
    const checkPass=()=>{
        console.log(localStorage.getItem("data"));
        const data1= localStorage.getItem("data");
        console.log(JSON.parse(data1))
        console.log("this is local storeage data"+data1);
        const email= JSON.parse(data1)[0].email;
        console.log(email)
        fetch("http://localhost:8500/checkUser?email="+email)
        .then(resp => resp.json())
        .then(data=>{
            console.log(data)
            if(pass!= data[0].password)
        {
            setMsg("Password doesn't match!!");
        }
        else{
            setMsg("");
        }
        })
        
    }

    const checkequal = ()=>{
        if(pass1!=pass2)
        {
            setMsg2("enter same password!!");
        }
        else{
            setMsg2("");
        }
    }

    const setPassinDb=()=>{
        const data= localStorage.getItem("data");
        const email= JSON.parse(data)[0].email;
        fetch("http://localhost:8500/setpass?pass="+pass1+"&email="+email)
        .then(resp => resp.text())
        .then(data=>{
            console.log(data);
        })
        navigate('/profile');
    }
    return(
        <div>
            <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
                
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="name">Old-Password</label>
                        <input type="password" id="pwd" className="form-control " onChange={(e)=>{setPass(e.target.value)}} onBlur={checkPass}/>
                        <div className="text-danger">{msg}</div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12 form-group">
                        <label for="pwd">New-Password</label>
                        <input type="password" id="pwdn" className="form-control " onChange={(e)=>{setPass1(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12 form-group">
                        <label for="pwd">reEnter New-Password</label>
                        <input type="password" id="pwdr" className="form-control " onChange={(e)=>{setPass2(e.target.value)}} onBlur={checkequal}/>
                        <div className="text-danger">{msg2}</div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-5 form-group">
                        <button className="btn btn-primary" onClick={setPassinDb}>Click</button>
                        </div>
                    </div>
                
          </div>
        </div>
        </div>
    )
}

