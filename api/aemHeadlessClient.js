// eslint-disable-next-line import/no-unresolved
import AdobeAemHeadlessClientJs from 'https://cdn.skypack.dev/pin/@adobe/aem-headless-client-js@v3.2.0-R5xKUKJyh8kNAfej66Zg/mode=imports,min/optimized/@adobe/aem-headless-client-js.js';

import { config } from './config.js';

const { SERVICE_URI, GRAPHQL_ENDPOINT, AUTH_TOKEN } = config;
const serviceURL = SERVICE_URI;
const endpoint = GRAPHQL_ENDPOINT;
const auth = AUTH_TOKEN;

const aemHeadlessClient = new AdobeAemHeadlessClientJs({
  serviceURL,
  endpoint,
  auth,
});

export default aemHeadlessClient;
