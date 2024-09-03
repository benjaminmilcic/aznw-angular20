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
    createApi: 'https://87.106.117.170:8443/api/v2/stripe',
    returnUrl: 'https://auf-zu-neuen-welten.de',
  },
  guestbook: {
    // old PHP API => getAllPostsApi: 'https://auf-zu-neuen-welten.de/api/posts/get/',
    // new spring boot API => getAllPostsApi: 'https://87.106.117.170:8443/api/v2/guestbook',
    getAllPostsApi: 'https://87.106.117.170:8443/api/v2/guestbook',

    // old PHP API => addPostApi: 'https://auf-zu-neuen-welten.de/api/posts/post/',
    // new spring boot API => addPostApi: 'https://87.106.117.170:8443/api/v2/guestbook',
    addPostApi: 'https://87.106.117.170:8443/api/v2/guestbook',
  },
  contact: {
    // old PHP API => form2mailApi: 'https://nest-form2mail.adaptable.app/',
    // new spring boot API => form2mailApi: 'https://87.106.117.170:8443/api/v2/form2mail',
    form2mailApi: 'https://87.106.117.170:8443/api/v2/form2mail',
  },
  production: true,
};