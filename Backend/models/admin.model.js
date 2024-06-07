const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminSchema = new schema({
    username :{
        type:String,
        required:true,
        minlength:3
    },
    department :{
        type:String,
        required:true,
        minlength:3
    },
    email :{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    password :{
        type:String,
        required:true,
        minlength:8
    },},{
        timestamps:true
    
});

const Admin = mongoose.model('admin',adminSchema);

module.exports = Admin;
