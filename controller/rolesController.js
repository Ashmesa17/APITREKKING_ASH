const Roles = require('../model/roles.js');

const getRoles = async (req, res)=> {
    const roles = await Roles.find()

    res.json({roles})
}


const postRoles= async (req,res)=>{
    let msg='Rol inserted'
    const body= req.body
    try{
        const roles = new Roles (body)
        await roles.save() 
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const putRoles=async (req,res)=>{
    const {Name, State} = req.body
    let msg= ' Rol update'
    try{
        await Roles.findOneAndUpdate({id:id}, {State:State, Name:Name})
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const deleteRoles = async (req, res) =>{
    let msg= 'Rol deleted'
    id= req.params.id
    try{
        await Roles.findOneAndDelete({_id:id})

    }catch (error) {
        msg= 'There was a problem while deleting '
    }
    res.json({msg:msg})
} 

module.exports= {
    getRoles,
    postRoles,
    putRoles,
    deleteRoles
}

