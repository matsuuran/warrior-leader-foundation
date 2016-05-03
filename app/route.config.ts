import {Route} from 'angular2/router';

import {HomeComponent} from './home/home';

import {AmbassadorsComponent} 			from './home/our-team/ambassadors/ambassadors.component';
import {ExecutiveOfficersComponent} from './home/our-team/executive-officers/executive-officers.component';
import {LocalChaptersComponent} 		from './home/our-team/local-chapters/local-chapters.component';

import {ContactUsComponent} 				from './home/about-us/contact-us/contact-us.component';
import {MissionComponent} 					from './home/about-us/mission/mission.component';
import {PartnersSponsorsComponent} 	from './home/about-us/partners-sponsors/partners-sponsors.component';
import {WhoWeAreComponent} 					from './home/about-us/who-we-are/who-we-are.component';

import {OurImpactComponent} from './home/our-impact/our-impact.component';

import {BecomeAmbassadorComponent} 	from './home/get-involved/become-ambassador/become-ambassador.component';
import {HostEventComponent} 				from './home/get-involved/host-event/host-event.component';
import {JoinTeamComponent} 					from './home/get-involved/join-team/join-team.component';
import {StartChapterComponent} 			from './home/get-involved/start-chapter/start-chapter.component';
import {WearWarriorComponent} 			from './home/get-involved/wear-warrior/wear-warrior.component';

import {BlogComponent} 		from './home/blog/blog.component';
import {EventsComponent} 	from './home/events/events.component';


export var Routes = {
  home: new Route({
  	path: '/', 
    component: HomeComponent, 
  	name: 'Home', 
  	data: { title: 'Home', bannerImage: 'app/img/banner-home.jpg' } }),
  
  ambassadors: new Route({ 
  	path: '/our-team/ambassadors', 
  	component: AmbassadorsComponent, 
  	name: 'Ambassadors', 
  	data: { title: 'Ambassadors', bannerImage: 'app/img/banner-ambassadors.jpg' } }),

  executiveOfficers: new Route({ 
  	path: '/our-team/executive-officers', 
  	component: ExecutiveOfficersComponent, 
  	name: 'ExecutiveOfficers', 
  	data: { title: 'Executive Officers', bannerImage: 'app/img/banner-executive.jpg' } }),
  
  localChapters: new Route({ 
  	path: '/our-team/local-chapters', 
  	component: LocalChaptersComponent, 
  	name: 'LocalChapters', 
  	data: { title: 'Local Chapters', bannerImage: 'app/img/banner-chapter.jpg' } }),

  contactUs: new Route({ 
  	path: '/about-us/contactUs', 
  	component: ContactUsComponent, 
  	name: 'ContactUs', 
  	data: { title: 'Contact Us', bannerImage: 'app/img/test-banner.jpg' } }),

  mission: new Route({ 
  	path: '/about-us/mission', 
  	component: MissionComponent, 
  	name: 'Mission', 
  	data: { title: 'Mission', bannerImage: 'app/img/test-banner.jpg' } }),
  
  partnersSponsors: new Route({ 
  	path: '/about-us/partners-sponsors', 
  	component: PartnersSponsorsComponent, 
  	name: 'PartnersSponsors', 
  	data: { title: 'Partners and Sponsors', bannerImage: 'app/img/test-banner.jpg' } }),
  
  whoWeAre: new Route({ 
  	path: '/about-us/who-we-are', 
  	component: WhoWeAreComponent, 
  	name: 'WhoWeAre', 
  	data: { title: 'Who We Are', bannerImage: 'app/img/banner-who.jpg' } }),

  ourImpact: new Route({ 
  	path: '/about-us/our-impact', 
  	component: OurImpactComponent, 
  	name: 'OurImpact', 
  	data: { title: 'Our Impact', bannerImage: 'app/img/test-banner.jpg' } }),

  becomeAmbassador: new Route({ 
  	path: '/get-involved/become-ambassador', 
  	component: BecomeAmbassadorComponent, 
  	name: 'BecomeAmbassador', 
  	data: { title: 'Become an Ambassador', bannerImage: 'app/img/banner-becomeambassador.jpg' } }),
  
  hostEvent: new Route({ 
  	path: '/get-involved/host-event', 
  	component: HostEventComponent, 
  	name: 'HostEvent', 
  	data: { title: 'Host an Event', bannerImage: 'app/img/banner-event.jpg' } }),
  
  joinTeam: new Route({ 
  	path: '/get-involved/join-team', 
  	component: JoinTeamComponent, 
  	name: 'JoinTeam', 
  	data: { title: 'Join the Team', bannerImage: 'app/img/banner-join.jpg' } }),
  
  startChapter: new Route({ 
  	path: '/get-involved/start-chapter', 
  	component: StartChapterComponent, 
  	name: 'StartChapter', 
  	data: { title: 'Start a Local Chapter', bannerImage: 'app/img/banner-chapter.jpg' } }),
  
  wearWarrior: new Route({ 
  	path: '/get-involved/wear-warrior', 
  	component: WearWarriorComponent, 
  	name: 'WearWarrior', 
  	data: { title: 'Wear the Warrior', bannerImage: 'app/img/test-banner.jpg' } }),

  blog: new Route({ 
  	path: '/blog', 
  	component: BlogComponent, 
  	name: 'Blog', 
  	data: { title: 'Blog', bannerImage: 'app/img/banner-blog.jpg' } }),
  
  events: new Route({ 
  	path: '/events', 
  	component: EventsComponent, 
  	name: 'Events', 
  	data: { title: 'Events', bannerImage: 'app/img/test-banner.jpg' } })
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);