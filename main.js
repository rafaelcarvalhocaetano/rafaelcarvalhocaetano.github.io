(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_assessoria_financeira_assessoria_financeira_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/assessoria-financeira/assessoria-financeira.component */ "./src/app/component/assessoria-financeira/assessoria-financeira.component.ts");
/* harmony import */ var _component_nutricao_nutricao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/nutricao/nutricao.component */ "./src/app/component/nutricao/nutricao.component.ts");
/* harmony import */ var _component_carga_carga_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/carga/carga.component */ "./src/app/component/carga/carga.component.ts");
/* harmony import */ var _component_etiquetagem_etiquetagem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/etiquetagem/etiquetagem.component */ "./src/app/component/etiquetagem/etiquetagem.component.ts");
/* harmony import */ var _component_form_nutricao_form_nutricao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/form-nutricao/form-nutricao.component */ "./src/app/component/form-nutricao/form-nutricao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'assessoria', component: _component_assessoria_financeira_assessoria_financeira_component__WEBPACK_IMPORTED_MODULE_3__["AssessoriaFinanceiraComponent"] },
    { path: 'nutricao', component: _component_nutricao_nutricao_component__WEBPACK_IMPORTED_MODULE_4__["NutricaoComponent"] },
    { path: 'carga', component: _component_carga_carga_component__WEBPACK_IMPORTED_MODULE_5__["CargaComponent"] },
    { path: 'etiquetagem', component: _component_etiquetagem_etiquetagem_component__WEBPACK_IMPORTED_MODULE_6__["EtiquetagemComponent"] },
    { path: 'sisnutri', component: _component_form_nutricao_form_nutricao_component__WEBPACK_IMPORTED_MODULE_7__["FormNutricaoComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span, a{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #FFFFFF;\n}\nul > li > a:hover{\n  color: #FFFFFF;\n}\nh5{\n  margin: 0 40px 0 20px;\n  font-family: Segoe;\n  font-weight: bolder;\n}\nh6{\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 1% 0 5% 0;\n  font-family: Segoe;\n}\n.botao{\n  margin: 2px;\n}\n@font-face{\n  font-family: Segoe;\n  src:local('../assets/_fonts/segoe-print-bold.ttf'), url('segoe-print-bold.ttf');\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a routerLink=\"/\" class=\"nav-link\">\n    <h5>T R E E L</h5>\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 justify-content-end\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/nutricao\">Nutrição</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/carga\">Carga-Descarga</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/assessoria\">Assessoria</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/etiquetagem\">Etiquetagem</a>\n      </li>\n    </ul>\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <button type=\"button\" class=\"btn btn-danger botao\" (click)=\"google()\">\n          <i class=\"fab fa-google\"></i>\n        </button>\n      </li>\n      <li class=\"nav-item\">\n        <button type=\"button\" class=\"btn btn-primary botao\" (click)=\"facebook()\">\n          <i class=\"fab fa-facebook-f\"></i>\n        </button>\n      </li>\n      <li class=\"nav-item\">\n        <button type=\"button\" class=\"btn btn-dark botao\" (click)=\"logOUT()\">\n          Sing Out\n        </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/firebase.service */ "./src/app/shared/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AppComponent.prototype.google = function () {
        var _this = this;
        this.service.logINGoogle().then(function (data) {
            _this.router.navigate(['/']);
            _this.flag = true;
            console.log('conectado');
        }).catch(function (erro) {
            alert('Erro ....');
        });
    };
    AppComponent.prototype.facebook = function () {
        this.service.logINFace().then(function (data) {
            console.log(data);
        }).catch(function (e) {
            alert('Facebook não conectado ...');
        });
    };
    AppComponent.prototype.logOUT = function () {
        var _this = this;
        this.service.logOUTGoogle().then(function (data) {
            _this.flag = false;
            console.log('deslocado');
        }).catch(function (e) {
            alert('Erro de fechamento ....');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: config, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_carga_carga_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/carga/carga.component */ "./src/app/component/carga/carga.component.ts");
/* harmony import */ var _component_nutricao_nutricao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/nutricao/nutricao.component */ "./src/app/component/nutricao/nutricao.component.ts");
/* harmony import */ var _component_etiquetagem_etiquetagem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/etiquetagem/etiquetagem.component */ "./src/app/component/etiquetagem/etiquetagem.component.ts");
/* harmony import */ var _component_assessoria_financeira_assessoria_financeira_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/assessoria-financeira/assessoria-financeira.component */ "./src/app/component/assessoria-financeira/assessoria-financeira.component.ts");
/* harmony import */ var _component_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/cadastro/cadastro.component */ "./src/app/component/cadastro/cadastro.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/firebase.service */ "./src/app/shared/firebase.service.ts");
/* harmony import */ var _component_form_nutricao_form_nutricao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/form-nutricao/form-nutricao.component */ "./src/app/component/form-nutricao/form-nutricao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: 'AIzaSyCfxPQpt2q9XfoydfVA9ATwvNUmjVJpKJA',
    authDomain: 'treel-ca3c1.firebaseapp.com',
    databaseURL: 'https://treel-ca3c1.firebaseio.com',
    projectId: 'treel-ca3c1',
    storageBucket: '',
    messagingSenderId: '139276406789',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_carga_carga_component__WEBPACK_IMPORTED_MODULE_4__["CargaComponent"],
                _component_nutricao_nutricao_component__WEBPACK_IMPORTED_MODULE_5__["NutricaoComponent"],
                _component_etiquetagem_etiquetagem_component__WEBPACK_IMPORTED_MODULE_6__["EtiquetagemComponent"],
                _component_assessoria_financeira_assessoria_financeira_component__WEBPACK_IMPORTED_MODULE_7__["AssessoriaFinanceiraComponent"],
                _component_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_8__["CadastroComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _component_form_nutricao_form_nutricao_component__WEBPACK_IMPORTED_MODULE_14__["FormNutricaoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(config)
            ],
            providers: [_shared_firebase_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/assessoria-financeira/assessoria-financeira.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/assessoria-financeira/assessoria-financeira.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  text-align: justify;\n}\nimg{\n  width: 90%;\n  height: 90% ;\n}\nh5, h3{\n  margin: 2% 0 2% 0;\n  font-weight: bolder;\n  font-size: 25px;\n  font-family: Segoe;\n}\n@font-face{\n  font-family: Segoe;\n  src: local('/src/assets/_fonts/segoe.ttf'), url('/src/assets/_fonts/segoe.ttf');\n}\n"

/***/ }),

