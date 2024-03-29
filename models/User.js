const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;



const userSchema = new Schema(
    {
        username:{
            type : String,
            required : true,
            unique : true
        },
        email:{
            type : String,
            required : true,
            unique : true
        },
        password:{
            type : String,
            required : true
        },
        role:{
            type : String,
            enum : ['admin','user'],
            default : 'user'
        }
    },{timestamps : true}
);

// Hashing the password before saving it to the database

userSchema.pre('save', async function(next){ //Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.
    const user = this;// this refers to the user object
    if(!user.isModified('password'))return next();

    try{
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }
    catch(err){
        return next(err);
    }
});

// Comparing the password with the hashed password

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}
const  User = mongoose.model('User', userSchema);
module.exports = User;