"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("hammerjs");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var user_service_1 = require("./Service/user.service");
var user_pipe_1 = require("./Filter/user.pipe");
var search_component_1 = require("./Shared/search.component");
var errorhandler_1 = require("./Shared/errorhandler");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var manageuser_component_1 = require("./components/manageuser.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatCardModule,
                material_1.MatNativeDateModule,
                material_1.MatButtonModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatIconModule, material_2.MatFormFieldModule,
                material_2.MatInputModule, material_2.MatRadioModule,
                material_2.MatDatepickerModule, material_2.MatAutocompleteModule,
                material_3.MatSelectModule, material_3.MatDialogModule, material_3.MatMenuModule, material_3.MatProgressBarModule],
            declarations: [app_component_1.AppComponent, user_component_1.UserComponent, home_component_1.HomeComponent, user_pipe_1.UserFilterPipe, search_component_1.SearchComponent, manageuser_component_1.ManageUser],
            providers: [{ provide: core_1.ErrorHandler, useClass: errorhandler_1.default }, { provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [manageuser_component_1.ManageUser]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map