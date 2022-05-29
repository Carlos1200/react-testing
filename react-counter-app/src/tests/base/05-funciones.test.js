import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en funciones',() => {
    test('getUser debe retornar un objeto',() => {
        
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user=getUser();
        expect(user).toEqual(userTest);

    });

    test('getUsuarioActivo debe retornar un objeto con el username carlos1200',() => {
        const nombre='carlos1200';

        const user=getUsuarioActivo('carlos1200');

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });
})