"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppErrorHandler = /** @class */ (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler() {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        return _super.call(this) || this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        debugger;
        if (error.status == "401") {
            alert("Non sei loggato, esegui il log-in e torna indietro!");
        }
        else {
            alert(error);
        }
        _super.prototype.handleError.call(this, error);
    };
    return AppErrorHandler;
}(core_1.ErrorHandler));
exports.default = AppErrorHandler;
//# sourceMappingURL=errorhandler.js.map