import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    
    test('debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar el input',()=>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion onSubmit',()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalledTimes(0);
    })

    test('debe de llamar el setCategories y limpiar la caja de texto',()=>{
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
 })