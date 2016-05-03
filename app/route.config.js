System.register(['angular2/router', './home/home', './home/our-team/ambassadors/ambassadors.component', './home/our-team/executive-officers/executive-officers.component', './home/our-team/local-chapters/local-chapters.component', './home/about-us/contact-us/contact-us.component', './home/about-us/mission/mission.component', './home/about-us/partners-sponsors/partners-sponsors.component', './home/about-us/who-we-are/who-we-are.component', './home/our-impact/our-impact.component', './home/get-involved/become-ambassador/become-ambassador.component', './home/get-involved/host-event/host-event.component', './home/get-involved/join-team/join-team.component', './home/get-involved/start-chapter/start-chapter.component', './home/get-involved/wear-warrior/wear-warrior.component', './home/blog/blog.component', './home/events/events.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_1, ambassadors_component_1, executive_officers_component_1, local_chapters_component_1, contact_us_component_1, mission_component_1, partners_sponsors_component_1, who_we_are_component_1, our_impact_component_1, become_ambassador_component_1, host_event_component_1, join_team_component_1, start_chapter_component_1, wear_warrior_component_1, blog_component_1, events_component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (ambassadors_component_1_1) {
                ambassadors_component_1 = ambassadors_component_1_1;
            },
            function (executive_officers_component_1_1) {
                executive_officers_component_1 = executive_officers_component_1_1;
            },
            function (local_chapters_component_1_1) {
                local_chapters_component_1 = local_chapters_component_1_1;
            },
            function (contact_us_component_1_1) {
                contact_us_component_1 = contact_us_component_1_1;
            },
            function (mission_component_1_1) {
                mission_component_1 = mission_component_1_1;
            },
            function (partners_sponsors_component_1_1) {
                partners_sponsors_component_1 = partners_sponsors_component_1_1;
            },
            function (who_we_are_component_1_1) {
                who_we_are_component_1 = who_we_are_component_1_1;
            },
            function (our_impact_component_1_1) {
                our_impact_component_1 = our_impact_component_1_1;
            },
            function (become_ambassador_component_1_1) {
                become_ambassador_component_1 = become_ambassador_component_1_1;
            },
            function (host_event_component_1_1) {
                host_event_component_1 = host_event_component_1_1;
            },
            function (join_team_component_1_1) {
                join_team_component_1 = join_team_component_1_1;
            },
            function (start_chapter_component_1_1) {
                start_chapter_component_1 = start_chapter_component_1_1;
            },
            function (wear_warrior_component_1_1) {
                wear_warrior_component_1 = wear_warrior_component_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (events_component_1_1) {
                events_component_1 = events_component_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: new router_1.Route({
                    path: '/',
                    component: home_1.HomeComponent,
                    name: 'Home',
                    data: { title: 'Home', bannerImage: 'app/img/banner-home.jpg' } }),
                ambassadors: new router_1.Route({
                    path: '/our-team/ambassadors',
                    component: ambassadors_component_1.AmbassadorsComponent,
                    name: 'Ambassadors',
                    data: { title: 'Ambassadors', bannerImage: 'app/img/banner-ambassadors.jpg' } }),
                executiveOfficers: new router_1.Route({
                    path: '/our-team/executive-officers',
                    component: executive_officers_component_1.ExecutiveOfficersComponent,
                    name: 'ExecutiveOfficers',
                    data: { title: 'Executive Officers', bannerImage: 'app/img/banner-executive.jpg' } }),
                localChapters: new router_1.Route({
                    path: '/our-team/local-chapters',
                    component: local_chapters_component_1.LocalChaptersComponent,
                    name: 'LocalChapters',
                    data: { title: 'Local Chapters', bannerImage: 'app/img/banner-chapter.jpg' } }),
                contactUs: new router_1.Route({
                    path: '/about-us/contactUs',
                    component: contact_us_component_1.ContactUsComponent,
                    name: 'ContactUs',
                    data: { title: 'Contact Us', bannerImage: 'app/img/test-banner.jpg' } }),
                mission: new router_1.Route({
                    path: '/about-us/mission',
                    component: mission_component_1.MissionComponent,
                    name: 'Mission',
                    data: { title: 'Mission', bannerImage: 'app/img/test-banner.jpg' } }),
                partnersSponsors: new router_1.Route({
                    path: '/about-us/partners-sponsors',
                    component: partners_sponsors_component_1.PartnersSponsorsComponent,
                    name: 'PartnersSponsors',
                    data: { title: 'Partners and Sponsors', bannerImage: 'app/img/test-banner.jpg' } }),
                whoWeAre: new router_1.Route({
                    path: '/about-us/who-we-are',
                    component: who_we_are_component_1.WhoWeAreComponent,
                    name: 'WhoWeAre',
                    data: { title: 'Who We Are', bannerImage: 'app/img/banner-who.jpg' } }),
                ourImpact: new router_1.Route({
                    path: '/about-us/our-impact',
                    component: our_impact_component_1.OurImpactComponent,
                    name: 'OurImpact',
                    data: { title: 'Our Impact', bannerImage: 'app/img/test-banner.jpg' } }),
                becomeAmbassador: new router_1.Route({
                    path: '/get-involved/become-ambassador',
                    component: become_ambassador_component_1.BecomeAmbassadorComponent,
                    name: 'BecomeAmbassador',
                    data: { title: 'Become an Ambassador', bannerImage: 'app/img/banner-becomeambassador.jpg' } }),
                hostEvent: new router_1.Route({
                    path: '/get-involved/host-event',
                    component: host_event_component_1.HostEventComponent,
                    name: 'HostEvent',
                    data: { title: 'Host an Event', bannerImage: 'app/img/banner-event.jpg' } }),
                joinTeam: new router_1.Route({
                    path: '/get-involved/join-team',
                    component: join_team_component_1.JoinTeamComponent,
                    name: 'JoinTeam',
                    data: { title: 'Join the Team', bannerImage: 'app/img/banner-join.jpg' } }),
                startChapter: new router_1.Route({
                    path: '/get-involved/start-chapter',
                    component: start_chapter_component_1.StartChapterComponent,
                    name: 'StartChapter',
                    data: { title: 'Start a Local Chapter', bannerImage: 'app/img/banner-chapter.jpg' } }),
                wearWarrior: new router_1.Route({
                    path: '/get-involved/wear-warrior',
                    component: wear_warrior_component_1.WearWarriorComponent,
                    name: 'WearWarrior',
                    data: { title: 'Wear the Warrior', bannerImage: 'app/img/test-banner.jpg' } }),
                blog: new router_1.Route({
                    path: '/blog',
                    component: blog_component_1.BlogComponent,
                    name: 'Blog',
                    data: { title: 'Blog', bannerImage: 'app/img/banner-blog.jpg' } }),
                events: new router_1.Route({
                    path: '/events',
                    component: events_component_1.EventsComponent,
                    name: 'Events',
                    data: { title: 'Events', bannerImage: 'app/img/test-banner.jpg' } })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});
//# sourceMappingURL=route.config.js.map