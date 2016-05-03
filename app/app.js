System.register(['angular2/core', 'angular2/router', './route.config', './navbar/navbar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, route_config_1, navbar_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (navbar_1_1) {
                navbar_1 = navbar_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.routes = route_config_1.Routes;
                    this.bannerImage = this.initBanner();
                }
                AppComponent.prototype.initBanner = function () {
                    var image = 'app/img/banner-home.jpg';
                    for (var route in this.routes) {
                        if (this.routes[route].path == location.pathname) {
                            image = this.routes[route].data.bannerImage;
                        }
                    }
                    return image;
                };
                AppComponent.prototype.setBanner = function (bannerImage) {
                    console.log(bannerImage);
                    this.bannerImage = bannerImage;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        styleUrls: ['app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_1.Navbar]
                    }),
                    router_1.RouteConfig(route_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map