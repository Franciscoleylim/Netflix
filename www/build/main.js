webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscarClientePage = /** @class */ (function () {
    function BuscarClientePage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.getDatos();
        this.recuperar();
    }
    BuscarClientePage.prototype.getDatos = function () {
        var _this = this;
        this.service.getBuscarCliente().subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        this.service.getBuscarCliente().subscribe(function (data) { return _this.items1 = data; }, function (err) { return console.log(err); });
    };
    BuscarClientePage.prototype.recuperar = function () {
        this.items1 = this.items;
    };
    BuscarClientePage.prototype.getItems = function (ev) {
        this.recuperar();
        // Reset items back to all of the items
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items1 = this.items1.filter(function (items1) {
                return (items1.numero.indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
        }
    };
    BuscarClientePage.prototype.irDetalles = function (nombreR) {
        this.navCtrl.push('DetallesPage', { nombreR: nombreR });
        console.log('Envie: ' + nombreR);
    };
    BuscarClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar-cliente',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\buscar-cliente\buscar-cliente.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n        <button ion-button menuToggle >\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Buscar Cliente</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar style="background-color: #222"\n\n    placeholder ="Buscar"\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="getItems($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let user of items1" (click)="irDetalles(user.numero)">\n\n      {{user.numero}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\buscar-cliente\buscar-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], BuscarClientePage);
    return BuscarClientePage;
}());

//# sourceMappingURL=buscar-cliente.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscarCuentaPage = /** @class */ (function () {
    function BuscarCuentaPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.getDatos();
        this.recuperar();
    }
    BuscarCuentaPage.prototype.getDatos = function () {
        var _this = this;
        this.service.getBuscarCliente().subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        this.service.getBuscarCliente().subscribe(function (data) { return _this.items1 = data; }, function (err) { return console.log(err); });
    };
    BuscarCuentaPage.prototype.recuperar = function () {
        this.items1 = this.items;
    };
    BuscarCuentaPage.prototype.getItems = function (ev) {
        this.recuperar();
        // Reset items back to all of the items
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items1 = this.items1.filter(function (items1) {
                return (items1.correo.indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
        }
    };
    BuscarCuentaPage.prototype.irDetalles = function (nombreR) {
        this.navCtrl.push('DetallesPage', { nombreR: nombreR });
        console.log('Envie: ' + nombreR);
    };
    BuscarCuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar-cuenta',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\buscar-cuenta\buscar-cuenta.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n        <button ion-button menuToggle >\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Buscar Cuenta</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar style="background-color: #222"\n\n    placeholder ="Buscar"\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="getItems($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let user of items1" (click)="irDetalles(user.numero)">\n\n        {{user.correo}}\n\n      </ion-item>\n\n    </ion-list>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\buscar-cuenta\buscar-cuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], BuscarCuentaPage);
    return BuscarCuentaPage;
}());

//# sourceMappingURL=buscar-cuenta.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsappAutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WhatsappAutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsappAutoPage = /** @class */ (function () {
    function WhatsappAutoPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.ano = new Date().getFullYear();
        this.dia = new Date().getDate();
        this.mes = new Date().getMonth();
        this.mes1 = this.mes + 1;
        this.Fecha = this.ano + "-" + this.mes1 + "-" + this.dia;
        this.event = {
            timeEnds: this.Fecha
        };
        this.esHoy();
    }
    WhatsappAutoPage.prototype.esHoy = function () {
        var _this = this;
        this.service.getHoy(this.event.timeEnds).subscribe(function (data) {
            return _this.aver(data);
        }, function (err) { return console.log(err); });
    };
    WhatsappAutoPage.prototype.irDetalles = function (nombreR) {
        this.navCtrl.push('DetallesPage', { nombreR: nombreR });
    };
    WhatsappAutoPage.prototype.aver = function (dato) {
        this.users = dato;
        this.users.reverse();
    };
    WhatsappAutoPage.prototype.siguiente = function () {
        this.users.reverse();
        this.users.pop();
    };
    WhatsappAutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatsapp-auto',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\whatsapp-auto\whatsapp-auto.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle >\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n          <ion-title style="height: 40px;">whatsappAuto</ion-title>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <ion-datetime style="color: white" displayFormat="DD MMM YYYY" max="2030" min="2018" [(ngModel)]="event.timeEnds"></ion-datetime>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center padding>\n\n    <button  ion-button (click)="esHoy()">Actualizar</button>\n\n  <button  ion-button (click)="siguiente()">Siguiente</button>\n\n\n\n    <ion-list inset >\n\n        <ion-item *ngFor="let user of users" (click)="irDetalles(user.numero)" >\n\n              <h2>{{user.numero}}</h2>\n\n              <h3>{{user.correo}}</h3>\n\n              <p>Paquete: {{user.meses}} Mes {{user.dispositivos}} Disp  Vence: {{user.vence}}</p>\n\n        </ion-item>\n\n       \n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\whatsapp-auto\whatsapp-auto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], WhatsappAutoPage);
    return WhatsappAutoPage;
}());

