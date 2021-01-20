/*
 *
 * Homepage reducer
 *
 */
import produce from 'immer';
import { ACTION_GET_IMAGES } from './constants';

export const initialState = {
  images: [],
  saved: [],
  loading: false,
  error: '',
};
console.log('reducer');
/* eslint-disable default-case, no-param-reassign */
const homepageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ACTION_GET_IMAGES.GET_IMAGES:
        return {
          loading: true,
          images: [],
          error: '',
        };
      case ACTION_GET_IMAGES.GET_IMAGES_SUCCESS:
        return {
          loading: false,
          images: action.images,
          error: '',
        };

      case ACTION_GET_IMAGES.SAVE_IMAGES:
        return {
          loading: false,
          images: action.images,
          saved: action.id,
          error: '',
        };
      case ACTION_GET_IMAGES.GET_IMAGES_ERROR:
        return {
          loading: false,
          images: [],
          error: action.error,
        };
        break;
    }
  });

export default homepageReducer;
