/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppState } from './app.service';

import { Home } from './home';
import { AmbassadorsComponent } from './ambassadors';
import { ExecutiveOfficersComponent } from './executive-officers';
import { LocalChaptersComponent } from './local-chapters';
import { WhoWeAreComponent } from './who-we-are';
import { PartnersSponsorsComponent } from './partners-sponsors';
import { ContactUsComponent } from './contact-us';
import { OurImpactComponent } from './our-impact';
import { JoinTeamComponent }  from './join-team';
import { StartChapterComponent } from './start-chapter';
import { BecomeAmbassadorComponent } from './become-ambassador';
import { HostEventComponent } from './host-event';
import { WearWarriorComponent } from './wear-warrior';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ROUTER_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES ],
  styles: [require('./app.css')],
  template: require('./app.html')
})

@RouteConfig([
{ path: '/',                                component: Home,                         name: 'Home'},   
{ path: '/our-team/ambassadors',            component: AmbassadorsComponent,         name: 'Ambassadors'}, 
{ path: '/our-team/executive-officers',     component: ExecutiveOfficersComponent,   name: 'ExecutiveOfficers'},   
{ path: '/our-team/local-chapters',         component: LocalChaptersComponent,       name: 'LocalChapters'}, 
{ path: '/about-us/contact-us',             component: ContactUsComponent,           name: 'ContactUs'},  
{ path: '/about-us/partners-sponsors',      component: PartnersSponsorsComponent,    name: 'PartnersSponsors'},   
{ path: '/about-us/who-we-are',             component: WhoWeAreComponent,            name: 'WhoWeAre'}, 
{ path: '/our-impact',                      component: OurImpactComponent,           name: 'OurImpact'}, 
{ path: '/get-involved/become-ambassador',  component: BecomeAmbassadorComponent,    name: 'BecomeAmbassador'},   
{ path: '/get-involved/host-event',         component: HostEventComponent,           name: 'HostEvent'},   
{ path: '/get-involved/join-team',          component: JoinTeamComponent,            name: 'JoinTeam'},   
{ path: '/get-involved/start-chapter',      component: StartChapterComponent,        name: 'StartChapter'},   
{ path: '/get-involved/wear-warrior',       component: WearWarriorComponent,         name: 'WearWarrior'}, 
{ path: '/blog',                            component: Home,             name: 'Blog'},   
{ path: '/events',                          component: Home,           name: 'Events'}
])

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'TWLF';


  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}