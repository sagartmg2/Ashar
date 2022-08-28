import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            //  filter our selected product.
            // copy rest of the products 
            const { payload } = action
            let quantity = state.items.find(el => el._id == payload._id)?.quantity || 0;

            state.items = [
                ...state.items.filter(el => el._id != payload._id),
                {
                    name: payload.name,
                    _id: payload._id,
                    price: payload.price,
                    quantity: 1 + quantity
                }
            ]

            localStorage.setItem("cart_items", JSON.stringify(state.items))

        },
        setCartItems: ((state, action) => {
            state.items = action.payload;
            localStorage.setItem("cart_items", JSON.stringify(action.payload))
        })
        // logout: (state) => {
        //     state.is_logged_in = false
        // },
        // setUser: (state, action) => {
        //     state.user = action.payload
        // },
    },
})


export const delaySetCartItems = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(setCartItems([{ "test": true }]))
        }, 3000)
    }
}

// Action creators are generated for each case reducer function
export const { addToCart, setCartItems } = cartSlice.actions

export default cartSlice.reducer