/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import Link from '../../components/Link';

const messages = defineMessages({
  title: {
    id: 'signin.title',
    defaultMessage: '登陆番茄网络',
  },
  email: {
    id: 'signin.email',
    defaultMessage: '邮箱',
  },
  password: {
    id: 'signin.password',
    defaultMessage: '密码',
  },
  login: {
    id: 'signin.login',
    defaultMessage: '登录',
  },
  register: {
    id: 'signin.register',
    defaultMessage: '注册账号',
  },
  forgotPassword: {
    id: 'signin.forgotPassword',
    defaultMessage: '忘记密码',
  },
  errorUsername: {
    id: 'signin.error.username.empty',
    defaultMessage: '请填写用户名',
  },
  errorPassword: {
    id: 'signin.error.password.empty',
    defaultMessage: '请填写密码',
  },
  errorLogin: {
    id: 'signin.error.credential',
    defaultMessage: '用户名或者密码错，请重试',
  },
  generalError: {
    id: 'signup.generalError',
    defaultMessage: '出错了，请稍后再试',
  },
});

class Signin extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    e: PropTypes.string,
    next: PropTypes.string,
  };

  static defaultProps = {
    e: undefined,
    next: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      error: props.e !== undefined ? 'errorLogin' : null,
    };
  }

  handleSignin = () => {
    if (this.email.value.length === 0) {
      this.setState({
        error: 'errorUsername',
      });
      return false;
    } else if (this.password.value.length === 0) {
      this.setState({
        error: 'errorPassword',
      });
      return false;
    }
    return true;
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="single-widget-container">
        <section className="widget login-widget">
          <header className="text-align-center">
            <h4><FormattedMessage {...messages.title} /></h4>
          </header>
          <div className="body">
            {this.state.error ? <div className="alert alert-danger">
              <p><FormattedMessage
                {...
                  this.state.error in messages ?
                    messages[this.state.error] : messages.generalError
                }
              /></p>
            </div> : <div />}
            <form id="main-form" className="no-margin" method="post" action="/signin" onSubmit={e => this.handleSignin(e)}>
              <fieldset>
                <input type="hidden" name="next" value={this.props.next} />
                <div className="form-group ">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                    <input
                      id="username" name="username" type="email" className="form-control input-lg"
                      placeholder={formatMessage(messages.email)}
                      ref={(username) => { this.email = username; }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      id="password" name="password" type="password" className="form-control input-lg"
                      placeholder={formatMessage(messages.password)}
                      ref={(password) => { this.password = password; }}
                    />
                  </div>
                </div>
              </fieldset>
              <div className="form-actions">
                <button type="submit" className="btn btn-block btn-lg btn-success">
                  <span className="small-circle">
                    <i className="fa fa-caret-right" />
                  </span>
                  <small><FormattedMessage {...messages.login} /></small>
                </button>
                <div className="forgot">
                  <Link to={'/signup'}>
                    <FormattedMessage {...messages.register} />
                  </Link> <Link to={'/forgot_password'}>
                    <FormattedMessage {...messages.forgotPassword} />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default injectIntl(Signin);
