var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bicicletaSchema = new Schema({
    code: Number,
    color: String,
    modelo: String,
    ubicacion: {
        type: [Number], index: { type: '2dsphere', sparse: true } // Lista de numeros indexada para datos geograficos
    }
});

bicicletaSchema.statics.createInstance = function (code, color, modelo, ubicacion) {
    return new this({
        code: code,
        color: color,
        modelo: modelo,
        ubicacion: ubicacion
    });
}


bicicletaSchema.methods.toString = function () {
    return 'id: ' + this.id + '| color: ' + this.color + '| modelo: ' + this.modelo;
}

bicicletaSchema.statics.allBicis = function (cb) { //Recibe una funcion de callback
    return this.find({}, cb);
}

bicicletaSchema.statics.add = function (bici, cb) { //Bicicleta y callbak
    this.create(bici, cb); //Metodo propio de mongoose
}

module.exports = mongoose.model('Bicicleta', bicicletaSchema);



// Persistencia local
/*var Bicicleta = function (id, color, modelo, ubicacion) {  //Funciona como constructor para el objeto
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}
//Funciones propias de la "Clase" (funciones que usan los atributos de esta)
Bicicleta.prototype.toString = function () {  //Agrega la funcion toString al objeto a partir del prototipado
    return 'id: ' + this.id + '| color: ' + this.color + '| modelo: ' + this.modelo;
}

//Funciones no propias de la "Clase"
Bicicleta.allBicis = [];    //Agrego la propiedad (atributo) allBicis
Bicicleta.add = function (aBici) {   //Defino un metodo para agregar las bicicletas al arreglo
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function (id) {
    var aBici = Bicicleta.allBicis.find(x => x.id == id);
    if (aBici) {
        return aBici;
    } else {
        throw new Error('No existe una bicicleta con el id ' + id);
    }
}

Bicicleta.removeById = function (id) {
    Bicicleta.findById(id); //Verifica que la bicicleta exista
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == id) {
            Bicicleta.allBicis.splice(i, 1); //Elimina unn elemento en la posicion i de la lista
            break;
        }
    }
}

//Ejemplos
//var bici1 = new Bicicleta(1, 'Rojo', 'Urbana', [3.006990, -76.485660]);
//var bici2 = new Bicicleta(2, 'Blanco', 'Urbana', [3.008104, -76.486390]);

//Bicicleta.add(bici1);
//Bicicleta.add(bici2);


module.exports = Bicicleta; //Es como volver el objeto publico para que todos lo puedan usar

 */