// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'aznw-1753b',
    appId: '1:881209153407:web:4d2619f64cf2f3b2632c4a',
    storageBucket: 'aznw-1753b.appspot.com',
    apiKey: 'AIzaSyBzuR3T7b8V2iC-K5-0wmfqRxnjWnh8QGs',
    authDomain: 'aznw-1753b.firebaseapp.com',
    messagingSenderId: '881209153407',
  },
  stripe: {
    //old PHP API => createApi: 'http://localhost:80/create.php',
    createApi: 'https://localhost:8443/api/v2/stripe',
    returnUrl: 'http://localhost:4200',
  },
  guestbook: {
    getAllPostsApi: 'https://localhost:8443/api/v2/guestbook',
    addPostApi: 'https://localhost:8443/api/v2/guestbook',
  },
  contact: {
    form2mailApi: 'https://localhost:8443/api/v2/form2mail',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
