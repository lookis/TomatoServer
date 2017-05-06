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
  generalSuccess: {
    id: 'forgot.success',
    defaultMessage: '密码重置邮件已发送，可能会有3-5分钟延迟，请注意查收',
  },
  generalError: {
    id: 'forgot.generalError',
    defaultMessage: '出错了，请稍后再试',
  },
});

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      error: null,
      success: null,
    };
  }

  handleReset = (e) => {
    e.preventDefault();
  }

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
                {this.state.success ? <div className="alert alert-success">
                  <p><FormattedMessage
                    {...
                      this.state.success in messages ?
                        messages[this.state.success] : messages.generalSuccess
                    }
                  /></p>
                </div> : <div />}
                {this.state.error ? <div className="alert alert-danger">
                  <p><FormattedMessage
                    {...
                      this.state.error in messages ?
                        messages[this.state.error] : messages.generalError
                    }
                  /></p>
                </div> : <div />}
                <form method="post" id="main-form" className="form-horizontal label-right" onSubmit={e => this.handleReset(e)}>
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="email"><FormattedMessage {...messages.email} /></label>
                    <div className="col-sm-4">
                      <input type="text" id="email" name="email" className="form-control" ref={(email) => { this.email = email; }} />
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
