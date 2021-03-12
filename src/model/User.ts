import firebase from 'firebase';
import UserInfo = firebase.UserInfo;


export interface LoginForm {
    email: string,
    password: string
}

export interface SignupForm extends LoginForm {
    displayName: string
}


export interface User extends UserInfo {
}
