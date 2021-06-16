import React from 'react';
import { useState } from 'react/cjs/react.production.min';

const UserInput = () =>{/*
    const[usersubmit,setsubmit] = useState({
       username: "",
       email:"",
       mobile:"",
       city:""
    });
    const [username, setusername] = useState('');
    const handleInpute = () =>{

    const [username,setUsername] = useState('abhiekhek');
*/
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    
    
    const handleFirstNameInputChange = (e) => {
        setFirstName(e.target.value);
      };
    const handleCityInputChange = (e) => {
        setCity(e.target.value);
      };
    const handleEmailInputChange = (e) => {
        setEmail(e.target.value);
        console.log(phone);
      };
    
    return(
        <>
        <div>
           <div>
               <label >Full Name </label>
               <input 
                id="first-name"
                className="form-fild" 
                type="text" 
                name="firstName" 
                placeholder="Enter Your Name"
                value={firstName}
                onChange={(e) => handleFirstNameInputChange(e)}
               />
               
           </div>
           <div>
               <label >email</label>
               <input 
                id="email"
                className="form-fild" 
                type="text" 
                name="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmailInputChange(e)}
               />
               
           </div>
           <div>
               <label >City</label>
               <input 
                id="city"
                className="form-fild" 
                type="text" 
                name="city" 
                placeholder="City"
                value={city}
                onChange={(e) => handleCityInputChange(e)}
               />
               
           </div>
           <div>
               <label >Mobile</label>
               <phoneinput 
                country="IN"
                value={phone}
                style={{padding:'10px',wodth:'40vh'}}
                onChange={setPhone}
               />
               
           </div>
           <button type="submit">Submit</button>
        </div>
        </>
    )
}
export default UserInput