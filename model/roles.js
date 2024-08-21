const {model, Schema} = require('mongoose');

const RolesSchema = new Schema({
    Name:{
        type: String,
        required:[true, 'The name is required'],
    },
    State: {
        type: Boolean,
        required:[true, 'The state is required'],
    },
    
})

module.exports=model('Roles', RolesSchema, 'Roles')