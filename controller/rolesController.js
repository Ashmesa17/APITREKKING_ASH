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

const putRoles = async (req, res) => {
    const { id } = req.params; // ID desde la URL
    const { Name, State } = req.body; // Campos a actualizar
    let msg = 'rol updated';
    try {
        await Roles.findByIdAndUpdate(
            id,
            { Name, State }, // Campos a actualizar
            { new: true, runValidators: true } // Devuelve el documento actualizado y valida
        );
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
};


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

