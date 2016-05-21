import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import {Http} from '@angular/http';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import {AuthProvider} from '../login/providers/auth';
import { Router } from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public http: Http,
    private auth: AuthProvider,
    private router: Router,
    public appState: AppState,
    public title: Title) {

  }
  public logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
    if (this.auth.isAuthenticated()) {
      console.log('hello `Home` component: YES AUTH');
      this.router.navigate(['home']);
    } else {
      console.log('hello `Home` component: NO AUTH');
      this.router.navigate(['login']);
    }
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
