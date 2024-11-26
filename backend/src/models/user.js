import mongoose, { model } from "mongoose";


const schemaUser = new mongoose.Schema({
    name: String,
    email: String,
    compras: {type: Number, default : 1}
})

export default  model('User',schemaUser,'users')

