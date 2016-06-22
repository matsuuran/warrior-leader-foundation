import {Component} from '@angular/core';
import { NgForm }  from '@angular/common';

@Component({
	selector: 'start-chapter',
	template: require('./start-chapter.html'),
  styles: [require('./start-chapter.css')]
})


export class StartChapterComponent { 
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