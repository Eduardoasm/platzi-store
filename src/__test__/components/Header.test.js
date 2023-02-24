import 'jsdom-global/register';
import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../../components/Header"
import ProviderMock from '../../__mocks__/ProviderMock';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('renderizando componente header', () => {
      const header = shallow(
          <ProviderMock>
              <Header/>
          </ProviderMock>
      );
      expect(header.length).toEqual(1)
  });
  test('render del titulo', () => {
      const header = mount(
          <ProviderMock>
              <Header/>
          </ProviderMock>
      );
      expect(header.find('.Header-title').text()).toEqual('Platzi Store')
  });
});

describe('Header Snapshot', () => {
    test('probando el snapshot header', () => {
        const header = create(
        <ProviderMock>
            <Header />
        </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});