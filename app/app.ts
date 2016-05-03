import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

import {Navbar} from './navbar/navbar';


@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	styleUrls: ['app/app.css'],
	directives: [ROUTER_DIRECTIVES, Navbar]
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
	public routes;
	public bannerImage;

  constructor() {
    this.routes = Routes;
    this.bannerImage = this.initBanner()
  }

  initBanner(){
		var image = 'app/img/banner-home.jpg';

  	for (var route in this.routes) {
			if(this.routes[route].path == location.pathname){
				image = this.routes[route].data.bannerImage;
			}
  	}

		return image;
  }

  setBanner(bannerImage){
		console.log(bannerImage)
		this.bannerImage = bannerImage;
  }
}
