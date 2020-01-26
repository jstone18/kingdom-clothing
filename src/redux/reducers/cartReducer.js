import { CartActionTypes } from "../types/cartTypes";
import { addItemToCart } from "../../utilities/cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_SHOW_CART:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;