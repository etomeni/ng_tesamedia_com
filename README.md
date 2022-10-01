# Tesamedia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

#

## Development server

Run `npm install` to install the dependency then

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#
## Further help

### .htcaccess

The first of those (which I believe applies to not just Angular) is that we need to create a .htaccess file in the top-level of /public_html. Create the file and insert this:

`
    RewriteEngine On
    # For existing assets or directories, no redirection is required
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
    RewriteRule ^ - [L]
    # if the requested resource doesn't exist, use index.html
    RewriteRule ^ /index.html
`

This is quite important because Angular functions as a single page application (SPA) — but our server does not know that. Adding this `.htaccess` file tells our server to redirect to the single page of our SPA at `/index.html`.

### Location Strategy

Finally, we need to add some extra code to the providers array of our app.modu


`{ provide: LocationStrategy, useClass: PathLocationStrategy }`


We also need to add these classes to our imports at the top of app.module.ts:


`import { LocationStrategy, PathLocationStrategy } from '@angular/common';`


Now execute `ng build` once more and upload the new distribution files to your shared server — everything should now work!

*You may need to wait a small amount of time for everything to refresh.*

