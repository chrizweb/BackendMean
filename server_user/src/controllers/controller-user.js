const User = require('../models/User');

const user_controller = {

  createUser:async(req, res) =>{
    const user = new User(req.body);
    await user.save();

    res.send({message:'Usuario Creado'});
  },

  getUsers:async(req, res) =>{
    const users = await User.find();
    res.send(users);
  },

  getUserId:async(req, res) =>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
  },

  updateUser:async(req, res) =>{
    const id = req.params.id;
    const user = req.body;

    await User.findByIdAndUpdate(id, user, {new:true});
    res.send({message:'Usuario Actualizado'});
  },

  deleteUser:async(req, res) =>{
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    res.send({message:'Usuario Eliminado'})
  },

};

module.exports = user_controller;