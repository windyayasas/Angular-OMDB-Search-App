// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * store common properties related to project
 */
export const environment = {
  production: false, // Is production
  apiUrl:'http://www.omdbapi.com/', // base url
  apiKey:'9cbad39a', // Api key for service calls
  mockApiUrl: 'http://localhost:3000/' // Mock Api URL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
