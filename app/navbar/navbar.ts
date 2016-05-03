import {Component} from 'angular2/core';
import {Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from '../route.config';

@Component({
  selector: 'navbar',
  properties: ['routes'],
  templateUrl: 'app/navbar/navbar.html',
  styleUrls: ['app/navbar/navbar.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  public routes;

  constructor() {
    this.routes = Routes;
    console.log(this.routes)
  }
}