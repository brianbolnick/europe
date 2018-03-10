let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:5000';
} else {
  backendHost = 'INSERT HEROKU URL HERE!';
}

export const API_URL = `${backendHost}`;