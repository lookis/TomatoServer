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
import fetch from '../../core/fetch';

const messages = defineMessages({
  title: {
    id: 'signup.title',
    defaultMessage: '注册番茄网络',
  },
  subtitle: {
    id: 'signup.subtitle',
    defaultMessage: '填写信息',
  },
  email: {
    id: 'signup.email',
    defaultMessage: '邮箱',
  },
  emailPlaceholder: {
    id: 'signup.emailPlaceholder',
    defaultMessage: '不推荐使用qq邮箱,可能无法收到邮件',
  },
  password: {
    id: 'signup.password',
    defaultMessage: '密码',
  },
  tos1: {
    id: 'signup.tos1',
    defaultMessage: '我已阅读并接受',
  },
  tos2: {
    id: 'signup.tos2',
    defaultMessage: '服务协议',
  },
  register: {
    id: 'signup.register',
    defaultMessage: '注册',
  },
  toLogin: {
    id: 'signup.toLogin',
    defaultMessage: '已有账号?点击登录',
  },
  'unique violation': {
    id: 'signup.uniqueViolation',
    defaultMessage: '该邮箱已注册',
  },
  'Validation error': {
    id: 'signup.validationError',
    defaultMessage: '邮箱格式错误',
  },
  generalError: {
    id: 'signup.generalError',
    defaultMessage: '出错了，请稍后再试',
  },
});

class Signup extends React.Component {

  static propTypes = {
    intl: intlShape.isRequired,
  };

  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  handleSignup = (e) => {
    e.preventDefault();
    fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation {
            createAccount(email:"${this.email.value}", password: "${this.password.value}") {
              account {
                id,
                email,
              },
              errors
            }
          }
        `,
      }),
      credentials: 'include',
    }).then(resp => resp.json())
    .then((r) => {
      console.log(r);
      if (r.data && r.data.createAccount) {
        if (r.data.createAccount.account) {
          this.signinUsername.value = this.email.value;
          this.signinPassword.value = this.password.value;
          this.signin.submit();
        } else {
          this.setState({
            error: r.data.createAccount.errors[0],
          });
        }
      }
    });
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="container" style={{ marginTop: `${60}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title"><FormattedMessage {...messages.title} /><small><FormattedMessage {...messages.subtitle} /></small>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                {this.state.error ? <div className="alert alert-danger">
                  <p><FormattedMessage
                    {...
                    this.state.error in messages ?
                    messages[this.state.error] : messages.generalError
                  }
                  /></p>
                </div> : <div />}
                <form id="signin-form" action="/signin" method="post" ref={(signin) => { this.signin = signin; }}>
                  <input type="hidden" name="username" ref={(username) => { this.signinUsername = username; }} />
                  <input type="hidden" name="password" ref={(password) => { this.signinPassword = password; }} />
                </form>
                <form
                  method="post" id="reg-form" className="form-horizontal label-right"
                  onSubmit={e => this.handleSignup(e)}
                >
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="email"><FormattedMessage {...messages.email} /></label>
                    <div className="col-sm-5">
                      <input
                        type="email" placeholder={formatMessage(messages.emailPlaceholder)} id="username" name="username"
                        className="form-control"
                        ref={(input) => { this.email = input; }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="password"><FormattedMessage {...messages.password} /></label>
                    <div className="col-sm-5">
                      <input
                        type="password" id="password" name="password" className="form-control"
                        ref={(input) => { this.password = input; }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                      <span className="fa fa-check-square-o">
                        <FormattedMessage {...messages.tos1} />
                      </span>
                      <Link to={'/signup#tos-dialog'} data-toggle="modal" data-target="#tos-dialog"><FormattedMessage {...messages.tos2} /></Link>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-4">
                      <p>
                        <button
                          id="submit" type="submit"
                          style={{ width: `${180}px` }} className="btn btn-lg btn-success"
                        >
                          <span className="small-circle">
                            <i className="fa fa-caret-right" />
                          </span>
                          <small><FormattedMessage {...messages.register} /></small>
                        </button>
                      </p>
                      <p>
                        <Link to={'/signin'}><FormattedMessage {...messages.toLogin} /></Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Signup);
