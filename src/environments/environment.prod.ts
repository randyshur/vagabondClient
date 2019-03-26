export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'vagabond-client-mi.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://shur-vagabond-server.herokuapp.com/'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4050/';
}
