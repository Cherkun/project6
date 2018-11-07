import * as types from "../constants/UserActionTypes"
import axios from 'axios'

const tryRegister = () => {
    return {
        type: types.TRY_REGISTER_USER,
    }
}

const registerUser = (user, success) => {
    return {
        type: types.REGISTER_USER,
        user,
        success
    }
}

const getCart = (cart, cartfriends) => {
    return {
        type: types.GET_CART,
        cart,
        cartfriends
    }
}
export const register=(form)=> {
    return function (dispatch) {
        dispatch(tryRegister());
        const token = localStorage.getItem("token");
        var data = new FormData();
        data.append( "form-data", JSON.stringify( {form} )  );
        if(token!== null)
        data.append( "token",token);
        return axios.post(`http://newcopy/register_user.php`, data)
            .then(response => {
                let {token, user, success} = response.data;
                localStorage.setItem("token", token);
                dispatch(registerUser(user, success))
            })
            .catch(error =>
                console.log(error)
            );

    }
}

export function verify() {
    return function (dispatch) {
        const token = localStorage.getItem("token");
        dispatch(tryRegister());
        return axios.get("http://newcopy/verify.php",{params: {token}})
            .then((response) => {
                let { success, user, cart, cartfriends } = response.data;
                dispatch(registerUser(user, success));
                dispatch(getCart(cart, cartfriends));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: types.LOGOUT_USER
    }
}
export const login=(form)=> {
    return function (dispatch) {
        dispatch(tryRegister());
        const token = localStorage.getItem("token");
        var data = new FormData();
        data.append( "form-data", JSON.stringify( {form} )  );
        if(token!== null)
            data.append( "token",token);
        return axios.post(`http://newcopy/login_user.php`, data)
            .then(response => {
                let {token, user, success} = response.data;
                localStorage.setItem("token", token);
                dispatch(registerUser(user, success))
            })
            .catch(error =>
                console.log(error)
            );

    }
}