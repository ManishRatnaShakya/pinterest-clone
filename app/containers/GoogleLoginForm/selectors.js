import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the googleLoginForm state domain
 */

const selectGoogleLoginFormDomain = state =>
  state.googleLoginForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoogleLoginForm
 */

const makeSelectGoogleLoginForm = () =>
  createSelector(
    selectGoogleLoginFormDomain,
    substate => substate,
  );

export default makeSelectGoogleLoginForm;
export { selectGoogleLoginFormDomain };
