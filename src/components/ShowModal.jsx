import React, { useState } from "react";

function ShowModal({ handleToggle }) {
    const [userDetails,setUserDetails] = useState({username:"",email:"",phone:"",dob:""});
    const validateInput=()=>{
        
        if(userDetails.phone.length!=10){
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        const dobTime  = new Date(userDetails.dob).getTime();
        const currTime = new Date().getTime();
        if(dobTime>currTime){
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return false;
        }
        return true;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validateInput()){
            return;
        }else{
            handleToggle();
        }
    }
    const handleInputChange=(e)=>{
        setUserDetails((prevDetails)=>{return {...prevDetails,[e.target.name]:e.target.value}});
    }
  return (
    <>
   
      <div className="modal-overlay" onClick={handleToggle}></div>
      <div className="modal">
      <div className="modal-content">
        <h2>Fill Details</h2><br></br>
        <form onSubmit={handleSubmit}>
          <div className="formEl">
            <label htmlFor="username">Username:</label>
            <input required id="username" type="text" name="username" value={userDetails.username} onChange={handleInputChange}/>
          </div>
          <div className="formEl">
            <label htmlFor="email">Email Address:</label>
            <input required id="email" type="email" name="email" value={userDetails.email} onChange={handleInputChange}/>
          </div>
          <div className="formEl">
            <label htmlFor="phone">Phone Number:</label>
            <input required id="phone" pattern="[0-9]*" type="tel" name="phone" value={userDetails.phone} onChange={handleInputChange}/>
          </div>
          <div className="formEl">
            <label htmlFor="dob">Date of Birth:</label>
            <input required id="dob" type="date" name="dob" value={userDetails.dob} onChange={handleInputChange}/>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default ShowModal;
