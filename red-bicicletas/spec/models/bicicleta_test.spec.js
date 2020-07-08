var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');

describe('Testing bicicletas', function () {
    beforeEach(function (done) {
        var mongodb = 'mongodb://localhost/testdb';
        mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Error conectando a la base de datos'));
        db.once('open', function () {
            console.log('Conexion exitosa');
            done();
        });
    });

    afterEach(function (done) {
        Bicicleta.deleteMany({}, function (err, success) {
            if (err) console.log(err);
            done();
        });
    });

    describe('Bicicleta.createInstance', () => {
        it('Crea una instancia de bicicleta', () => {
            var bici = Bicicleta.createInstance(1, 'Verde', 'Urbana', [-34.5, -54.1]);

            expect(bici.code).toBe(1);
            expect(bici.color).toBe("Verde");
        });
    });

    describe('Bicicleta.allBicis', () => {
        it('Comienza vacia', (done) => {
            Bicicleta.allBicis(function (err, bicis) {
                expect(bicis.length).toBe(0);
                done();
            });
        });
    });

    describe('Bicicleta.add', () => {
        it('Agrega una bicicleta', (done) => {
            var bici = new Bicicleta({ cde: 1, color: 'Negra', modelo: 'Urbana' });
            Bicicleta.add(bici, function (err, newBici) {
                if (err) console.log(err);
                Bicicleta.allBicis(function (err, bicis) {
                    expect(bicis.length).toBe(1);
                    expect(bicis[0].code).toEqual(bici.Code);
                    done();
                });
            });
        });
    });
});


// Tests locales

// Ejecuta esta accion antes de cada test, reduciendo el codigo repetitivo
/* beforeEach(() => { Bicicleta.allBicis = []; });
// Recibe una descripcion y la funcion que ejecuta la prueba
describe('Bicicleta.allBicis', () => {
    it('Comienza vacio', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('Se agrega una bicicleta', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var bici = new Bicicleta(1, 'Rojo', 'Urbana', [3.006990, -76.485660]);
        Bicicleta.add(bici);
        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(bici);
    });
});

describe('Bicicleta.findById', () => {
    it('Retorna una bicicleta con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var bici = new Bicicleta(1, 'Rojo', 'Urbana', [3.006990, -76.485660]);
        Bicicleta.add(bici);
        expect(Bicicleta.findById(1).id).toBe(1);
    })
});

describe('Bicicleta.removeById', () => {
    it('Borra el elemento con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var bici = new Bicicleta(1, 'Rojo', 'Urbana', [3.006990, -76.485660]);
        Bicicleta.add(bici);
        Bicicleta.removeById(1);
        expect(Bicicleta.allBicis.length).toBe(0);
    });
}); */