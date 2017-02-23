import {StorageKeys} from './storage-keys';
import {AuthConfig} from 'angular2-jwt';
import {Headers} from '@angular/http';

export class ApiConfig {
  static AUTH_PATH = 'https://api-dev.opoint.com/auth/get-token/';
  static PATH = 'https://api-dev.opoint.com/play/';

  static HEADERS = (() => {
    const requestHeaders = new Headers();
    requestHeaders.append('Content-Type', 'application/json');
    requestHeaders.append('Accept', 'application/json');

    return {headers: requestHeaders};
  })();

  static AUTH_FACTORY () {
    return new AuthConfig({
      headerPrefix: 'JWT ',
      tokenName: StorageKeys.TOKEN
    });
  }
}