/***/ "./src/app/component/assessoria-financeira/assessoria-financeira.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/assessoria-financeira/assessoria-financeira.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <div class=\"\">\n    <h5>TREEL - ASSESSORIA FINANCEIRA</h5>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"/src/assets/_img/assessoria.jpg\" alt=\"nutricao\">\n        </div>\n        <div class=\"col-md-6\">\n          <h3 class=\"text-success\">ASSESSORIA FINANCEIRA</h3>\n          <p>A assessoria financeira é um tipo de serviço prestado por empresas ou profissionais altamente especializados a\n            pessoas físicas ou jurídicas com a finalidade de ajudá-las a tomar decisões de cunho financeiro.\n          </p>\n          <p>\n            O serviço de Assessoria Financeira pode ajudar famílias e empresas a obter uma resposta para diversos tipos de questões na\n            área financeira: se determinada oportunidade de investimento é viável economicamente, sobre como reduzir endividamento,\n            sobre como construir ferramenta de controle de fluxo de caixa, se o custo de capital da empresa está excessivamente\n            caro, sobre como entender o nível da saúde financeira da empresa, se vale a pena às famílias fazer investimentos\n            bancários ou em imóveis, entre outros auxílios melhor detalhados adiante.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/assessoria-financeira/assessoria-financeira.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/assessoria-financeira/assessoria-financeira.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssessoriaFinanceiraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessoriaFinanceiraComponent", function() { return AssessoriaFinanceiraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssessoriaFinanceiraComponent = /** @class */ (function () {
    function AssessoriaFinanceiraComponent() {
    }
    AssessoriaFinanceiraComponent.prototype.ngOnInit = function () {
    };
    AssessoriaFinanceiraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assessoria-financeira',
            template: __webpack_require__(/*! ./assessoria-financeira.component.html */ "./src/app/component/assessoria-financeira/assessoria-financeira.component.html"),
            styles: [__webpack_require__(/*! ./assessoria-financeira.component.css */ "./src/app/component/assessoria-financeira/assessoria-financeira.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssessoriaFinanceiraComponent);
    return AssessoriaFinanceiraComponent;
}());



/***/ }),

/***/ "./src/app/component/cadastro/cadastro.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/cadastro/cadastro.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n.home{\n  height: 42em;\n}\n.btn{\n  font-weight: bold;\n  font-family: Segoe;\n}\n.info{\n  color: #FFFFFF;\n  margin: 33% 0 0 15%;\n  text-align: justify;\n}\nh1, span{\n  font-family: Segoe;\n}\n.card{\n  width: 100%;\n  margin: 20% 0 0 0;\n}\n@font-face{\n  font-family: Segoe;\n  src:local('/src/assets/_fonts/segoe.ttf'), url('/src/assets/_fonts/segoe.ttf');\n}\n@media(max-width: 700px){\n  .home{\n    height: 40em;\n  }\n  .card{\n    width: 100%;\n    margin: 5% 0 0 0;\n  }\n  .info{\n    margin: 1% 0 2% 0;\n  }\n  h1{\n    font-size: 35px;\n    text-align: center;\n  }\n  h4{\n    font-size: 25px;\n    text-align: center;\n  }\n  p{\n    font-size: 20px;\n    text-align: center;\n    padding: 0;\n    margin: 0 5% 0 5%;\n  }\n}\n@media(max-width: 360px){\n  .home{\n    height: 37em;\n  }\n  .card{\n    width: 100%;\n  }\n  h1{\n    font-size: 25px;\n    text-align: center;\n  }\n  h4{\n    font-size: 20px;\n    text-align: center;\n  }\n  p{\n    font-size: 15px;\n    text-align: center;\n    margin: 0 5% 0 5%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/component/cadastro/cadastro.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/cadastro/cadastro.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-dark home\">\n  <div class=\"row\">\n\n    <div class=\"col-md-7 col-sm-12\">\n      <div class=\"info\">\n        <h1>T R E E L</h1>\n        <span>Cadastre-se para receber informações detalhadas de nossos serviços</span>\n      </div>\n    </div>\n\n    <div class=\"col-md-5 col-sm-12\">\n      <div class=\"container\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form class=\"form-horizontal\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Seu nome\" autocomplete=\"nome\">\n                <small class=\"form-text text-muted\">Informe seu nome completo</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email@email.com\" autocomplete=\"email\">\n                <small class=\"form-text text-muted\">Informe seu email completo</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"senha\">Senha</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"senha\" autocomplete=\"senha\">\n                <small class=\"form-text text-muted\">Informe seu senha completo</small>\n              </div>\n              <button class=\"btn btn-success col-md-12 col-sm-12\" type=\"submit\">REGISTRAR</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/cadastro/cadastro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/cadastro/cadastro.component.ts ***!
  \**********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadastroComponent = /** @class */ (function () {
    function CadastroComponent() {
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/component/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/component/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/component/carga/carga.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/carga/carga.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  text-align: justify;\n}\nimg{\n  width: 90%;\n  height: 90% ;\n  border-radius: 10px;\n}\n.botao {\n  margin: 0 1% 0 1%;\n}\nh5, h3{\n  margin: 2% 0 2% 0;\n  font-weight: bolder;\n  font-size: 25px;\n  font-family: Segoe;\n}\n@font-face{\n  font-family: Segoe;\n  src: local('/src/assets/_fonts/segoe.ttf'), url('/src/assets/_fonts/segoe.ttf');\n}\n"

/***/ }),

/***/ "./src/app/component/carga/carga.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/carga/carga.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n    <div class=\"\">\n        <h5>TREEL - CARGA E DESCARGA</h5>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n              <img src=\"/src/assets/_img/carga-descarga.jpg\" alt=\"nutricao\">\n          </div>\n          <div class=\"col-md-6\">\n              <h3 class=\"text-success\">CARGA E DESCARGA</h3>\n              <p>Poucos processos são tão rotineiros quanto a carga e descarga de mercadorias. Empresas de médio e grande porte podem realizar esse processo até 1000 vezes por semana.\n              </p>\n              <p>\n                  Mas será que você sabe as diretrizes básicas para realizarmos a carga e descarga com qualidade? Aqui temos alguns pontos importantes que você deve levar em conta na hora de estruturar dentro de sua empresa.\n              </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/component/carga/carga.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/carga/carga.component.ts ***!
  \****************************************************/
/*! exports provided: CargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaComponent", function() { return CargaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CargaComponent = /** @class */ (function () {
    function CargaComponent() {
    }
    CargaComponent.prototype.ngOnInit = function () {
    };
    CargaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carga',
            template: __webpack_require__(/*! ./carga.component.html */ "./src/app/component/carga/carga.component.html"),
            styles: [__webpack_require__(/*! ./carga.component.css */ "./src/app/component/carga/carga.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CargaComponent);
    return CargaComponent;
}());



/***/ }),

/***/ "./src/app/component/etiquetagem/etiquetagem.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/etiquetagem/etiquetagem.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  text-align: justify;\n}\nimg{\n  width: 90%;\n  height: 90% ;\n}\nh5, h3{\n  margin: 2% 0 2% 0;\n  font-weight: bolder;\n  font-size: 25px;\n  font-family: Segoe;\n}\n@font-face{\n  font-family: Segoe;\n  src: local('/src/assets/_fonts/segoe.ttf'), url('/src/assets/_fonts/segoe.ttf');\n}\n"

/***/ }),

