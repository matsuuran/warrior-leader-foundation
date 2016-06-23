import { Component, Directive } from '@angular/core';

@Directive({
  selector: '[collapse]',
  host: {
    '[style.height]': 'height'
  }
})

export class Collapse {
  private height:string;
  
  @Input('isCollapsed') isCollapsed:boolean;

  toggle() {
    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.height = 'auto';
    }
    else {
      this.isCollapsed = true;
      this.height = '0';
    }
  }

}