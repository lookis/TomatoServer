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
      <div className="container" style={{ marginTop: `${60}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title">重置密码</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <form method="post" id="main-form" className="form-horizontal label-right">
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="email">邮箱</label>
                    <div className="col-sm-4">
                      <input type="text" id="email" name="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="verify">验证码</label>
                    <div className="col-sm-4">
                      <input type="text" id="verify" name="verify" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-7">
                      <Link to={'/forgot_password#nogo'} onClick={() => false}>
                        <img alt="captcha" src="./static/verify_image.jpg" />
                        <br />看不清?换一张
                      </Link>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-4">
                      <button id="submit" type="submit" className="btn btn-block btn-lg btn-success">
                        <span className="small-circle"><i className="fa fa-caret-right" /></span>
                        <small>发送密码重置链接</small>
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
