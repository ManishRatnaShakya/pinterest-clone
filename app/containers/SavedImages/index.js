/**
 *
 * SavedImages
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSavedImages from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SavedImages() {
  useInjectReducer({ key: 'savedImages', reducer });
  useInjectSaga({ key: 'savedImages', saga });

  return <div>hello from sve</div>;
}

SavedImages.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  savedImages: makeSelectSavedImages(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SavedImages);
