import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import friends from './friendlist'
import user from './user'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    cart,
    friends,
    form: reduxFormReducer,
    user
})


const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)

export const getTotalCount = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getQuantity(state, id),
            0
        )

