
describe('Pruebas en el archivo demo.test.js', () => { 
    
    
    test('Deben de ser iguales los string', () => { 
    //1. inicialización
    const mensaje = 'Hola mundo';

    //2. estimulo
    const mensaje2 = `Hola mundo`;

    //3. Observación
    expect(mensaje).toBe(mensaje2);
 })
})