webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageModule", function() { return DetallesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalles__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallesPageModule = /** @class */ (function () {
    function DetallesPageModule() {
    }
    DetallesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalles__["a" /* DetallesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalles__["a" /* DetallesPage */]),
            ],
        })
    ], DetallesPageModule);
    return DetallesPageModule;
}());

//# sourceMappingURL=detalles.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetallesPage = /** @class */ (function () {
    function DetallesPage(navCtrl, alertCtrl, clipboard, toastCtrl, navParams, service, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.service = service;
        this.formBuilder = formBuilder;
        this.api = "";
        this.steperro = "";
        this.steperro1 = "";
        this.cont = 0;
        this.nombre = this.navParams.get('nombreR');
        this.sera = this.getNombres();
        this.api = "https://api.whatsapp.com/send?phone=52" + this.nombre;
        console.log(this.items);
        this.todo = this.formBuilder.group({
            numero: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            meses: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            disp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            entre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            vence: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            listo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    }
    //Aqui recibo todos los datos usando el id
    DetallesPage.prototype.getNombres = function () {
        var _this = this;
        this.service.getDatosDetalle(this.nombre).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        this.service.getDatosDetalle(this.nombre).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        return true;
    };
    DetallesPage.prototype.ActForm = function () {
        var _this = this;
        this.service.upDatosDetalle(this.todo.value.numero, this.todo.value.nombre, this.todo.value.correo, this.todo.value.contraseña, this.todo.value.meses, this.todo.value.disp, this.todo.value.entre, this.todo.value.vence).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        this.presentToast();
    };
    DetallesPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Actualizado con exito',
            duration: 3000
        });
        toast.present();
    };
    DetallesPage.prototype.presentToast2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Numero copiado',
            duration: 3000
        });
        toast.present();
    };
    DetallesPage.prototype.presentToast3 = function () {
        var toast = this.toastCtrl.create({
            message: 'Eliminado con exito',
            duration: 3000
        });
        toast.present();
    };
    DetallesPage.prototype.presentToast4 = function () {
        var toast = this.toastCtrl.create({
            message: 'Correo copiado',
            duration: 3000
        });
        toast.present();
    };
    DetallesPage.prototype.copiartexto = function (numero, correo) {
        if (this.cont == 0) {
            this.clipboard.copy(numero);
            this.presentToast2();
            this.cont = 1;
        }
        else {
            this.clipboard.copy(correo);
            this.presentToast4();
            this.cont = 0;
        }
    };
    DetallesPage.prototype.DelForm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Cliente',
            message: '¿Estas seguro que quieres eliminar a este cliente?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.DelForm1();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetallesPage.prototype.DelForm1 = function () {
        var _this = this;
        this.service.delDatosDetalle(this.todo.value.numero).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log(err); });
        this.presentToast3();
    };
    DetallesPage.prototype.unMes = function () {
        console.log(this.todo.value.entre);
        var dato;
        var mes;
        dato = this.todo.value.entre.split("-");
        mes = dato[1];
        mes++;
        if (mes == 13) {
            var ano;
            mes = 1;
            ano = dato[0];
            ano++;
            dato[0] = ano;
        }
        dato[1] = mes;
        console.log(dato);
        this.todo.value.entre = dato[0] + "-" + dato[1] + "-" + dato[2];
        console.log(this.todo.value.entre);
        this.steperro = this.todo.value.entre;
        //Segundo round
        dato = this.todo.value.vence.split("-");
        mes = dato[1];
        mes++;
        if (mes == 13) {
            var ano;
            mes = 1;
            ano = dato[0];
            ano++;
            dato[0] = ano;
        }
        dato[1] = mes;
        console.log(dato);
        this.todo.value.vence = dato[0] + "-" + dato[1] + "-" + dato[2];
        console.log(this.todo.value.vence);
        this.steperro1 = this.todo.value.vence;
    };
    DetallesPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Cuando vence');
        alert.addInput({
            type: 'radio',
            label: 'Hoy',
            value: '1',
        });
        alert.addInput({
            type: 'radio',
            label: 'Ayer',
            value: '2'
        });
        alert.addInput({
            type: 'radio',
            label: 'Pronto',
            value: '3'
        });
        alert.addInput({
            type: 'radio',
            label: 'Nada',
            value: '4',
            checked: true
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                if (data == 1) {
                    _this.api = "https://api.whatsapp.com/send?phone=52" + _this.nombre + '&text=Hola, su cuenta vence el día de hoy, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio';
                }
                if (data == 2) {
                    _this.api = "https://api.whatsapp.com/send?phone=52" + _this.nombre + '&text=Hola, su cuenta venció el día de ayer, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio';
                }
                if (data == 3) {
                    _this.api = "https://api.whatsapp.com/send?phone=52" + _this.nombre + '&text=Hola, su cuenta está por vencer, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio';
                }
                if (data == 4) {
                    _this.api = "https://api.whatsapp.com/send?phone=52" + _this.nombre;
                }
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    DetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalles',template:/*ion-inline-start:"D:\Proyectos ionic\Netflix\src\pages\detalles\detalles.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>Detalles</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center padding style="margin-top: 30px" *ngFor="let user of items">\n\n\n\n    <h1 style="margin-top: 20px; color: black" (click)="copiartexto(user.numero,user.correo)">Cliente: {{user.numero}}</h1>\n\n    <h3 style="margin-top: 20px; color: black" ><a href="{{api}}">Mensaje Whatsapp</a> </h3>\n\n\n\n    <h4 (click)="doRadio()">Mensaje<ion-icon  name="arrow-dropdown"></ion-icon> </h4>\n\n    <form [formGroup]="todo" (ngSubmit)="ActForm()">\n\n        <ion-list inset class="lista">\n\n  \n\n            <ion-item class="lista1" >\n\n              <ion-label  floating>Numero de celular</ion-label>\n\n              <ion-input type="number" formControlName="numero" value="{{user.numero}}"></ion-input>\n\n            </ion-item>\n\n          \n\n            <ion-item class="lista1">\n\n              <ion-label floating>Nombre del cliente</ion-label>\n\n              <ion-input type="text" formControlName="nombre" value="{{user.nombre}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Correo</ion-label>\n\n                <ion-input type="text" formControlName="correo" value="{{user.correo}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Contraseña</ion-label>\n\n                <ion-input type="text" formControlName="contraseña" value="{{user.contra}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Meses</ion-label>\n\n                <ion-input type="text" formControlName="meses" value="{{user.meses}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Dispositivos</ion-label>\n\n                <ion-input type="text" formControlName="disp" value="{{user.dispositivos}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Entregada</ion-label>\n\n                <ion-input type="text" formControlName="entre" [ngModel]="steperro" value="{{user.entrega}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Vence</ion-label>\n\n                <ion-input type="text" formControlName="vence" [ngModel]="steperro1" value="{{user.vence}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="lista1">\n\n                <ion-label floating>Listo???</ion-label>\n\n                <ion-input type="text" formControlName="listo" ></ion-input>\n\n            </ion-item>\n\n           \n\n            <button style="margin-top: 40px" ion-button type="submit" [disabled]="!todo.valid" >Actualizar Cliente</button>\n\n            \n\n        </ion-list>\n\n         \n\n      </form>\n\n      <button  ion-button [disabled]="!todo.valid" (click)="unMes()">Actualizar 1 mes</button>\n\n      <br>\n\n      <button style="margin-top: 20px" ion-button [disabled]="!todo.valid" (click)="DelForm()">Eliminar Cliente</button>\n\n      <br><br>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Proyectos ionic\Netflix\src\pages\detalles\detalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], DetallesPage);
    return DetallesPage;
}());

//# sourceMappingURL=detalles.js.map

/***/ })

});
//# sourceMappingURL=0.js.map