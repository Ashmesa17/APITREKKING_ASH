const express = require('express'); 
const dbConnect = require('../database/config');
require('../database/config.js')
const {getUser, postUser, putUser, deleteUser}= require ('../controller/userController.js')
const {getRoles, postRoles, putRoles, deleteRoles}= require ('../controller/rolesController.js')



class Server{
    constructor(){
        this.app = express();
        this.pathUser='/api/user';
        this.pathRoles='/api/roles';
        this.route()
        this.dbConnection();
        this.listen();
    }   

    
    async dbConnection() {
        await dbConnect()
    }
    
    route (){
        this.app.use(express.json());
        this.app.use ( cors() );

        this.app.get(this.pathUser, getUser)
        this.app.post(this.pathUser, postUser)
        this.app.put(this.pathUser, putUser)
        this.app.delete(this.pathUser+'/:id', deleteUser)

        this.app.get(this.pathRoles, getRoles)
        this.app.post(this.pathRoles, postRoles)
        this.app.put(this.pathRoles, putRoles)
        this.app.delete(this.pathRoles+'/:id', deleteRoles)

    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`);  
        })
    }
}

module.exports =  Server 