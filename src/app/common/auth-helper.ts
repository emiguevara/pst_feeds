import {StorageKeys} from './storage-keys';
import {JwtHelper} from 'angular2-jwt';


export const authHelper = {
  isAuthenticated: () => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    const notExpired = token && !(new JwtHelper().isTokenExpired(token));

    const loggedIn = token && notExpired;
    if (!loggedIn) {
      console.log('User is not logged in');
    }
    return loggedIn;
  },

  logout: () => {
    localStorage.removeItem(StorageKeys.USERNAME);
    localStorage.removeItem(StorageKeys.TOKEN);
    console.log('User was logged out');
  },

  getUser: () => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    return new JwtHelper().decodeToken(token);
  }
};
