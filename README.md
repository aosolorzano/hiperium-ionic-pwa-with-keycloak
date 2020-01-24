# Hiperium Project: Ionic Angular Conference Application Demo

This application is purely a kitchen-sink demo of the Ionic Framework and Angular. We added KeyCloak support to login before navigate to the main web page.


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://www.keycloak.org/downloads.html) for KeyCloak 8 or greater.
* [Download the installer](https://www.enterprisedb.com/es/downloads/postgres-postgresql-downloads) for PostgreSQL 10.
* Configure KeyCloak to connect to PostgreSQL. You can follow the instructions at this [link](https://www.keycloak.org/docs/latest/server_installation/#_database).
* Run the KeyCloak server and setup your app domain.
* [Download the installer](https://nodejs.org/) for Node.js 6 or greater. 
* Install the ionic CLI globally: `sudo npm install -g ionic`
* Install a local HTTP server `sudo npm install -g http-server`
* Install the Angular CLI `sudo npm install -g @angular/cli`
* Clone this repository: `git clone https://github.com/aosolorzano/hiperium-ionic-pwa-with-keycloak.git`.
* Run `npm install` from the project root.
* Build the project `ionic build`. You can build to production `ionic build --prod`.
* Run `ionic serve` in a terminal from the project root, or using an internal HTTP server `http-server ./www -p 8100`.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing
To contribute to the main application, please click to the following link: [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
