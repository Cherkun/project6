import {
    REGISTER_USER,
    TRY_REGISTER_USER,
    LOGOUT_USER
} from '../constants/UserActionTypes'

const initialState = {
    isRequest: false,
    isHasUser: false,
    user: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case TRY_REGISTER_USER:
            return {
                ...state,
                isRequest: true
            }
        case REGISTER_USER:
            return {
                ...state,
                isRequest: false,
                isHasUser: action.success,
                user: action.user
            }
        case LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default user
