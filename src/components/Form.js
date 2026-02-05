import React from 'react'
import '../App.css'
const Form = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="form-container">
          <label className="label">Name</label>
          <input className="input" type="text" name="name" placeholder="Enter the name" />
          <label className="label">Email</label>
          <input className="input" type="email" name="email" placeholder="Email" />
          <label className="label">Phone number</label>
          <input className="input" type="text" name="phonenumber" placeholder="Phone number" />
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Form