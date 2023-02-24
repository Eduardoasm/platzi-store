import 'jsdom-global/register';
import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";
import { create } from 'react-test-renderer';

describe('<Footer/>', () => {
  const footer = mount(< Footer />)

  test('Renderizado de el Footer', () => {
    expect(footer.length).toEqual(1)
  });

  test('Renderizado de el Footer title', () => {
    expect(footer.find('.Footer-title').text())
    .toEqual('Platzi Store')
  })
});

describe('Footer Snapshot', () => {
  test('comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

