import {Injectable, Inject} from '@angular/core';

const MousetrapRow = require('mousetrap');

@Injectable()
export class Mousetrap {
  private _mousetrap;

  constructor(@Inject(MousetrapRow) mousetrap) {
    this._mousetrap = mousetrap;
  }

  public bind(...params) {
    this._mousetrap.bind(...params);
  }

  public unbind(...params) {
    this._mousetrap.unbind(...params);
  }

  public trigger(...params) {
    this._mousetrap.trigger(...params);
  }

  public stopCallback(...params) {
    this._mousetrap.stopCallback(...params);
  }

  public reset(...params) {
    this._mousetrap.reset(...params);
  }

  public handleKey(...params) {
    this._mousetrap.handleKey(...params);
  }
}
