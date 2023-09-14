import React, { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase-configure";


export const Register = (props) => {
const[user, setUser]= useState({
   name:'',
   email:'',
   password:''

})
const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
        ...user,[name]:value

    })

} 

const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        createUserWithEmailAndPassword(auth,user.email,user.password,).then((res)=>{console.log(res)}).catch((res)=>{console.log(res)});
    }
    return (
        <div className="auth-form-container">
            <h2>Sign up</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={user.name} name="name" onChange={handleChange} id="name" placeholder="full Name" />
            {/* <label htmlFor="email">Mobile number</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="number" placeholder="number" id="number" name="number" /> */}
            <label htmlFor="number">Email</label>
            <input value={user.email} onChange={handleChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={user.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" >Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}