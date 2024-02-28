import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../isLoggedSlice";
import { useEffect } from "react";

export const LoginComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables to manage form fields and error messages
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [username, setUname] = useState("");
  const [password, setPwd] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for password toggle

  const handleClick = () => {
    // Check if username and password are not empty
    if (!username.trim() || !password.trim()) {
      setMsg1("Please fill in both username and password.");
      return;
    }

    // Fetch data from the server
    fetch("http://localhost:8080/login?username=" + username + "&password=" + password)
      .then((resp) => {
        // Check for network response
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        // Save data to local storage
        localStorage.setItem("loggedOrganiser", JSON.stringify(data));
        console.log(JSON.stringify(data));

        // Check if data is not null
        if (data != null) {
          let str = data.password;

          // Check if the entered password matches the stored password
          if (str === password) {
            dispatch(login());
            localStorage.setItem("data", JSON.stringify(data));
            console.log("this is data " + JSON.stringify(data));

            // Navigate based on the role_id
            if (data.role_id === 1) navigate("/admin");
            else if (data.role_id === 2) navigate("/attendee");
            else if (data.role_id === 3) navigate("/organizer");
          } else {
            setMsg2("Wrong password!");
          }
        } else {
          setMsg1("Username not found!");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error("Fetch error:", error);
        setMsg2("Wrong username or password. Please try again.");
      });
  };

  // useEffect to add background image
  useEffect(() => {
    // Apply background image to the body
    document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.bVoLkDGsRkqUcF5n1fpW_AHaEK?pid=ImgDet&w=474&h=266&rs=1.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    // Clean up the background image when the component is unmounted
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="full-page">
      {/* Header */}
      

      {/* Form */}
      <div className="row justify-content-center">
        <div className="col-md-4 mt-2">
          <form style={{ background: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px", border: "5px solid black" }}>
            {/* Username input */}
            <div className="row">
              <div>
                <h1 >LOGIN</h1>
              </div>
              <div className="col-md-12 form-group">
                <label htmlFor="name">UserName</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  onChange={(e) => {
                    setUname(e.target.value);
                    setMsg1("");
                  }}
                  required
                />
                <div className="text-danger">{msg1}</div>
              </div>
            </div>

            {/* Password input with toggle button */}
            <div className="row mb-4">
              <div className="col-md-12 form-group">
                <label htmlFor="pwd">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                    id="pwd"
                    className="form-control"
                    onChange={(e) => {
                      setPwd(e.target.value);
                      setMsg2(""); 
                    }}
                    required
                  />
                  <div className="input-group-append">
                    {/* Toggle button for password visibility */}
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div className="text-danger">{msg2}</div>
              </div>
            </div>

            {/* Login, Register, and Forgot Password buttons */}
            <div className="row">
              <div className="col-md-5 form-group">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-primary"
                  onClick={handleClick}
                />
              </div>
              <div className="col-md-3 form-group">
                <Link to="/" className="btn btn-primary">Register</Link>
              </div>
              <div className="col-md-3 form-group">
                <Link to="/" className="btn btn-primary">Forgot Password</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
