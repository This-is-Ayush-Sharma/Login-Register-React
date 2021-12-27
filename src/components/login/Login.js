import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './styles.css';
import { setCookie } from '../cookerMgr/set';
import { useHistory } from 'react-router-dom';

export default function Login() {

    let history = new useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const Register  = () =>{
        history.push("/Register")
    }
    const eml = (e) => {
        setemail(e.target.value);
    }
    const pass = (e) => {
        setpassword(e.target.value);
    }
    const run = async () => {
        await axios.post('https://authbackend.onrender.com/api/login',{
            email:email,
            password:password
        })
        .then(response =>{
            // console.log(response);
            if(response.data.status === 'ok')
            {
                setCookie("accesstoken",response.data.token,1);
                history.push("/Home");
            }
            else
            {
                alert(response.data.error);
            }
        })
    }
    const responseLogin = async(res) => {
        await axios.post('https://authbackend.onrender.com/googleLogin',{
            tokenId:res.tokenId
        })
        .then(response =>{
            // console.log(response);
            if(response.data.status === 'ok')
            {
                setCookie("accesstoken",response.data.token,1);
                history.push("/Home");
            }
            else
            {
                alert(response.data.error);
            }
        })
    }
    const responseFailed = (res) => {
        alert("login failed..")
    }
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" onChange={eml} className="login__input" placeholder="User name / Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" onChange={pass} className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit" onClick={run}>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <button className="button login__submit" onClick={Register}>
                            <span className="button__text">Register</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <GoogleLogin
                                clientId="905154661025-11n1te9q1s70ohnnsqgcavpjhjcbatkc.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={responseLogin}
                                onFailure={responseFailed}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}
