const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    Name:{
        type: String,
        required:[true, 'The name is required'],
    },
    Email: {
        type: String,
        required:[true, 'The email is required'],
        minlength: [10, 'Min 10 characters']
    },
    
})

module.exports=model('User', UserSchema, 'User')