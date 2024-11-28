const User= require('../model/user.js');

const getUser = async (req, res)=> {
    const user = await User.find()

    res.json({user})
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

const putUser  = async (req, res) => {
    const { Name, Email } = req.body;
    let msg = 'User  updated';
    
    // Validar que Name y Email estén presentes
    if (!Name || !Email) {
        return res.status(400).json({ msg: 'Name and Email are required' });
    }

    try {
        const updatedUser  = await User.findOneAndUpdate(
            { Name: Name },
            { Name: Name, Email: Email },
            { new: true } // Devuelve el documento actualizado
        );

        // Verificar si se encontró y actualizó el usuario
        if (!updatedUser ) {
            msg = 'User  not found';
            return res.status(404).json({ msg });
        }
    } catch (error) {
        msg = error.message; // Cambia a error.message para obtener un mensaje más claro
        return res.status(500).json({ msg });
    }

    res.json({ msg });
};

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

