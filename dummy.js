import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrganiserRegComp() {
  let navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [aadhar, setAadhar] = useState("");
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
      case "aadhar":
        setAadhar(val);
        break;
      default:
        break;
    }
    updateFormValidity();
  };

  const checkEmail = (val) => {};

  const submitData = (e) => {
    e.preventDefault();
    const reqOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        login: {
          username: username,
          role_id: 3,
          password: password,
          flag: false,
        },
        organiser: {
          first_name: fname,
          last_name: lname,
          email: email,
          contact: contact,
          dob: date,
          gender: gender,
          username: username,
          password: password,
          aadharno: aadhar,
        },
      }),
    };

    alert(reqOption.body);

    fetch("http://localhost:8080/organiser", reqOption)
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
      aadhar &&
      date &&
      gender &&
      validate1("fname", fname).valid &&
      validate1("lname", lname).valid &&
      validate1("email", email).valid &&
      validate1("contact", contact).valid &&
      validate1("username", username).valid &&
      validate1("password", password).valid &&
      validate1("repassword", repassword).valid &&
      validate1("aadhar", aadhar).valid
    );
  };

  // Update form validity whenever inputs change
  const updateFormValidity = () => {
    setFormValid(isFormValid());
  };

  
}

export default OrganiserRegComp;

