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
                  <Link to={'/wallet#'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
                    <img alt="avatar" style={{ width: `${32}px`, height: `${32}px` }} className="img-rounded" src="./static/15211395ce115c7f4bff646618ad368c" />&nbsp;&nbsp;lookisliu@gmail.com<b className="caret" />
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
                  <li className="active">
                    <i className="fa fa-cny" /> 钱包余额
                  </li>
                </ol>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <header>
                  <h4>
                    <i className="fa fa-cny" />&nbsp;&nbsp;我的钱包
                  </h4>
                </header>
                <div className="body" id="wallet-container">
                  <p>钱包是空的。</p>
                </div>
              </section>
              <section className="widget">
                <header>
                  <h4>
                    <i className="fa fa-rss" />&nbsp;&nbsp;消费历史
                  </h4>
                </header>
                <div className="body">
                  <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                    <form id="TN_Table_9_form">
                      <table id="TN_Table_9_table" className="table table-striped">
                        <tbody>
                          <tr>
                            <th width="16.666666666666664%">描述</th>
                            <th width="16.666666666666664%">货币</th>
                            <th width="16.666666666666664%">收入/支出</th>
                            <th width="16.666666666666664%">钱包余额</th>
                            <th width="8.333333333333332%">订单</th>
                            <th width="25%">时间</th>
                          </tr>
                          <tr className="">
                            <td>支付订单</td>
                            <td>人民币</td>
                            <td>
                              <span className="text-default">-¥185.40</span>
                            </td>
                            <td>
                              <span className="text-success">¥0.00</span>
                            </td>
                            <td>
                              <Link to={'/order?id=2015092110221338558'}>详情</Link>
                            </td>
                            <td className="gray">2015/09/21 上午 10:24</td>
                          </tr>
                          <tr className="">
                            <td>第三方支付充值</td>
                            <td>人民币</td>
                            <td>
                              <span className="text-success">+¥185.40</span>
                            </td>
                            <td>
                              <span className="text-success">¥185.40</span>
                            </td>
                            <td>
                              <Link to={'/order?id=2015092110221338558'}>详情</Link>
                            </td>
                            <td className="gray">2015/09/21 上午 10:24</td>
                          </tr>
                          <tr className="">
                            <td>支付订单</td>
                            <td>人民币</td>
                            <td>
                              <span className="text-default">-¥9.00</span>
                            </td>
                            <td>
                              <span className="text-success">¥0.00</span>
                            </td>
                            <td>
                              <Link to={'/order?id=2015092110221338558'}>详情</Link>
                            </td>
                            <td className="gray">2015/09/21 上午 10:22</td>
                          </tr>
                          <tr className="">
                            <td>取消产品退款</td>
                            <td>人民币</td>
                            <td>
                              <span className="text-success">+¥9.00</span>
                            </td>
                            <td>
                              <span className="text-success">¥9.00</span>
                            </td>
                            <td>
                              <Link to={'/order?id=2015092004325669445'}>详情</Link>
                            </td>
                            <td className="gray">2015/09/21 上午 10:21</td>
                          </tr>
                          <tr className="">
                            <td>支付订单</td>
                            <td>人民币</td>
                            <td>
                              <span className="text-default">-¥9.00</span>
                            </td>
                            <td>
                              <span className="textSuccess">¥0.00</span>
                            </td>
                            <td>
                              <Link to={'/order?id=2015092004325669445'}>详情</Link>
                            </td>
                            <td className="gray">2015/09/20 上午 4:36</td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                    <div id="TN_Table_9_pager">
                      <ul className="pagination">
                        <li>
                          <span className="data-count">共<b>8</b>条</span>
                        </li>
                        <li className="active">
                          <Link data-page="1" to={'/wallet'} onClick={() => false}>1</Link>
                        </li>
                        <li>
                          <Link data-page="2" to={'/wallet'} onClick={() => false}>2</Link>
                        </li>
                        <li>
                          <Link data-action="next" to={'/wallet'} onClick={() => false}>下一页</Link>
                        </li>
                        <li>
                          <Link data-action="last" to={'/wallet'} onClick={() => false}>尾页</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
