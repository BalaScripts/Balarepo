import React, {useState} from 'react';
import {toast} from 'react-toastify';
import { userList} from './userlist';
import "./login.css";
import { useNavigate } from 'react-router-dom';


const Login = ({IslogIn}) => {

    const [errorMessages, setErrorMessages] = useState({uname: "", pass: ""});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      const {uname, pass} = event.target.elements;

      const unameValue = uname.value.trim();
      const passValue = pass.value.trim();

      if (!unameValue || !passValue) {
        setErrorMessages({
            uname: unameValue ? "" : "Please enter a username",
            pass: passValue ? "" : "Please enter a Password"
        });
        return;
      }

      const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
      };

      const userData = userList.find((user) => user.userName === unameValue);

      console.log("username", unameValue);
      console.log("Data", userData);

      if (userData) {
        if (userData.password !== passValue) {
           setErrorMessages({uname: "", pass: errors.pass});
        } else {
           sessionStorage.setItem("name", userData.userName); //store name in session 
           IslogIn((current) => !current); 
           console.log()
           navigate("/Home"); //redirect
           toast.success("User is sucessfully logged in");
        }
      } else {
        setErrorMessages({uname: errors.uname, pass: ""})
      }
    }


    return(
        <div className='app'>
            <div className='login-form'>
                <div className='title'>
                  Sign In
                </div>
                <div className='form'>
                  <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label>Username</label>
                        <input type = "text" name="uname" />
                        <div className='error'>{errorMessages.uname}</div>
                    </div>
                    <div className='input-container'>
                        <label>Password</label>
                        <input type = "password" name="pass" />
                        <div className='error'>{errorMessages.pass}</div>
                    </div>
                    <div className='button-container'>  
                        <input type="submit" />
                    </div>
                  </form>
                </div>

            </div>

        </div>
    )
}

export default Login;