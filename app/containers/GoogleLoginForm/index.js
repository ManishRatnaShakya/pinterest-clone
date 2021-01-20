/**
 *
 * GoogleLoginForm
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
import makeSelectGoogleLoginForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
export function GoogleLoginForm({ setToken, token }) {
  useInjectReducer({ key: 'googleLoginForm', reducer });
  useInjectSaga({ key: 'googleLoginForm', saga });
  const responseGoogle = res => {
    console.log('response', res);
    setToken(res.tokenId);
  };
  return (
    <div>
      {token ? (
        <Redirect to="/" />
      ) : (
        <GoogleLogin
          clientId="1083069530797-jqg5k7f4h72d7t1gd1ec63b6aat0f1tu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  googleLoginForm: makeSelectGoogleLoginForm(),
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
)(GoogleLoginForm);