/***/ "./src/app/component/etiquetagem/etiquetagem.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/etiquetagem/etiquetagem.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <div class=\"\">\n    <h5>TREEL - ETIQUETAGEM</h5>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h3 class=\"text-success\">ETIQUETAGEM</h3>\n          <p>Etiquetagem é um processo através do qual se identifica um arquivo por uma etiqueta, um nome pré-determinado. Também\n            pode ser utilizado em diversos meios e de diversas maneiras para se catalogar objetos entre outros.\n          </p>\n          <p>\n            O Programa Brasileiro de Etiquetagem (PBE) é coordenado e regulamentado pelo INMETRO e executado em parceria com o CONPET\n            para os equipamentos que consomem combustíveis (fogões, fornos, aquecedores de água a gás e automóveis). Por\n            meio da Etiqueta Nacional de Conservação de Energia (ENCE), afixada nos produtos de forma voluntária ou compulsória,\n            o consumidor é informado, no momento da compra, sobre a eficiência energética ou consumo de modelos semelhantes,\n            podendo compará-los de \"A\" (mais eficiente) até \"E\" (menos eficiente). O PBE contribui para a comercialização\n            e utilização de aparelhos com menor consumo de energia.\n          </p>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"../assets/_img/img_etiquetagem.jpg\" alt=\"nutricao\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/etiquetagem/etiquetagem.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/etiquetagem/etiquetagem.component.ts ***!
  \****************************************************************/
