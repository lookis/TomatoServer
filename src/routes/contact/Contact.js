/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link'

export default class extends React.Component {

  render() {
    return (
      <div className="container landing">
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav pull-right navbar-menu hidden-xs">
              <li>
                <Link to={'/'}>首页</Link>
              </li>
              <li>
                <Link to={'/faq'}>常见问题</Link>
              </li>
              <li>
                <Link to={'/signin'}>登录</Link>
              </li>
              <li>
                <Link to={'/signup'}>注册</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <header>
                <h4><i className="fa fa-envelope-o" />&nbsp;&nbsp;联系我们</h4>
              </header>
              <div className="body" style={{ padding: `${20}px` }}>
                <p>
                  番茄网络目前未开设任何社交账号，唯一联系邮箱：<a href="mailto:tomato@protonmail.com">tomato@protonmail.com</a>
                </p>
                <ol>
                  <li>请不要使用qq邮箱来信，很可能收不到回信。</li>
                  <li>请不要来信询问是否支持Mac以外的其他系统。</li>
                  <li>如果您不满意我们的服务可以自助取消产品，并提现余额。</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
