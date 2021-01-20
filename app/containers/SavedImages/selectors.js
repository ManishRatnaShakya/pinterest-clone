import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the savedImages state domain
 */

const selectSavedImagesDomain = state => state.savedImages || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SavedImages
 */

const makeSelectSavedImages = () =>
  createSelector(
    selectSavedImagesDomain,
    substate => substate,
  );

export default makeSelectSavedImages;
export { selectSavedImagesDomain };
