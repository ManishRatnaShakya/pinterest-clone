/*
 *
 * Homepage actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { ACTION_GET_IMAGES } from './constants';
export function images() {
  console.log('Images');
  return {
    type: ACTION_GET_IMAGES.IMAGES,
  };
}

export const getImages = () => ({
  type: ACTION_GET_IMAGES.GET_IMAGES,
});

export const getImagesSuccess = images => ({
  type: ACTION_GET_IMAGES.GET_IMAGES_SUCCESS,
  images,
});
export const getImagesFailure = error => ({
  type: ACTION_GET_IMAGES.GET_IMAGES_ERROR,
  error,
});
