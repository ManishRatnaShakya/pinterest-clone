/**
 *
 * Homepage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomepage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { images } from './actions';
import './Style.css';
import ImageDisplay from './ImageDisplay';
import { history } from 'utils/history';
import GoogleLoginForm from '../GoogleLoginForm';
// import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
export function Homepage(props) {
  // const history = useHistory();
  useInjectReducer({ key: 'homepage', reducer });
  useInjectSaga({ key: 'homepage', saga });
  console.log('from index', props.homepage);

  if (!props.token) {
    // history.push('/login');
  }
  useEffect(() => {
    props.onFetch();
  }, []);
  return (
    <div className="main-container">
      {!props.token ? (
        <Redirect to="/login" />
      ) : (
        <div className="container">
          {props.homepage.images.map(image => (
            <ImageDisplay image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

Homepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomepage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetch: () => dispatch(images()),
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
)(Homepage);
