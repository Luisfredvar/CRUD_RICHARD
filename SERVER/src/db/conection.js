import sql  from 'mssql';
import config from '../config';


const dbSettings = {
   user:config.user,
   password:config.password,
   server:config.server,
   database:config.database,
   options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function getConection(){
    try {
        const pool =  sql.connect(dbSettings)
        console.log('BASE DE DATOS CONECTADA')
        return pool;
      
        
    } catch (error) {
        console.log(error)
    }
  
}
export {sql};