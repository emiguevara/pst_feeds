import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthProvider} from './providers/auth';

@Component({
  selector: 'div',
  template: require('./login.html'),
  styles: [ require('./login.css') ],
  providers: [AuthProvider]
})

export class Login {

  constructor(private router: Router, private authProvider: AuthProvider) {
  }

  ngOnInit() {
    console.log('hello Auth component');
  }

  ngOnDestroy() {
    console.log('bye bye Auth component');
  }

  login(event, username: string, password: string) {
    console.log('Login attempt for: ' + username);
    this.authProvider.authenticate(username, password).then((result) => {
      console.log('Login result: ', result);
      if (result) {
        this.router.navigate(['home']);
      }
    });
  }

}
