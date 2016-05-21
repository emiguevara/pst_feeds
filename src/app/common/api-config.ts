import {StorageKeys} from './storage-keys';
import {AuthConfig} from 'angular2-jwt';

export class ApiConfig {
  static AUTH_PATH = '//api-emiliano.opoint.com/auth/get-token/';
  static PATH = '//api-emiliano.opoint.com/play/';

  static AUTH_FACTORY () {
    return new AuthConfig({
      headerPrefix: 'JWT ',
      tokenName: StorageKeys.TOKEN
    });
  }
}
