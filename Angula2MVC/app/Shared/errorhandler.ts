import { ErrorHandler } from '@angular/core';

export default class AppErrorHandler extends ErrorHandler {

    constructor() {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        super();
    }

    handleError(error: any) {
        debugger;
        if (error.status == "401") {
            alert("Non sei loggato, esegui il log-in e torna indietro!");
        } else {
            alert(error);
        }
        
        super.handleError(error);
    }
}