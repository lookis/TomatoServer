/* eslint-disable jsx-a11y/label-has-for */
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
      <div>
        <nav id="dashboard-nav" className="tomato-main-nav navbar navbar-default" role="navigation">

          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#global-nav">
                <span className="sr-only">显示导航</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to={'/'}>番茄网络</Link>
            </div>

            <div className="collapse navbar-collapse" id="#global-nav">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to={'/dashboard'}>用户中心</Link>
                </li>
                <li>
                  <Link to={'/faq'}>常见问题</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <Link to={'/order'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
                    <img style={{ width: `${32}px`, height: `${32}px` }} alt="avatar" className="img-rounded" src="./static/15211395ce115c7f4bff646618ad368c" />&nbsp;&nbsp;lookisliu@gmail.com<b className="caret" />
                  </Link>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <Link to={'/wallet'}>
                        <i className="fa fa-cny" />
                        &nbsp;&nbsp;钱包余额
                      </Link>
                    </li>
                    <li>
                      <Link to={'/orders'}>
                        <i className="fa fa-book" />
                        历史订单
                      </Link>
                    </li>
                    <li>
                      <Link to={'/forgot_password'}>
                        <i className="fa fa-key" />
                        重置密码
                      </Link>
                    </li>
                    <li className="divider" />
                    <li>
                      <Link to={'/signout?_csrf=1535bf6328ac5e0cdd290fa14e8c0cf9'}>
                        <i className="fa fa-sign-out" />退出登录
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <ol className="breadcrumb">
                  <li>
                    <Link to={'/dashboard'}>
                      <i className="fa fa-user" /> 用户中心
                    </Link>
                  </li>
                  <li>
                    <Link to={'/orders'}>
                      <i className="fa fa-book" /> 所有订单
                    </Link>
                  </li>
                  <li className="active">订单详情</li>
                </ol>
              </section>
            </div>
          </div>
          <form id="main-form">
            <div className="row">
              <div className="col-md-12">
                <section className="widget">
                  <div className="body">
                    <div id="error-con" />
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>产品名称</th>
                          <th>详情</th>
                          <th>价格</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>番茄网络加速代理</td>
                          <td>
                            <p className="gray" style={{ paddingLeft: `${10}px` }}>
                            加速模式:大陆-&gt;海外<br />设备数:2<br />购买时长:1个月 4月6日 - 5月6日<br />
                            </p>
                          </td>
                          <td>¥18/$3</td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ paddingLeft: `${20}px` }}>
                      <p>
                        <label>订单编号：</label>
                        <span className="gray">2017040616470516842</span>
                      </p>
                      <p>
                        <label>创建时间：</label>
                        <span className="gray">04/06 下午 4:47</span>
                      </p>
                      <p>
                        <label>订单状态：</label>
                        <span
                          style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${20}px`, fontSize: `${14}px` }} className="label
                      label-default"
                        >已取消</span>
                      </p>
                      <p>
                        <label>支付币种：</label>人民币
                      </p>
                      <div id="fee">
                        <input type="hidden" name="total_due" value="18" />
                        <p><label>应付总额：</label>¥18</p>
                        <p>
                          <label>支付方式：</label>
                          支付宝
                        </p>
                        <input type="hidden" name="third_pay_money_count" value="18" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
