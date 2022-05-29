import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => { 
    const title = 'Titulo del GIF';
    const url = 'https://media.giphy.com/media/CsdYnIX8x44pdUeLBd/giphy-downsized-large.gif';
    
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('Se debe mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
     })

    test('debe de tener un parrafo con el title', () => { 
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener una imagen con la url y alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn');
    })
 })