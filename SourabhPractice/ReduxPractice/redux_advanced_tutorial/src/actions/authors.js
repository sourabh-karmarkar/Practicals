import * as actions from '../consts/action-types';
import * as schema from '../lib/schema';

export const setAuthors = (payload) => ({
  type: actions.SET_AUTHORS,
  payload
});

export const fetchAuthors = () => ({
  type: actions.API,
  payload: {
    url: 'api/authors.json',
    success: ({ entities }) => setAuthors(entities.authors),
    schema: [schema.authors],
    label: 'authors'
  },
  meta: {
    throttle: 2000
  }
});