const User = require('../model/user.js');

// Obtener todos los usuarios
const getUser = async (req, res) => {
    const user = await User.find();
    res.json({ user });
};

// Crear un nuevo usuario
const postUser = async (req, res) => {
    let msg = 'User inserted';
    const body = req.body;
    try {
        const user = new User(body);
        await user.save();
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
};

// Actualizar un usuario
const putUser = async (req, res) => {
    const { id } = req.params; // ID desde la URL
    const { Name, Email } = req.body; // Campos a actualizar
    let msg = 'User updated';
    try {
        await User.findByIdAndUpdate(
            id,
            { Name, Email }, // Campos a actualizar
            { new: true, runValidators: true } // Devuelve el documento actualizado y valida
        );
    } catch (error) {
        msg = error.message;
    }
    res.json({ msg });
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    const { id } = req.params;
    let msg = 'User deleted';
    try {
        await User.findByIdAndDelete(id);
    } catch (error) {
        msg = 'There was a problem while deleting';
    }
    res.json({ msg });
};

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
};
