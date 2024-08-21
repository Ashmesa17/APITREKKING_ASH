const User= require('../model/user.js');

const getUser = async (req, res)=> {
    const user = await User.find()

    res.json(user)
}


const postUser= async (req,res)=>{
    let msg='User inserted'
    const body= req.body
    try{
        const user = new User (body)
        await user.save() 
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const putUser=async (req,res)=>{
    const {Name, Email} = req.body
    let msg= ' user update'
    try{
        await User.findOneAndUpdate({Name:Name}, {Email:Email})
    }catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const deleteUser = async (req, res) =>{
    id= req.params.id
    let msg= 'User deleted'
    try{
        await  User.findOneAndDelete({_id:id})

    }catch (error) {
        msg= 'There was a problem while deleting '
    }
    res.json({msg:msg})
} 

module.exports= {
    getUser,
    postUser,
    putUser,
    deleteUser
}

