//Debemos exportar las funciones a utilizar
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('Getuser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user );
    });

    test('getUsuario debe retornar un objeto', () => {
        const name = 'Marcos'
        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name);
        expect( testUser ).toEqual( user );
    });
    
    
});
