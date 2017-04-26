/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
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
});

class Signin extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
  };
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="single-widget-container">
        <section className="widget login-widget">
          <header className="text-align-center">
            <h4><FormattedMessage {...messages.title} /></h4>
          </header>
          <div className="body">
            <div className="alert alert-danger"><p>邮箱地址格式错误:123</p></div>
            <form id="main-form" className="no-margin" method="post">
              <fieldset>
                <div className="form-group ">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                    <input id="username" name="username" type="email" className="form-control input-lg" placeholder={formatMessage(messages.email)} />
                  </div>
                </div>
                <div className="form-group">

                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input id="password" name="password" type="password" className="form-control input-lg" placeholder={formatMessage(messages.password)} />
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
