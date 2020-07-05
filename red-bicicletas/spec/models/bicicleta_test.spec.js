var Bicicleta = require('../../models/bicicleta');

// Ejecuta esta accion antes de cada test, reduciendo el codigo repetitivo
beforeEach(() => { Bicicleta.allBicis = []; });
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
});