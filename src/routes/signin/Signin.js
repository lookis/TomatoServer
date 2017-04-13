/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Link from '../../components/Link';

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="single-widget-container">
        <section className="widget login-widget">
          <header className="text-align-center">
            <h4>登录番茄网络</h4>
          </header>
          <div className="body">
            <form id="main-form" className="no-margin" method="post">
              <fieldset>
                <div className="form-group ">

                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                    <input id="email" name="email" type="email" className="form-control input-lg" placeholder="邮箱" />
                  </div>
                </div>
                <div className="form-group">

                  <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input id="password" name="password" type="password" className="form-control input-lg" placeholder="密码" />
                  </div>
                </div>
              </fieldset>
              <div className="form-actions">
                <button type="submit" className="btn btn-block btn-lg btn-success">
                  <span className="small-circle">
                    <i className="fa fa-caret-right" />
                  </span>
                  <small>登录</small>
                </button>
                <div className="forgot">
                  <Link to={'/signup'}>注册账号</Link>
                  <Link to={'/forgot_password'}>忘记密码?</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
