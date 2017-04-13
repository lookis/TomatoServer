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

class Home extends React.Component {

  render() {
    return (
      <div className="container landing">
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav pull-right navbar-menu hidden-xs">
              <li className="active">
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
        <div className="row" style={{ marginTop: `${90}px`, marginBottom: `${40}px` }}>
          <div className="col-sm-5" style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 200 }}>番茄网络 1.8.1</h1>
            <h3 style={{ fontWeight: 200 }}>穿梭网络海洋<br />从未如此简单</h3>
            <p>
              <Link style={{ fontSize: `${18}px` }} to={'/make_plan'} className="btn btn-sm btn-success">
                仅需 ¥9/月
                <i className="fa fa-shopping-cart" />
              </Link>
            </p>
            <p>系统要求: Mac OS X10.7或更高版本</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
