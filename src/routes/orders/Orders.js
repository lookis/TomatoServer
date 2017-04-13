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
                  <Link to={'/orders#'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
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
                  <li className="active">
                    <i className="fa fa-book" /> 所有订单
                  </li>
                </ol>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <div className="body">
                  <div id="error-con" />
                  <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                    <form id="TN_Table_7_form">
                      <table id="TN_Table_7_table" className="table table-striped">
                        <tbody>
                          <tr>
                            <th width="18.181818181818183%">产品</th>
                            <th width="9.090909090909092%">总价</th>
                            <th width="9.090909090909092%">状态</th>
                            <th width="27.27272727272727%">创建时间</th>
                            <th width="36.36363636363637%" style={{ textAlign: 'center' }}>操作</th>
                          </tr>
                          <tr className="">
                            <td>番茄网络加速代理</td>
                            <td>¥18.00</td>
                            <td>
                              <span className="text-default">已取消</span>
                            </td>
                            <td className="gray">04/06 下午 4:47</td>
                            <td className="tn-tb-ac">
                              <Link to={'/orders#nogo'} data-index="2017040616470516842" data-ac="%E8%AF%A6%E6%83%85">详情</Link>
                            </td>
                          </tr>
                          <tr className="">
                            <td>番茄网络加速代理</td>
                            <td>¥194.40</td>
                            <td>
                              <span className="text-success">完成</span>
                            </td>
                            <td className="gray">2015/09/21 上午 10:22</td>
                            <td className="tn-tb-ac">
                              <Link to={'/orders#nogo'} data-index="2015092110221338558" data-ac="%E8%AF%A6%E6%83%85">详情</Link>
                            </td>
                          </tr>
                          <tr className="">
                            <td>番茄网络加速代理</td>
                            <td>¥9.00</td>
                            <td>
                              <span className="text-success">完成</span>
                            </td>
                            <td className="gray">2015/09/20 上午 4:32</td>
                            <td className="tn-tb-ac">
                              <Link to={'/orders#nogo'} data-index="2015092004325669445" data-ac="%E8%AF%A6%E6%83%85">详情</Link>
                            </td>
                          </tr>
                          <tr className="">
                            <td>番茄网络加速代理</td>
                            <td>¥9.00</td>
                            <td>
                              <span className="textSuccess">完成</span>
                            </td>
                            <td className="gray">2015/08/19 上午 9:55</td>
                            <td className="tn-tb-ac">
                              <Link to={'/orders#nogo'} data-index="2015081909554828305" data-ac="%E8%AF%A6%E6%83%85">详情</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                    <div id="TN_Table_7_pager">
                      <ul className="pagination">
                        <li>
                          <span className="data-count">共<b>4</b>条</span>
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