/*! exports provided: EtiquetagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetagemComponent", function() { return EtiquetagemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EtiquetagemComponent = /** @class */ (function () {
    function EtiquetagemComponent() {
    }
    EtiquetagemComponent.prototype.ngOnInit = function () {
    };
    EtiquetagemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-etiquetagem',
            template: __webpack_require__(/*! ./etiquetagem.component.html */ "./src/app/component/etiquetagem/etiquetagem.component.html"),
            styles: [__webpack_require__(/*! ./etiquetagem.component.css */ "./src/app/component/etiquetagem/etiquetagem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EtiquetagemComponent);
    return EtiquetagemComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerLocal{\n  float: left;\n}\n.footerContato{\n  margin: 2% 0 0 0;\n}\n.footerLocal {\n  margin: 2% 0 0 5%;\n}\nh5{\n  font-weight: bold;\n  text-transform: uppercase;\n}\ni{\n  margin: 0 1% 0 1%;\n}\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-footer text-center\">\n    <div class=\"footerLocal\">\n      <h5>Localização</h5>\n      <a href=\"https://goo.gl/maps/QUwLmTXCMsP2\">\n      <p>Rua: Edelzita Borges Batista, 55, Vila Quitaúna, Osasco - SP</p>\n    </a>\n    </div>\n    <div class=\"footerContato\">\n     <h5>Contato</h5>\n      <i class=\"fas fa-phone\"> (11) 4444-4444</i>\n      <i class=\"fas fa-phone\"> (11) 4444-4444</i>\n      <i class=\"fas fa-envelope-open\"> treel@treel.com</i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/form-nutricao/form-nutricao.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/form-nutricao/form-nutricao.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/form-nutricao/form-nutricao.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/form-nutricao/form-nutricao.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Aqui ficará o formulário que será enviado para a área do administrador do sistema para suprir a falta do envio de email</h2>\n  <h6>Na área do adm, poderá visualizar todas as pessoas que acessaram juntamente com o email e nome, mais uma tabela contendo as solicitações de nutrição detralhada</h6>\n</div>\n"

/***/ }),

/***/ "./src/app/component/form-nutricao/form-nutricao.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/form-nutricao/form-nutricao.component.ts ***!
  \********************************************************************/
/*! exports provided: FormNutricaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNutricaoComponent", function() { return FormNutricaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormNutricaoComponent = /** @class */ (function () {
    function FormNutricaoComponent() {
    }
    FormNutricaoComponent.prototype.ngOnInit = function () {
    };
    FormNutricaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-nutricao',
            template: __webpack_require__(/*! ./form-nutricao.component.html */ "./src/app/component/form-nutricao/form-nutricao.component.html"),
            styles: [__webpack_require__(/*! ./form-nutricao.component.css */ "./src/app/component/form-nutricao/form-nutricao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormNutricaoComponent);
    return FormNutricaoComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cadastro{\n margin: 0;\n}\n.etiquetagem, .carga, .assessoria, .nutricao{\n  margin: 2% 0 2% 0;\n}\n.etiquetagem, .assessoria, .nutricao{\n  border-top: 1px solid #CCC;\n  width: 90%;\n  margin: 5% 5% 1% 5%;\n}\n\n"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cadastro\">\n  <app-cadastro></app-cadastro>\n</div>\n<div class=\"carga\">\n  <app-carga></app-carga>\n</div>\n<div class=\"etiquetagem\">\n  <app-etiquetagem></app-etiquetagem>\n</div>\n<div class=\"assessoria\">\n  <app-assessoria-financeira></app-assessoria-financeira>\n</div>\n<div class=\"nutricao\">\n  <app-nutricao></app-nutricao>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/nutricao/nutricao.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/nutricao/nutricao.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  text-align: justify;\n}\nimg{\n  width: 90%;\n  height: 90%;\n  border-radius: 10px;\n}\nh5, h3{\n  margin: 5% 0 3% 0;\n  font-weight: bolder;\n  font-size: 25px;\n  font-family: Segoe;\n}\n@font-face{\n  font-family: Segoe;\n  src: local('/src/assets/_fonts/segoe.ttf'), url('/src/assets/_fonts/segoe.ttf');\n}\n"

/***/ }),

/***/ "./src/app/component/nutricao/nutricao.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/nutricao/nutricao.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <div class=\"\">\n    <h5>TREEL - NUTRIÇÃO</h5>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h3 class=\"text-success\">NUTRIÇÃO</h3>\n          <p>\n            A pirâmide alimentar americana atualizada, publicada em 2005, é um guia nutricional geral para o consumo recomendado de comida.\n            Em Portugal, desconsidera-se esta ferramenta e utiliza-se a nova Roda dos Alimentos, elaborada pela FCNAUP e\n            IC. Nutrição é um processo biológico em que os organismos (animais, fungos, vegetais e micro-organismos), utilizando-se\n            de alimentos, assimilam nutrientes para a realização de suas funções vitais\n          </p>\n          <p>\n            Devido sua importância à sobrevivência de qualquer ser vivo, a nutrição faz parte do aprendizado durante grande parte do\n            período de estudo básico e em nível secundário, assim como em muitos cursos de nível de graduação e pós-graduação,\n            em áreas como medicina, enfermagem, biomedicina, farmácia, biologia, agronomia, zootecnia e nutrição entre outras.\n          </p>\n          <p>Verifique nosso sistema de Nutrição <button class=\"btn btn-success\" (click)=\"sisnutri()\">SIS-NUTRI</button> </p>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"/src/assets/_img/nutricao.jpg\" alt=\"nutricao\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/nutricao/nutricao.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/nutricao/nutricao.component.ts ***!
  \**********************************************************/
/*! exports provided: NutricaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutricaoComponent", function() { return NutricaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NutricaoComponent = /** @class */ (function () {
    function NutricaoComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    NutricaoComponent.prototype.ngOnInit = function () {
        this.authEmail = this.auth.auth.currentUser.email;
    };
    NutricaoComponent.prototype.sisnutri = function () {
        // console.log(this.auth.auth.currentUser.displayName);
        // console.log(this.auth.auth.currentUser.email);
        if (this.authEmail == null) {
            this.router.navigate(['/']);
            alert('Favor Cadastrar !!! ');
        }
        else {
            this.router.navigate(['/sisnutri']);
        }
    };
    NutricaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nutricao',
            template: __webpack_require__(/*! ./nutricao.component.html */ "./src/app/component/nutricao/nutricao.component.html"),
            styles: [__webpack_require__(/*! ./nutricao.component.css */ "./src/app/component/nutricao/nutricao.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NutricaoComponent);
    return NutricaoComponent;
}());



/***/ }),

/***/ "./src/app/shared/firebase.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/firebase.service.ts ***!
  \********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(fire) {
        this.fire = fire;
    }
    FirebaseService.prototype.logINGoogle = function () {
        return this.fire.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    FirebaseService.prototype.logINFace = function () {
        return this.fire.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    };
    FirebaseService.prototype.logOUTGoogle = function () {
        return this.fire.auth.signOut();
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rafael/github/treel/treel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map