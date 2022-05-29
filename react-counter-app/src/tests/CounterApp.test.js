import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp/>', () => {

    let wrapper=shallow(<CounterApp />);
    beforeEach(() => {
        wrapper=shallow(<CounterApp />);
    }); 

    test('debe mostrar <CounterApp/> correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100',()=>{
        const valorDefecto=100;
        const wrapper=shallow(<CounterApp value={valorDefecto} />);
        expect(wrapper.find('h2').text()).toBe(valorDefecto.toString());
    });

    test('Debe de incrementar con el boton +1', () => { 
        wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
     })

     test('Debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
     })

     test('Debe de resetear con el boton Reset', () => {
        const valorDefecto=105;
        const wrapper=shallow(<CounterApp value={valorDefecto} />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe(valorDefecto.toString());
     })
 })