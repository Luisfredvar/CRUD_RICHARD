export const queries={
    getAllRoles:"SELECT  *FROM roles",
    createNewRol:'INSERT INTO roles(nombreRol) VALUES (@nombreRol)',
    getRolById:'SELECT *FROM roles WHERE idRol=@idRol',
    deleteRol:'DELETE FROM roles WHERE idRol=@idRol',
    countTotalRoles:'SELECT COUNT(*) as totalProducts FROM roles',
    updateRoles:'UPDATE roles SET nombreRol=@nombreRol WHERE idRol=@idRol',
    getAllProducts:"SELECT idProducto, nombreProducto, stock, idUsuario, cantComentarios, cantlikes, instruccionesReceta FROM productos",
    getUser:"select nombreUsuario, idUsuario from usuarios where correo='alfred09@gmail.com'  and passw='alejo12'",
    GetAllProducts:"SELECT idProducto, nombreProducto, descripcionProducto, precioProducto, fotoProducto FROM productos",
    sendProduct:"INSERT INTO productos(nombreProducto, descripcionProducto, stock, idUsuario, cantComentarios, cantlikes, instruccionesReceta, precioProducto)VALUES (@nombreProducto, @descripcionProducto, @stock, @idUsuario, @cantComentarios, @cantlikes, @instruccionesReceta, @precioProducto)",
    getProductById:'SELECT *FROM productos WHERE idProducto=@idProducto',
    deleteProductById:'DELETE FROM productos WHERE idProducto=@idProducto',
    updateProduct:'UPDATE productos SET nombreProducto=@nombreProducto, descripcionProducto=@descripcionProducto, stock=@stock, idUsuario=@idUsuario, cantComentarios=@cantComentarios, cantlikes=@cantlikes, instruccionesReceta=@instruccionesReceta, precioProducto=@precioProducto WHERE idProducto=@idProducto',
    InsertPublicProduct:"INSERT INTO productoPublicado(idProducto)VALUES(@idProducto)",
    getPuclicProducts:'SELECT productoPublicado.idPublicado, productos.idProducto, productos.nombreProducto, productos.descripcionProducto, productos.precioProducto, .productos.fotoProducto, usuarios.idUsuario, usuarios.nombreUsuario, usuarios.apellidoUsuario, usuarios.telefono, usuarios.correo FROM productoPublicado INNER JOIN productos ON productoPublicado.idProducto=productos.idProducto INNER JOIN usuarios ON productos.idUsuario=usuarios.idUsuario;',
    getPuclicProductsById:'SELECT productoPublicado.idPublicado, productos.idProducto, productos.nombreProducto, productos.descripcionProducto, productos.precioProducto, .productos.fotoProducto, usuarios.idUsuario, usuarios.nombreUsuario, usuarios.apellidoUsuario, usuarios.telefono, usuarios.correo FROM productoPublicado INNER JOIN productos ON productoPublicado.idProducto=productos.idProducto INNER JOIN usuarios ON productos.idUsuario=usuarios.idUsuario WHERE productos.idProducto=@idProducto',
    deletePublicProductById:'DELETE FROM productoPublicado WHERE idProducto=@idProducto',


};
// export const queriesProducts={
//     getAllProducts:"SELECT *FROM productos",
//     createNewProduct:'INSERT INTO roles(nombreRol) VALUES (@nombreRol)',
//     getProductById:'SELECT *FROM roles WHERE idRol=@idRol',
//     deleteProduct:'DELETE FROM roles WHERE idRol=@idRol',
//     countTotalProduct:'SELECT COUNT(*) as totalProducts FROM roles',
//     updateProduct:'UPDATE roles SET nombreRol=@nombreRol WHERE idRol=@idRol'
// }