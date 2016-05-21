import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {StorageKeys} from '../../common/storage-keys';
import {authHelper} from '../../common/auth-helper';
import {ApiConfig} from '../../common/api-config';

@Injectable()
export class AuthProvider {
  constructor(private http: Http) {
  }

  public authenticate(username, password) {
    const promise = new Promise((resolve) => {
      const requestHeaders = new Headers();
      requestHeaders.append('Content-Type', 'application/json');
      requestHeaders.append('Accept', 'application/json');

      this.http.post(
        ApiConfig.AUTH_PATH,
        JSON.stringify({username: username, password: password}),
        {headers: requestHeaders}
      )
      .map(response => response.json())
      .subscribe(
        data => {
          localStorage.setItem(StorageKeys.TOKEN, data.token);
          localStorage.setItem(StorageKeys.USERNAME, username);
        },
        error => {
          console.error(error);
          resolve(false);
        },
        () => resolve(true));
    });

    return promise;
  }

  public isAuthenticated() {
    return authHelper.isAuthenticated();
  }

  public logout() {
    return authHelper.logout();
  }

  public getUsername() {
    return authHelper.getUser().username;
  }

  public getUser() {
    return authHelper.getUser();
  }

}
