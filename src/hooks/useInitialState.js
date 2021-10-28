import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,      //indica que traiga la info de state
            cart: [...state.cart, payload],   //...state.cart ,trae lo que ya existe
        });
    };
    
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    };

    return{
        state,
        addToCart,
        removeFromCart
    };
};

export default useInitialState;