/**
 *
 * Asynchronously loads the component for SavedImages
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
