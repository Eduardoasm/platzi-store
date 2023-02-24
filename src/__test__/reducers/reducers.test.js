import 'jsdom-global/register';
import reducer from "../../reducers/index";
import ProductMock from "../../__mocks__/ProductMock";

describe('reducer', () => {
    test('probando reducer', () => {
        expect(reducer({}, '')).toEqual({});
    });
    test('ADD_TO_CART', () => {
        const initialState = {
            cart: [],
        };
        const payload = ProductMock;
        const actions = {
            type: 'ADD_TO_CART',
            payload,
        };
        const expected = {
            cart: [ProductMock]
        }
        expect(reducer(initialState, actions)).toEqual(expected)
    })
})



