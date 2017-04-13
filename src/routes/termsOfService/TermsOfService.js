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
      <div className="container landing">
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav pull-right navbar-menu hidden-xs">
              <li>
                <Link to={'/'}>
                  首页
                </Link>
              </li>
              <li>
                <Link to={'/faq'}>
                  常见问题
                </Link>
              </li>
              <li>
                <Link to={'/signin'}>
                  登录
                </Link>
              </li>
              <li>
                <Link to={'/signup'}>
                  注册
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body" style={{ padding: `${20}px`, paddingTop: `${0}px`, fontSize: `${14}px` }}>
                <h3>番茄网络服务协议</h3>
                <p />
                <h4>用户有以下权益</h4>
                1. 3日内无条件<span className="text-success">全额退款</span>(说明:仅对同一用户或相同支付方式的首次购买)。<br />
                2. 使用过程中可以<span className="text-success">随时退款</span>,需要扣除已使用时长的费用。<br />
                <p />
                <p />
                <h4>番茄网络保留以下权利</h4>
                1. 如果因用户发送垃圾邮件,下载盗版软件,音像制品等行为造成番茄网络被投诉或服务器IP被封, 番茄网络有权<span className="text-danger">关闭用户账号</span>，并返还未使用账户余额(扣除番茄网络的损失费用后)
                <p />
                <p />
                <h4>隐私声明</h4>
                番茄网络会保存用户的以下信息:<br />
                1. 注册邮箱<br />
                2. 番茄网络版本，以及设备的唯一标示<br />
                3. 番茄网络客户端与服务器的连接延迟，丢包率，路由信息<br />
                <p />
              </div>

            </section>
          </div>
        </div>
      </div>
    );
  }
}
