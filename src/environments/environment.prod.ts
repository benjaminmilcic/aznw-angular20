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
    // old PHP API => createApi: 'api/stripe/create.php',
    // new spring boot API => createApi: 'https://87.106.117.170:8443/api/v2/stripe',
    // new spring boot API with url name => createApi: 'https://benjaminmilcic.site:8443/api/v2/stripe',
    // new nest api:
    createApi: 'https://benjaminmilcic.site:3000/stripe',
    returnUrl: 'https://auf-zu-neuen-welten.de',
  },
  guestbook: {
    // old PHP API =>
    //                 getAllPostsApi: 'https://auf-zu-neuen-welten.de/api/posts/get/',
    //                 addPostApi: 'https://auf-zu-neuen-welten.de/api/posts/post/',
    // new spring boot API =>
    //                  getAllPostsApi: 'https://87.106.117.170:8443/api/v2/guestbook',
    //                  addPostApi: 'https://87.106.117.170:8443/api/v2/guestbook',
    // new spring boot API with url name =>
    //                  getAllPostsApi: 'https://benjaminmilcic.site:8443/api/v2/guestbook',
    //                  addPostApi: 'https://benjaminmilcic.site:8443/api/v2/guestbook',
    //                  filesUrl: 'https://benjaminmilcic.site:8443/api/v2/guestbook/files',
    // new nest api:
    getAllPostsApi: 'https://benjaminmilcic.site:3000/guestbook',
    addPostApi: 'https://benjaminmilcic.site:3000/guestbook',
    filesUrl: 'https://benjaminmilcic.site:3000/files',
  },
  contact: {
    // old nest API => form2mailApi: 'https://nest-form2mail.adaptable.app/',
    // new spring boot API => form2mailApi: 'https://87.106.117.170:8443/api/v2/form2mail',
    // new spring boot API with url name => form2mailApi: 'https://benjaminmilcic.site:8443/api/v2/form2mail',
    // new nest api:
    form2mailApi: 'https://benjaminmilcic.site:3000/form2email',
  },
  auth: {
    // old firebase solution =>
    //                          getJokesFile: 'https://aznw-1753b-default-rtdb.europe-west1.firebasedatabase.app/vicevi.json',
    //                          login: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzuR3T7b8V2iC-K5-0wmfqRxnjWnh8QGs',
    //                          signup: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzuR3T7b8V2iC-K5-0wmfqRxnjWnh8QGs',
    // new nest solution:
    getJokesFile: 'https://benjaminmilcic.site:3000/auth/jokes',
    login: 'https://benjaminmilcic.site:3000/auth/login',
    signup: 'https://benjaminmilcic.site:3000/auth/signup',
  },
  moorhuhn: {
    moorhuhnApi: 'https://benjaminmilcic.site:3000/moorhuhn',
  },
  error: {
    errorMessageApi: 'https://benjaminmilcic.site:3000/error2email',
  },
  yahtzeeGame: {
    webSocketsUrl: 'https://benjaminmilcic.site:3000/yahtzee-game',
  },
  geoLocation: {
    reverseGeoCodeApi:
      'https://benjaminmilcic.site:3000/geolocation/reverse-geocode',
    geoCodeApi: 'https://benjaminmilcic.site:3000/geolocation/geocode',
    citiesApi: 'https://benjaminmilcic.site:3000/geolocation/cities',
  },
  production: true,
};
