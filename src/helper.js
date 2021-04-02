import axios from 'axios';
import Vue from 'vue'
const URL_API = process.env.VUE_APP_API_URL;

const http = (method, wsCode, wsRequest) => {
    return axios({
        method: method,
        url: URL_API,
        data: {
            sessionId: '',
            apiKey: '',
            token: '',
            wsCode: wsCode,
            wsRequest: wsRequest
        }
    });
}

const setItemLocalStorage = (key, val) => {
    try {
        localStorage.setItem(key, JSON.stringify(val));
        return true;
    } catch (e) {
        return false;
    }
};

const getItemLocalStorage = (key) => {
    try {
        if (localStorage.getItem(key) !== 'undefined') {
            var object = JSON.parse(localStorage.getItem(key));
            return object;
        }
    } catch (e) {
        return null;
    }
    return null;
};

const removeItemLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (e) {
        return false;
    }
};
Vue.mixin({
    methods: {
        http,
        setItemLocalStorage,
        clearLocalStorage,
        getItemLocalStorage,
        removeItemLocalStorage
    },

})