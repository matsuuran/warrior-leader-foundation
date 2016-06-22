import {Component} from '@angular/core';
import { NgForm }  from '@angular/common';


@Component({
	selector: 'partners-sponsors',
	template: require('./partners-sponsors.html'),
  styles: [require('./partners-sponsors.css')],
})


export class PartnersSponsorsComponent { 
  submitted = false;

   model = {
     name: "",
     email: "",
     organization: "",
     comments: ""
   }

   onSubmit() {
     this.submitted = true;
     console.log(this.model);
   }


}