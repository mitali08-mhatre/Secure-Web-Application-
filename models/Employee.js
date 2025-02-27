const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    phnumber: Number,
    name: String,
    password: String,
    email: String
})

const EmployeeModel = mongoose.model("empDB", EmployeeSchema)
module.exports = EmployeeModel