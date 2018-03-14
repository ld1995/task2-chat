// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  configFirebase : {
    apiKey: 'AIzaSyBLJRL5BUkoEMrGydXQ-mR9NTwif3ruBNw',
    authDomain: 'task-4d42b.firebaseapp.com',
    databaseURL: 'https://task-4d42b.firebaseio.com',
    projectId: 'task-4d42b',
    storageBucket: 'task-4d42b.appspot.com',
    messagingSenderId: '924809059585'
  }, configAuth0 : {
    clientID: 'NTEBZd6RcvU8vl87rB4KPgzW5C7FvTEs',
    domain: 'ld1995.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ld1995.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile email'
  }
};
