import Cookies from 'js-cookie'

const TokenKey = 'login-info'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(user_info) {
    return Cookies.set(TokenKey, user_info)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}