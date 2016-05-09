import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'home',
	 directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
	templateUrl: 'app/home/home.html',
	styleUrls: ['app/home/home.css'],
})

export class HomeComponent {
	public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];

  public constructor() {
  	this.slides.push({
  		image: `app/img/banner-home.jpg`,
  	});

  	this.slides.push({
			image: `app/img/banner-chapter.jpg`,
  	});

		this.slides.push({
			image: `app/img/banner-blog.jpg`,
		});
  }
}
