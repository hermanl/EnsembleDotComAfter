// eslint-disable-next-line import/no-unresolved
import AdobeAemHeadlessClientJs from 'https://cdn.skypack.dev/pin/@adobe/aem-headless-client-js@v3.2.0-R5xKUKJyh8kNAfej66Zg/mode=imports,min/optimized/@adobe/aem-headless-client-js.js';

import { config } from './client-config.js';

const { SERVICE_URI, GRAPHQL_ENDPOINT } = config;
const serviceURL = SERVICE_URI;
const endpoint = GRAPHQL_ENDPOINT;

const aemHeadlessClient = new AdobeAemHeadlessClientJs({
  serviceURL,
  endpoint,
});

export default aemHeadlessClient;

// const AdobeAemHeadlessClientJs = require('https://cdn.skypack.dev/pin/@adobe/aem-headless-client-js@v3.2.0-R5xKUKJyh8kNAfej66Zg/mode=imports,min/optimized/@adobe/aem-headless-client-js.js');

// const { config } = require('./config.js');

// const { SERVICE_URI, GRAPHQL_ENDPOINT } = config;
// const serviceURL = SERVICE_URI;
// const endpoint = GRAPHQL_ENDPOINT;

// const aemHeadlessClient = new AdobeAemHeadlessClientJs({
//   serviceURL: serviceURL,
//   endpoint: endpoint,
// });

// module.exports = aemHeadlessClient;
