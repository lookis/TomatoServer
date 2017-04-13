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
                  <Link to={'/dashboard#'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
                    <img style={{ width: `${32}px`, height: `${32}px` }} className="img-rounded" alt="avatar" src="./用户中心 - 番茄网络官网_files/15211395ce115c7f4bff646618ad368c" />&nbsp;&nbsp;lookisliu@gmail.com<b className="caret" /></Link>
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
                      </Link></li>
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
        <div className="container" style={{ marginTop: `${30}px` }}>

          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <header>
                  <h4><i className="fa fa-cloud" />&nbsp;&nbsp;服务信息</h4>
                </header>
                <div className="body">
                  <table className="table table-striped">
                    <tbody><tr>
                      <th width="20%">模式</th>
                      <th width="15%">支持设备</th>
                      <th width="35%">时长</th>
                      <th width="30%">操作</th>
                    </tr>
                      <tr>
                        <td>
                        大陆 -&gt; 海外</td>
                        <td>
                        2</td>
                        <td>
                        15年9月21日 - 16年9月21日 <span className="text-danger">已过期</span>
                        </td>
                        <td>
                          <Link className="btn btn-success" to={'/make_plan'}>续费</Link>
                        </td>
                      </tr><tr /></tbody></table>
                </div>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <header>
                  <h4><i className="fa fa-laptop" />&nbsp;&nbsp;我的设备
                  </h4>
                  <div className="actions">
                    <Link id="device-setting-btn" to={'/dashboard#nogo'} className="gray">
                      <i className="fa fa-cog" />&nbsp;设置&nbsp;</Link>
                  </div>
                </header>
                <div id="device-list" className="body" style={{ position: 'relative', minHeight: `${100}px` }}><form id="TN_Table_6_form"><table id="TN_Table_6_table" className="table table-striped"><tbody><tr><th width="20.833333333333336%">设备ID</th><th width="20.833333333333336%">番茄网络版本</th><th width="31.25%">最后在线IP</th><th width="6.25%">状态</th><th width="20.833333333333336%" style={{ textAlign: 'center' }}>操作</th></tr><tr className=""><td><span className="fish-tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="MACC02MN99BG083"> Macbook Air&nbsp;<span style={{ fontSize: `${12}px` }} className="gray glyphicon glyphicon-info-sign" /></span></td><td>1.6.3-68</td><td>115.34.126.217(北京市 鹏博士长城宽带)</td><td><span className="text-danger">禁用</span></td><td className="tn-tb-ac"><Link to={'/dashboard#nogo'} data-index="MACC02MN99BG083" data-ac="%E4%BF%AE%E6%94%B9">修改</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/dashboard#nogo'} data-index="MACC02MN99BG083" data-ac="%E5%88%A0%E9%99%A4">删除</Link>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><tr className=""><td><span className="fish-tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="MACC02F9CVNDH2G"> Macbook Pro&nbsp;<span style={{ fontSize: `${12}px` }} className="gray glyphicon glyphicon-info-sign" /></span></td><td>1.6.4-70</td><td>221.217.224.235(北京市东城区 联通)</td><td><span className="text-success">启用</span></td><td className="tn-tb-ac"><Link to={'/dashboard#nogo'} data-index="MACC02F9CVNDH2G" data-ac="%E4%BF%AE%E6%94%B9">修改</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/dashboard#nogo'} data-index="MACC02F9CVNDH2G" data-ac="%E5%88%A0%E9%99%A4">删除</Link>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></tbody></table></form><div id="TN_Table_6_pager"><ul className="pagination"><li><span className="data-count">共<b>2</b>条</span></li></ul></div></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

