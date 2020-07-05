var Bicicleta = require('../../models/bicicleta');
var server = require('../../bin/www'); // Solo importarlo ya interpreta todo el archivo, levanta el servidor y al terminar la ejecucion muere ese hilo, apagando el server
var request = require('request');

beforeEach(() => { console.log('testeando...') });
beforeEach(() => { Bicicleta.allBicis = [] });
describe('Bicicleta API', () => {
    describe('GET Bicicletas /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);
            var bici = new Bicicleta(1, 'Rojo', 'Urbana', [3.006990, -76.485660]);
            Bicicleta.add(bici);
            // Recibe la peticion y el test
            request.get('http://localhost:5000/api/bicicletas', function (error, response, body) {
                expect(response.statusCode).toBe(200);
            });
        });
    });


    describe('POST Bicicletas /create', () => {
        it('Status 200', (done) => { // Es como el await en procesos asincronos, es necesario para indicar al test el momento en que el request ha terminado y poder terminar el teest
            var headers = { 'content-type': 'application/json' };
            var bici = '{ "id": "1", "color": "rojo", "modelo": "urbana", "lat": "-34", "lng": "-54" }';   // JSON en String
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/create',
                body: bici
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(1).color).toBe('rojo');
                done();
            });
        });
    });
});