import { myFirebase } from "../firebase/firebase";

// Actions for LOGIN, LOGOUT, VERIFY

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

// ********** Login **********

// LOGIN REQ
const requestLogin = () => {
    return {
        type : LOGIN_REQUEST
    };
};

// LOGIN SUCCESS
const receiveLogin = () => {
    return {
        type : LOGIN_SUCCESS, 
       
    };
};

// LOGIN FAIL
const loginError = () => {
    return {
        type : LOGIN_FAILURE, 
    };
};

// ********** Logout **********

// LOGOUT REQ
const requestLogout = () => {
    return {
        type : LOGIN_REQUEST
    };
};

// LOGOUT SUCCESS
const receiveLogout = () => {
    return {
        type : LOGOUT_SUCCESS
    };
};

// LOGOUT FAIL 
const logoutError = () => {
    return {
    type : LOGOUT_FAILURE
    };
};

// ********** Verify **********

// VERIFY REQ
const verifyRequest = () => {
    return {
        type : VERIFY_REQUEST
    };
};

// VERIFY SUCCESS
const verifySuccess = () => {
    return {
        type : VERIFY_SUCCESS
    };
};

// User Login Authentication

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
        dispatch(receiveLogin(user));
    })
    .catch(error => {
        console.log("Incorrect Credentials. Try Again")
        dispatch(loginError());
    });
};

// User Logout Authentication

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
    .auth()
    .signOut()
    .then (() => {
        dispatch(receiveLogout());
    })
    .catch(error =>{
        // desired action
        dispatch(logoutError());
    });
};

// User Verification

export const verifyUser = () => dispatch => {
    dispatch(verifyRequest());
    // myFirebase
    // .auth
    // .onAuthStateChanged(user => {
    //     if (user !== null) {
    //         dispatch(receiveLogin());
    //     }
    //     dispatch(verifySuccess());
    // });
};

