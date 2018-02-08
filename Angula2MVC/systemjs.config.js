﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // angular material module
            //'@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            //'@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            //'@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            //'@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            
            // CDK individual packages
            '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
            //'@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
            //'@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',


            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-bs3-modal': 'npm:/ng2-bs3-modal',
            'hammerjs': 'npm:hammerjs/hammer.js',

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js', defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'ng2-bs3-modal':

            { main: '/bundles/ng2-bs3-modal.js', defaultExtension: 'js' }

            //,
            //'@angular/material': {
            //    format: 'cjs',
            //    main: 'material.umd.js'
            //}
        }
    });
})(this);