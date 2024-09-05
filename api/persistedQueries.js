// /* eslint-disable comma-dangle */
import aemHeadlessClient from './aemHeadlessClient.js';

// eslint-disable-next-line import/prefer-default-export
export async function fetchPersistedQuery(persistedQuery, queryParameters) {
  let data;
  let error;

  try {
    const response = await aemHeadlessClient.runPersistedQuery(
      persistedQuery,
      queryParameters,
    );
    data = response?.data;
    console.log(response);
  } catch (e) {
    error = e instanceof Error ? e.message : 'An unknown error occurred';
  }

  return { data, error };
}
