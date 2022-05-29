import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en template-tring', () => { 
    test('getSaludo should return hola + name', () => { 
        const nombre='Carlos';
        const saludo=getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
     })

     test('getSaludo should return Hola Carlos without sending argument', () => {
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos');
      })
 })