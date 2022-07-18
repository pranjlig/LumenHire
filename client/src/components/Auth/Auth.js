import styles from "./Auth.module.css"
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

import AlertContext from "../../context/alert-context";
import AuthContext from "../../context/auth-context";

import { useEffect, useState, useRef, useContext } from "react"; 
import axios from "axios"



const Auth =  (props) => {

    const location = useLocation().pathname;

    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef(null)

    const alertCtx = useContext(AlertContext)
    const authCtx = useContext(AuthContext)

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        if (location === "/signup") {
            if (password.current.value !== confirmPassword.current.value) {
                alertCtx.errorHandler("Passwords did not match.")
                return navigate("/signup")
            }
        }
        const formData = {
            email: email.current.value,
            password: password.current.value,
        }
        const response = await axios.post(            
                `http://localhost:8082${location}`, 
                formData,  
                {headers: {}}
            )
        
        console.log(response)
        const data = response.data
        if (data.type === "error") {
            console.log(3)
            alertCtx.errorHandler(data.message)
            return navigate(location)
        } 
        else {
            if (data.message) {
                alertCtx.successHandler(data.message)
            }
            console.log(4)
            authCtx.loginHandler(data.user)
            return navigate("/")
        }
        
    }


    const signupDiv = <div className={`col-lg-6 ${styles.textDiv}`}> 
        <h1>{props.signup ? "Welcome!" : "Welcome back!"}</h1>
        <p>LumenHire provides you with the best portfolio making experience. Add your skills, projects, work experience, photographs and lot more. Share your portfolio with just a click!</p>
    </div>
    return (
        
        <div className={`row my-5 mx-auto ${styles.mainSection}`}>


            {signupDiv}
            <div className={`col-lg-6 mt-md-2 ${styles.authDiv}`}>
                <h2>{props.title}</h2>
                <form className={styles.group} encType="application/x-www-form-urlencoded" onSubmit={(e) => submitHandler(e)}>

                    
                    <div className={styles.group}>      
                    <input type="email" className={styles.input} ref={email} required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label className={styles.label}>Email</label>
                    </div>

                    <div className={styles.group}>      
                    <input type="password" className={styles.input} ref={password} required />
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label className={styles.label}>Password</label>
                    </div>

                    {location === "/signup" && 
                        <div className={styles.group}>      
                        <input type="password" className={styles.input} required ref={confirmPassword}/>
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Confirm Password</label>
                        </div>
                    }

                    <button className={`${styles.submitButton}`} type="submit">{props.title}</button>
                    {/* <button className={`${styles.submitButton} mt-0`} type="submit">{`${props.title} with Google`}</button> */}
                    {location === "/login" && 
                    <Link to="/signup"  className={`nav-link mt-3`}>Don't have an account? Sign Up.</Link>
                }
                    
                </form>
            </div>
        </div>
    )

}

export default Auth