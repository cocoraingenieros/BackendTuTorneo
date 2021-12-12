const key = 'token';

async function getToken() {
    return localStorage.getItem(key);
}

async function setToken(token) {
    return localStorage.setItem(key, token);
}

async function removeToken() {
    return localStorage.removeItem(key);
}

module.exports = {
    getToken,
    setToken,
    removeToken
}