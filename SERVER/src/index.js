import app from "./app";
import  './db/conection';
import { getConection } from "./db/conection";

app.listen(app.get('port'));


    try {
        console.log('SERVER RUNNING', app.get('port')); 
    } catch (error) {
       console.log('No hay conexion con el servidor')
    }

    getConection();

