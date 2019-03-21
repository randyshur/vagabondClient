export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'https://vagabond-client-mi.herokuapp.com/':
        // this is the full url of your deployed API
        APIURL = 'http://localhost:4050'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'https://shur-vagabond-server.herokuapp.com/';
}