//# sourceMappingURL=whatsapp-auto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buscar-cliente/buscar-cliente.module": [
		282,
		3
	],
	"../pages/buscar-cuenta/buscar-cuenta.module": [
		283,
		2
	],
	"../pages/detalles/detalles.module": [
		284,
		0
	],
	"../pages/whatsapp-auto/whatsapp-auto.module": [
		285,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.ano = new Date().getFullYear();
        this.dia = new Date().getDate();
        this.mes = new Date().getMonth();
        this.mes1 = this.mes + 1;
        this.Fecha = this.ano + "-" + this.mes1 + "-" + this.dia;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: this.Fecha
        };
        if (this.mes1 == 13) {
            this.mes1 = 1;
            this.Fecha = this.ano + "-" + this.mes1 + "-" + this.dia;
        }
        this.pet = "Hoy";
        this.esHoy();
        this.esHoy();
    }
    HomePage.prototype.esHoy = function () {
        var _this = this;
        this.service.getHoy(this.event.timeEnds).subscribe(function (data) { return _this.users = data; }, function (err) { return console.log(err); });
    };
    HomePage.prototype.esAyer = function () {
        var _this = this;
        var fecha = this.event.timeEnds.split("-");
        var dia = fecha[2];
        dia = dia - 1;
        var mes = fecha[1];
        var año = fecha[0];
        var myDate1 = año + "-" + mes + "-" + dia;
        console.log(dia);
        this.service.getHoy(myDate1).subscribe(function (data) { return _this.users = data; }, function (err) { return console.log(err); });
    };
    HomePage.prototype.esMan = function () {
        var _this = this;
        var fecha = this.event.timeEnds.split("-");
        var dia = fecha[2];
        dia++;
        var mes = fecha[1];
        var año = fecha[0];
        var myDate1 = año + "-" + mes + "-" + dia;
        console.log(dia);
        this.service.getHoy(myDate1).subscribe(function (data) { return _this.users = data; }, function (err) { return console.log(err); });
    };
    HomePage.prototype.irDetalles = function (nombreR) {
        this.navCtrl.push('DetallesPage', { nombreR: nombreR });
        console.log('Envie: ' + nombreR);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\home\home.html"*/'<ion-header  >\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle >\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n          <ion-title style="height: 40px;">Inicio</ion-title>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <ion-datetime style="color: white" displayFormat="DD MMM YYYY" max="2030" min="2018" [(ngModel)]="event.timeEnds"></ion-datetime>\n\n        </ion-col>\n\n    </ion-row>\n\n   \n\n    \n\n  </ion-navbar>\n\n\n\n\n\n\n\n    <ion-segment [(ngModel)]="pet" class="seg">\n\n      <ion-segment-button value="Hoy" style="color: aliceblue" (click)="esHoy()"  >\n\n        Hoy\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Ayer" style="color: aliceblue" (click)="esAyer()">\n\n        Ayer\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Mañana" style="color: aliceblue" (click)="esMan()">\n\n        Mañana\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding  class="micontent">\n\n\n\n    <div [ngSwitch]="pet">\n\n        <ion-list inset *ngSwitchCase="\'Hoy\'">\n\n          <ion-item *ngFor="let user of users" (click)="irDetalles(user.numero)" >\n\n                <h2>{{user.numero}}</h2>\n\n                <h3>{{user.correo}}</h3>\n\n                <p>Paquete: {{user.meses}} Mes {{user.dispositivos}} Disp  Vence: {{user.vence}}</p>\n\n          </ion-item>\n\n         \n\n        </ion-list>\n\n    \n\n        <ion-list inset *ngSwitchCase="\'Ayer\'">\n\n            <ion-item *ngFor="let user of users" (click)="irDetalles(user.numero)">\n\n                <h2>{{user.numero}}</h2>\n\n                <h3>{{user.correo}}</h3>\n\n                <p>Paquete: {{user.meses}} Mes {{user.dispositivos}} Disp  Vence: {{user.vence}}</p>\n\n          </ion-item>\n\n          \n\n        </ion-list>\n\n\n\n        <ion-list inset *ngSwitchCase="\'Mañana\'">\n\n            <ion-item *ngFor="let user of users" (click)="irDetalles(user.numero)">\n\n                <h2>{{user.numero}}</h2>\n\n                <h3>{{user.correo}}</h3>\n\n                <p>Paquete: {{user.meses}} Mes {{user.dispositivos}} Disp  Vence: {{user.vence}}</p>\n\n          </ion-item>\n\n            \n\n          </ion-list>\n\n\n\n    </div>\n\n\n\n  \n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, toastCtrl, navParams, service, alerCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.esta = "";
        this.Meses = "Meses";
        this.Dispositivos = "Disp";
        this.todo = this.formBuilder.group({
            numero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ListPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle('Cantidad de meses');
        alert.addInput({
            type: 'radio',
            label: '1',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '2',
            value: '2'
        });
        alert.addInput({
            type: 'radio',
            label: '3',
            value: '3',
        });
        alert.addInput({
            type: 'radio',
            label: '4',
            value: '4'
        });
        alert.addInput({
            type: 'radio',
            label: '5',
            value: '5'
        });
        alert.addInput({
            type: 'radio',
            label: '6',
            value: '6'
        });
        alert.addInput({
            type: 'radio',
            label: '7',
            value: '7'
        });
        alert.addInput({
            type: 'radio',
            label: '8',
            value: '8'
        });
        alert.addInput({
            type: 'radio',
            label: '9',
            value: '9'
        });
        alert.addInput({
            type: 'radio',
            label: '10',
            value: '10'
        });
        alert.addInput({
            type: 'radio',
            label: '11',
            value: '11'
        });
        alert.addInput({
            type: 'radio',
            label: '12',
            value: '12'
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.Meses = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    ListPage.prototype.doRadio1 = function () {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle('Cantidad de dispositivos');
        alert.addInput({
            type: 'radio',
            label: '1',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '4',
            value: '4'
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.Dispositivos = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    ListPage.prototype.recuperandoNum = function () {
        var _this = this;
        this.service.buscarNum(this.todo.value.numero).subscribe(function (data) { return _this.esta = data; }, function (err) { return console.log(err); });
        console.log(this.esta);
        console.log(this.esta[0].numero);
        if (this.esta[0].numero == this.todo.value.numero) {
            var toast = this.toastCtrl.create({
                message: 'Ya esta registrado ese numero',
                duration: 3000
            });
            toast.present();
        }
    };
    ListPage.prototype.logForm = function () {
        var _this = this;
        this.service.insert(this.todo.value.numero, this.todo.value.nombre, this.todo.value.correo, this.todo.value.contraseña, this.Meses, this.Dispositivos, this.myDate, this.myDate1).subscribe(function (data) { return _this.users = data; }, function (err) { return console.log(err); });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <button ion-button menuToggle >\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Agregar Cliente</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-center>\n\n  <h3>Ingresa los datos del nuevo cliente</h3>\n\n\n\n  <form [formGroup]="todo" (ngSubmit)="logForm()">\n\n      <ion-list inset class="lista">\n\n\n\n          <ion-item class="lista1" (click)=recuperandoNum()>\n\n            <ion-label  floating>Numero de celular</ion-label>\n\n            <ion-input type="number" formControlName="numero"></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item class="lista1">\n\n            <ion-label floating>Nombre del cliente</ion-label>\n\n            <ion-input type="text" formControlName="nombre"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="lista1">\n\n              <ion-label floating>Correo</ion-label>\n\n              <ion-input type="text" formControlName="correo"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="lista1">\n\n              <ion-label floating>Contraseña</ion-label>\n\n              <ion-input type="text" formControlName="contraseña"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="lista1">\n\n              <ion-row text-left>\n\n                  <ion-col col-9>\n\n                    <br>\n\n                      <h2>Meses Contratados: </h2>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                      <br>\n\n                      <h4 (click)="doRadio()">{{Meses}}<ion-icon  name="arrow-dropdown"></ion-icon> </h4>\n\n                    </ion-col>\n\n              </ion-row>\n\n              \n\n                \n\n            </ion-item>\n\n  \n\n            <ion-item class="lista1">\n\n                <ion-row text-left>\n\n                    <ion-col col-9>\n\n                      <br>\n\n                        <h2>Dispositivos: </h2>\n\n                      </ion-col>\n\n                      <ion-col col-3>\n\n                        <br>\n\n                        <h4 (click)="doRadio1()">{{Dispositivos}}<ion-icon  name="arrow-dropdown"></ion-icon> </h4>\n\n                      </ion-col>\n\n                </ion-row>\n\n                \n\n                  \n\n              </ion-item>\n\n              \n\n        </ion-list>\n\n    </form>\n\n    <ion-item>\n\n        <ion-label>Fecha de entrega:</ion-label>\n\n        <ion-datetime displayFormat="DD MMM YYYY" max="2030" min="2018" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Fecha de vencimiento:</ion-label>\n\n          <ion-datetime displayFormat="DD MMM YYYY" max="2030" min="2018" [(ngModel)]="myDate1"></ion-datetime>\n\n        </ion-item>\n\n\n\n      <button style="margin-top: 40px" ion-button type="submit" [disabled]="!todo.valid" (click)="logForm()">Agregar Cliente</button>\n\n      \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buscar_cliente_buscar_cliente__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buscar_cuenta_buscar_cuenta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_whatsapp_auto_whatsapp_auto__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buscar_cuenta_buscar_cuenta__["a" /* BuscarCuentaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buscar_cliente_buscar_cliente__["a" /* BuscarClientePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_whatsapp_auto_whatsapp_auto__["a" /* WhatsappAutoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buscar-cliente/buscar-cliente.module#BuscarClientePageModule', name: 'BuscarClientePage', segment: 'buscar-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-cuenta/buscar-cuenta.module#BuscarCuentaPageModule', name: 'BuscarCuentaPage', segment: 'buscar-cuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalles/detalles.module#DetallesPageModule', name: 'DetallesPage', segment: 'detalles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatsapp-auto/whatsapp-auto.module#WhatsappAutoPageModule', name: 'WhatsappAutoPage', segment: 'whatsapp-auto', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buscar_cuenta_buscar_cuenta__["a" /* BuscarCuentaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buscar_cliente_buscar_cliente__["a" /* BuscarClientePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_whatsapp_auto_whatsapp_auto__["a" /* WhatsappAutoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__["a" /* Clipboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buscar_cliente_buscar_cliente__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buscar_cuenta_buscar_cuenta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_whatsapp_auto_whatsapp_auto__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Agregar Cliente', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Buscar Cliente', component: __WEBPACK_IMPORTED_MODULE_6__pages_buscar_cliente_buscar_cliente__["a" /* BuscarClientePage */] },
            { title: 'Buscar Cuenta', component: __WEBPACK_IMPORTED_MODULE_7__pages_buscar_cuenta_buscar_cuenta__["a" /* BuscarCuentaPage */] },
            { title: 'Auto Prueba', component: __WEBPACK_IMPORTED_MODULE_8__pages_whatsapp_auto_whatsapp_auto__["a" /* WhatsappAutoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header >\n\n    <ion-toolbar color="dark">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http1, http) {
        this.http1 = http1;
        this.http = http;
        this.api = 'http://minetflix.x10host.com/phps/';
        console.log('Entre a los servicios perro, que pesado estoy');
    }
    //   getDatos(){
    //  return this.http.get(this.api+'listado.php').map(res=>res.json())
    //   }
    ServiceProvider.prototype.getHoy = function (myDate) {
        console.log("Entre aqui:" + myDate);
        return this.http.get(this.api + 'listado-dia.php?dia=%27' + myDate + "%27").map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getBuscarCliente = function () {
        return this.http.get(this.api + 'listado.php').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.insert = function (numero, nombre, correo, contra, mes, disp, entre, vence) {
        return this.http.get(this.api + 'insert.php?numero=' + numero + '&nombre=' + nombre + '&correo=' + correo + '&contra=' + contra + '&mes=' + mes + '&disp=' + disp + '&entre=' + entre + '&vence=' + vence).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.buscarNum = function (numero) {
        return this.http.get(this.api + 'listado-numero.php?numero=' + numero).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getDatosDetalle = function (numero) {
        return this.http.get(this.api + 'detalles.php?numero=' + numero).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.upDatosDetalle = function (numero, nombre, correo, contra, mes, disp, entre, vence) {
        return this.http.get(this.api + 'update.php?numero=' + numero + '&nombre=' + nombre + '&correo=' + correo + '&contra=' + contra + '&mes=' + mes + '&disp=' + disp + '&entre=' + entre + '&vence=' + vence).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.delDatosDetalle = function (numero) {
        return this.http.get(this.api + 'delete.php?numero=' + numero).map(function (res) { return res.json(); });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map