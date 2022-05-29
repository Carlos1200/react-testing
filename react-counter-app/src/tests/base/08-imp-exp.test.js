import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => { 
    
    test('Debe de retornar un heroe por ID', () => {
        const id=1;
        const heroe = getHeroeById(id);
        
        const heroeData=heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeData);
    })
    
    test('Debe de retornar undefined si heroe no existe', () => {
        const id=10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    })

    test('Debe retornar un arreglo con los heroes de DC',()=>{
        const owner='DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesDCData = heroes.filter(heroe => heroe.owner === owner);
        expect(heroesDC).toEqual(heroesDCData);
    })

    test('Debe retornar un arreglo con heroes de Marvel con length de 2',()=>{
        const owner='Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        expect(heroesMarvel.length).toBe(2);
    })
 })