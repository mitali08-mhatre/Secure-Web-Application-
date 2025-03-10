import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup(){
    const {phnumber, setPhNumber} =useState()
    const {name, setName} =useState()
    const {password, setPassword} =useState()
    const {email, setEmail} =useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5173/register',{phnumber, name, password, email})
        .then(result => {console.log(result)
            navigate('/Login')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Mobile Number</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Mobile Number"
                            autoComplete="off"
                            name="phnumber"
                            className="form-control rounded-0"
                            onChange={(e) => setPhNumber(e.target.value)}
                            value={phnumber}
                         />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Full Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                         />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                         />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                         />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0"> Register</button>
                </form>

                <p>Already have an Account</p>

                <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-direction-none">
                    Login
                </Link>

            </div>
        </div>
    );
}

export default Signup