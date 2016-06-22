import {Component} from '@angular/core';


@Component({
	selector: 'become-ambassador',
	template: require('./become-ambassador.html'),
  styles: [require('./become-ambassador.css')]
})


export class BecomeAmbassadorComponent { 
  submitted = false;
   model = {
     name: "",
     email: "",
     location: "",
     experience: "",
     jobExperience: "",
     reason: ""
   }

   onSubmit() {
     this.submitted = true;
     console.log(this.model);
   }
}