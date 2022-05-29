import React from 'react';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => { 
    // test('Debe de mostrar el mensaje "Hola soy Carlos"',()=>{
        // const saludo="Hola soy Carlos";
        // const {getByText}=render(<PrimeraApp saludo={saludo}/>);
        // expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo="Hola soy Carlos"; 
        const wrapper=shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
     })

     test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo="Hola soy Carlos"; 
        const subtitulo="Soy un subtitulo pequeño";
        const wrapper=shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo} 
            />
        );

        const textoParrafo=wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
 })