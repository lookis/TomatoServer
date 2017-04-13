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
            <h2 className="page-title">注册番茄网络<small>填写信息</small>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <form method="post" id="reg-form" className="form-horizontal label-right">
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="email">邮箱</label>
                    <div className="col-sm-5">
                      <input type="text" placeholder="不推荐使用qq邮箱,可能无法收到邮件" id="email" name="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label" htmlFor="password">密码</label>
                    <div className="col-sm-5">
                      <input type="password" id="password" name="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-4">
                      <div className="checkbox">
                        <input id="tos-check" type="checkbox" name="tos_accept" value="1" />
                        <label htmlFor="tos-check">
                          我已阅读并接受
                        </label>
                        <Link to={'/signup#tos-dialog'} data-toggle="modal" data-target="#tos-dialog">服务协议</Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-4">
                      <p>
                        <button id="submit" type="submit" style={{ width: `${180}px` }} className="btn btn-lg btn-success">
                          <span className="small-circle">
                            <i className="fa fa-caret-right" />
                          </span>
                          <small>注册</small>
                        </button>
                      </p>
                      <p>
                        <Link to={'/signin'}>已有账号?点击登录</Link>
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
