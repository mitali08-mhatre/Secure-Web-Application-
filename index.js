const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/employee");

app.post('/Login',(req,res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res) => {

    EmployeeModel.create(req.body)
    .then(empDB => res.json(empDB))
    .catch(err => res.json(err))
    
})

app.listen(5173, () => {
    console.log("server is running")
})