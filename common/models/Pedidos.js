module.exports = function(Pedidos) {

Pedidos.beforeRemote('prototype.devolver',function (ctx,pedido,next){
console.info(ctx.args);
pedido.detallesPedidos({
where:{IdProducto: ctx.arg.query.IdProducto}
},function(err,filasDetalles){
console.log(filasDetalles); 
next();
});
});
/**
* Permite devolder un producto comprado anteriormente
* @param {number} IdProducto El producto a devolver
* @param {number} Cantidad La cantidad de producto a devolver
* @param {Function(Error, object)} callback
*/

Pedidos.prototype.devolver = function(IdProducto, Cantidad, callback) {
var pedido = thisno;
var data = {
porductosId: IdProducto,
Cantidad: Cantidad
};

pedido.devoluciones.create(data,
function(err,devolucion){
callback(null, devolucion);
});

};


};