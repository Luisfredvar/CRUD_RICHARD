

import { getConection, sql, queries } from "../db";


//metodos que hacen el crud de roles

//listar roles

export const getRoles =  async (req, res) =>{

        try {
            const pool = await getConection();
            const result = await pool.request().query(queries.getAllRoles);
            console.log(result); 
            res.json(result.recordset);
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};

//Agregar un rol

export const createRole =  async (req, res) =>{
    const {idRol, nombreRol} = req.body;
    console.log(idRol, nombreRol);
     try {
           
    const pool = await getConection();

    const result = await pool.request()
    .input('nombreRol', sql.VarChar, nombreRol)
    .query(queries.createNewRol)
    console.log(result.recordset)
    res.json('New Rol')
     } catch (error) {
        res.status(500);
        res.send(error.message);
     }
    
};

//Obtener un rol por idRol

export const getRole = async (req, res) =>{
    const { idRol } = req.params;
    const pool = await getConection();
   const result = await pool.request()
   .input('idRol', idRol)
   .query(queries.getRolById)
   console.log(result.recordset)
   res.json(result.recordset);
};

//Eliminar un rol por idRol

export const deleteRol = async (req, res) =>{
    const { idRol } = req.params;
    const pool = await getConection();
   const result = await pool.request()
   .input('idRol', idRol)
   .query(queries.deleteRol)
   
   res.send(result);
   console.log(result)
};

//Contar la cantidad total de roles

export const countRoles =  async (req, res) =>{

    try {
        const pool = await getConection();
        const result = await pool.request()
        .query(queries.countTotalRoles);
        console.log(result); 
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Actualizar Rol por idRol

export const updateRoleById = async (req, res) =>{
    const {nombreRol} = req.body;
    const {idRol} = req.params;

    if(nombreRol===null){
        return res.status(400).json({message: 'Bad request: Please fill all fields.'})
    }

    const pool = await getConection();
    
    const result = await pool.request()
    .input('nombreRol', sql.VarChar, nombreRol)
    .input('idRol', sql.Int, idRol)
    .query(queries.updateRoles)
    console.log(result.output)
    res.json({idRol, nombreRol})
};

//metodo para listar todos los productos

export const getProducts =  async (req, res) =>{

    try {
        const pool = await getConection();
        const result = await pool.request().query(queries.getAllProducts);
        console.log(result); 
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    finally{
        

    }
};

const closeConection = ()=>{
    sql.close();
}
//Obtener productos para mostrar en Frond-End
export const GetProducts =  async (req, res) =>{

    try {
        const pool = await getConection();
        const result = await pool.request().query(queries.GetAllProducts);
        console.log(result); 
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
};



export const GetProduct =  async (req, res) =>{

const {idProducto} = req.params;
const pool = await getConection();
const result = await pool.request()
.input('idProducto', sql.Int, idProducto)
.query(queries.getProductById);
console.log(result)
res.json(result.recordset)
   
};


export const agregarProducto =  async (req, res) =>{
    const {idProducto, nombreProducto, descripcionProducto, stock, idUsuario, cantComentarios, cantlikes, instruccionesReceta, fotoProducto, precioProducto} = req.body;
    console.log(idProducto, nombreProducto, descripcionProducto, stock, idUsuario, cantComentarios, cantlikes, instruccionesReceta, fotoProducto, precioProducto);
     try {
           
    const pool = await getConection();

    const result = await pool.request()
    .input('nombreProducto', sql.VarChar, nombreProducto)
    .input('descripcionProducto', sql.VarChar, descripcionProducto)
    .input('stock', sql.Int, stock)
    .input('idUsuario', sql.Int, idUsuario)
    .input('cantComentarios', sql.Int, cantComentarios)
    .input('cantlikes', sql.Int, cantlikes)
    .input('instruccionesReceta', sql.VarChar, instruccionesReceta)
    .input('fotoProducto', sql.VarChar, fotoProducto)
    .input('precioProducto', sql.Int, precioProducto)
    .query(queries.sendProduct)
    console.log(result.recordset)
    res.json('New Producto')
     } catch (error) {
        res.status(500);
        res.send(error.message);
     }
    
};

export const deleteProduct = async (req, res) =>{
    const { idProducto } = req.params;
    const pool = await getConection();
   const result = await pool.request()
   .input('idProducto', idProducto)
   .query(queries.deleteProductById)
   
   res.json('Producto eliminado');
   console.log(result)
};

export const updateProductById = async (req, res) =>{
    const {nombreProducto, descripcionProducto, stock, idUsuario, cantComentarios, cantlikes, instruccionesReceta, precioProducto} = req.body;
    const {idProducto} = req.params;

    if(nombreProducto===null || descripcionProducto===null || stock===null || idUsuario===null || cantComentarios===null || cantlikes===null || instruccionesReceta===null || precioProducto===null ){
        return res.status(400).json({message: 'Bad request: Please fill all fields.'})
    };

    const pool = await getConection();
    
    const result = await pool.request()
    .input('nombreProducto', sql.VarChar, nombreProducto)
    .input('descripcionProducto', sql.VarChar, descripcionProducto)
    .input('stock', sql.Int, stock)
    .input('idUsuario', sql.Int, idUsuario)
    .input('cantComentarios', sql.Int, cantComentarios)
    .input('cantlikes', sql.Int, cantlikes)
    .input('instruccionesReceta', sql.VarChar, instruccionesReceta)
    .input('precioProducto', sql.Int, precioProducto)
    .input('idProducto', sql.Int, idProducto)
    .query(queries.updateProduct)
    console.log(result.output, 'Updated Product')
    res.json('Updated Product');
};



//metodo para listar todos los usuarios

export const getUser =  async (req, res) =>{
    try {
        const pool = await getConection();
        const result = await pool.request()
        .query(queries.getUser);
        console.log(result); 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


};

export const createPublicProduct = async (req, res)=>{
      
    const {idPublicado, idProducto} = req.body;
    console.log(idPublicado, idProducto)

    try {
        const pool = await getConection();
        const result = await pool.request()
        .input('idProducto', sql.Int, idProducto)
        .query(queries.InsertPublicProduct);
        console.log(result.recordset); 
        res.json('New Public Product');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const getPublicProducts =  async (req, res) =>{

    try {
        const pool = await getConection();
        const result = await pool.request().query(queries.getPuclicProducts);
        console.log(result); 
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deletePublicProduct = async (req, res) =>{
const {idProducto} = req.params;

try {
    const pool = getConection();
    const result = await pool.request()
    .input('idProducto', sql.Int, idProducto)
    .query(queries.deletePublicProductById)
    console.log(result)
    res.json('Producto ya no es visible para los clientes')
} catch (error) {
    res.status(500);
    res.send(error.message);
    
}
}



