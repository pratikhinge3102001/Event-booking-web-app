import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AttendeeRegComp() {
  let navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [msg, setMsg] = useState("");

  const validate1 = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "fname":
        var pattern = /^[A-Z]{1}[a-z]+/;
        if (!pattern.test(val)) {
          valid = false;
          error = "First Name not valid!!!";
        }
        break;
      case "lname":
        pattern = /^[A-Z]{1}[a-z]+/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Last Name not valid!!!";
        }
        break;
      case "username":
        pattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Username not valid!!!";
        }
        break;
      case "email":
        pattern = /^[\w.]{4,}@[a-z]{4,}\.[a-z]{2,}/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Email not valid!!!";
        }
        break;
      case "contact":
        pattern = /^[0-9]{10}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Contact not valid!!!";
        }
        break;
      case "password":
        let weakPass = /^[a-zA-z]+$/;
        let avgPass = /(?=.[0-9!@#$%^&*]{1})[a-zA-z]+$/;
        let strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{4,15}$/;

        if (!strongPass.test(val)) {
          if (!avgPass.test(val)) {
            if (val === "") {
              valid = false;
              error = "Please Enter Password!!!";
            } else if (!weakPass.test(val)) {
              valid = false;
              error = "Average Password!!!";
            } else {
              valid = false;
              error = "Weak Password!!!";
            }
          }
        } else {
          error = "Strong Password!!!";
        }
        break;
      case "repassword":
        if (val !== password) {
          valid = false;
          error = "Both Passwords Don't Match. Re-Enter Password!!!";
        }
        break;
      case "aadhar":
        pattern = /^[0-9]{12}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Aadhar not valid!!!";
        }
        break;
      default:
        break;
    }
    return { valid: valid, error: error };
  };

  const handleChange = (key, val) => {
    setMsg("");
    switch (key) {
      case "fname":
        setFname(val);
        break;
      case "lname":
        setLname(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "contact":
        setContact(val);
        break;
      case "username":
        setUsername(val);
        break;
      case "password":
        setPassword(val);
        break;
      case "repassword":
        setRepassword(val);
        break;
      default:
        break;
    }
    updateFormValidity();
  };

  const checkEmail = (val) => {};

  const submitData = (e) => {
    e.preventDefault();
    const reqsOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        login: {
          username: username,
          role_id: 2,
          password: password,
          flag: true,
        },
        attendee: {
          fname: fname,
          lname: lname,
          email: email,
          contact: contact,
          dob: date,
          gender: gender,
          username: username,
          password: password,
        },
      }),
    };

    alert(reqsOption.body);

    fetch("http://localhost:8080/attendee", reqsOption)
      .then((res) => res.json())
      .then((msg) => {
        console.log("Data Inserted Successfully!!!");
        navigate("/login");
      });
  };

  const isFormValid = () => {
    return (
      fname &&
      lname &&
      email &&
      contact &&
      username &&
      password &&
      repassword &&
      date &&
      gender &&
      validate1("fname", fname).valid &&
      validate1("lname", lname).valid &&
      validate1("email", email).valid &&
      validate1("contact", contact).valid &&
      validate1("username", username).valid &&
      validate1("password", password).valid &&
      validate1("repassword", repassword).valid 
    );
  };

  const updateFormValidity = () => {
    setFormValid(isFormValid());
  };

  return (
    <div>
      <div className="container-fluid custom-bg" style={{ height: "40vh" }}>
        <h1 style={{ fontFamily: "Antic Didone", color: "black" }}>ATTENDEES REGISTRATION</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
        <form style={{ border: '5px solid black', padding: '20px' }}>

            <label className="form-label" htmlFor="fname">
              Enter First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={fname}
              onChange={(e) => {
                handleChange("fname", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("fname", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("fname", fname).valid && fname ? "block" : "none" }}>
              <p className="text-danger">{validate1("fname", fname).error}</p>
            </div>

            <label className="form-label" htmlFor="lname">
              Enter Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              value={lname}
              onChange={(e) => {
                handleChange("lname", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("lname", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("lname", lname).valid && lname ? "block" : "none" }}>
              <p className="text-danger">{validate1("lname", lname).error}</p>
            </div>
            <label className="form-label" htmlFor="email">
              Enter Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("email", e.target.value);
                checkEmail(e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("email", email).valid && email ? "block" : "none" }}>
              <p className="text-danger">{validate1("email", email).error}</p>
            </div>
            <div style={{ display: true ? "block" : "none" }}>
              <p className="text-danger">{msg}</p>
            </div>

            <label className="form-label" htmlFor="contact">
              Enter Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => {
                handleChange("contact", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("contact", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("contact", contact).valid && contact ? "block" : "none" }}>
              <p className="text-danger">{validate1("contact", contact).error}</p>
            </div>

            <label className="form-label" htmlFor="add">
              Enter Date of Birth
            </label>
            <input type="date" className="form-control" id="dob" name="dob" onChange={(e) => setDate(e.target.value)} required />
            <br />
            <label className="form-check">Select Your Gender</label>
            <input type="radio" name="gen" value={"m"} className="form-check-input" onChange={(e) => setGender(e.target.value)} required />Male &nbsp;
            <input type="radio" name="gen" value={"f"} className="form-check-input" onChange={(e) => setGender(e.target.value)} required />
            Female &nbsp;
            <input type="radio" name="gen" value={"o"} className="form-check-input" onChange={(e) => setGender(e.target.value)} required />
            Other <br />
            <br />

            <label className="form-label" htmlFor="uname">
              Enter Username
            </label>
            <input
              type="text"
              className="form-control"
              id="uname"
              name="username"
              value={username}
              onChange={(e) => {
                handleChange("username", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("username", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("username", username).valid && username ? "block" : "none" }}>
              <p className="text-danger">{validate1("username", username).error}</p>
            </div>

            <label className="form-label" htmlFor="pass">
              Enter Your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="pass"
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("password", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("password", password).valid && password ? "block" : "none" }}>
              <p className="text-danger">{validate1("password", password).error}</p>
            </div>
            <p className="text-success" style={{ display: validate1("password", password).valid ? "block" : "none" }}>
              {validate1("password", password).error}
            </p>

            <label className="form-label" htmlFor="rpass">
              Re-Enter Your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="rpass"
              onChange={(e) => {
                handleChange("repassword", e.target.value);
              }}
              onBlur={(e) => {
                handleChange("repassword", e.target.value);
              }}
              required
            />
            <br />
            <div style={{ display: !validate1("repassword", repassword).valid && repassword ? "block" : "none" }}>
              <p className="text-danger">{validate1("repassword", repassword).error}</p>
            </div>
            <br />
            <p style={{ float: "right" }}>
              already have an account? <Link to="/login" style={{color: "black"}}>login</Link>
            </p>
            <br />
            <input
              type="button"
              value="Register"
              className="btn btn-primary"
              onClick={(e) => {
                submitData(e);
              }}
              disabled={!formValid}
            />
            <input type="reset" value="Reset" className="btn btn-danger" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AttendeeRegComp;
