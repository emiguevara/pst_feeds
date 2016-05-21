/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';

import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';
import { AuthProvider } from './login/providers/auth';
import {Login} from './login/login';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ...FORM_PROVIDERS, AuthProvider ],
  directives: [ RouterActive, ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: require('./app.html')
    /*`
    <span router-active>
      <button [routerLink]=" ['Index'] ">
        Index
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['Home'] ">
        Home
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['About'] ">
        About
      </button>
    </span>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `*/
})
//noinspection TypeScriptValidateTypes
@Routes([
  { path: '/',      component: Home },
  { path: '/home',  component: Home },
  { path: '/login', component: Login }
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  //{ path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    private auth: AuthProvider,
    private router: Router,
    public appState: AppState) {
  }
  public logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
