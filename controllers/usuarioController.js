const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req,res) => {

    try{
        let usuario;
        // creamos nuestro usuario
        usuario = new Usuario(req.body);
        await Usuario.save();
        res.send(usuario);

    }catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.mostrarUsuarios =async (req,res) =>{

    try{
       const usuarios = await Usuario.find();
      res.json(usuarios)

    }catch(error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.obtenerUsuario = async (req,res) =>{

    try{
        let usuario = await Usuario.findById(req.params.id);
        if (!usuario){
            res.status(404).json({msg: 'el usuario no existe'})
        }
        res.json(usuario);

    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

exports.eliminarUsuario = async (req,res) =>{
    
    try{
        let usuario = await Usuario.findById(req.params.id);
        if (!usuario){
            res.status(404).json({msg: 'el usuario no existe'})
        }
        await Usuario.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'usuario eliminado con exito'});
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

exports.actualizarUsuario = async (req,res) =>{
    
    try{

        const {nombre_u, email, password, salt, direccion_envio, ciudad, depto, pais} = req.body;
        let usuario = await Usuario.findById(req.params.id); 
        if (!usuario){
            res.status(404).json({msg: 'el usuario no existe'})
        }
        usuario.nombre_u = nombre_u;
        usuario.email = email;
        usuario.password = password;
        usuario.salt = salt;
        usuario.direccion_envio = direccion_envio;
        usuario.ciudad = ciudad;
        usuario.depto = depto;
        usuario.pais = pais;
    
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new:true})
        res.json(usuario);

    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}
