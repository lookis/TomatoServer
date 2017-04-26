/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'forgot.title',
    defaultMessage: '忘记密码',
  },
  email: {
    id: 'forgot.email',
    defaultMessage: '邮件地址',
  },
  send: {
    id: 'forgot.send',
    defaultMessage: '发送密码重置链接',
  },
});

export default class extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginTop: `${60}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title"><FormattedMessage {...messages.title} /></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <div className="alert alert-danger"><p>邮箱地址格式错误:123</p></div>
                <form method="post" id="main-form" className="form-horizontal label-right">
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="email"><FormattedMessage {...messages.email} /></label>
                    <div className="col-sm-4">
                      <input type="text" id="email" name="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-4">
                      <button id="submit" type="submit" className="btn btn-block btn-lg btn-success">
                        <span className="small-circle"><i className="fa fa-caret-right" /></span>
                        <small><FormattedMessage {...messages.send} /></small>
                      </button>
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
