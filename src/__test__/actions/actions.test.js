import 'jsdom-global/register';
import actions from "../../actions/index";
import ProductMock from "../../__mocks__/ProductMock";

describe('actions', () => {
    test('probando actions', () => {
        const payload = ProductMock;
        const expected = {
            type: 'ADD_TO_CART',
            payload,
        };
        expect(actions.addToCart(payload)).toEqual(expected)
    })
})
