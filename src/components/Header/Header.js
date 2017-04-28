/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import { defineMessages, FormattedMessage } from 'react-intl';
import { graphql } from 'react-apollo';
import query from './header.graphql';
import Link from '../Link';

const messages = defineMessages({
  sitename: {
    id: 'header.sitename',
    defaultMessage: '番茄网络',
    description: 'Site Name in header',
  },
  home: {
    id: 'header.home',
    defaultMessage: '首页',
    description: 'Home in header',
  },
  faq: {
    id: 'header.faq',
    defaultMessage: '常见问题',
    description: 'Faq in header',
  },
  signin: {
    id: 'header.signin',
    defaultMessage: '登录',
    description: 'Signin in header',
  },
  signup: {
    id: 'header.signup',
    defaultMessage: '注册',
    description: 'Signup in header',
  },
  dashboard: {
    id: 'header.dashboard',
    defaultMessage: '用户中心',
    description: 'Dashboard in header',
  },
  orders: {
    id: 'header.orders',
    defaultMessage: '历史订单',
    description: 'Orders in header',
  },
  forgot_password: {
    id: 'header.forgot_password',
    defaultMessage: '忘记密码',
    description: 'Forgot Password in header',
  },
  invite: {
    id: 'header.invite',
    defaultMessage: '奖励时长',
    description: 'Invite in header',
  },
  signout: {
    id: 'header.signout',
    defaultMessage: '退出登录',
    description: 'Signout in header',
  },
});

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.string.isRequired,
    data: PropTypes.shape({
      me: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  handleSignout = (e) => {
    e.preventDefault();
    this.signout.submit();
  }

  nologin() {
    return (
      <div className="container landing">
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav pull-right navbar-menu hidden-xs">
              <li className={this.props.location === '/' ? 'active' : ''}>
                <Link to={'/'}>
                  <FormattedMessage {...messages.home} />
                </Link>
              </li>
              <li className={this.props.location === '/faq' ? 'active' : ''}>
                <Link to={'/faq'}>
                  <FormattedMessage {...messages.faq} />
                </Link>
              </li>
              <li className={this.props.location === '/signin' ? 'active' : ''}>
                <Link to={'/signin'}>
                  <FormattedMessage {...messages.signin} />
                </Link>
              </li>
              <li className={this.props.location === '/signup' ? 'active' : ''}>
                <Link to={'/signup'}>
                  <FormattedMessage {...messages.signup} />
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }

  logined(me) {
    return (
      <nav id="dashboard-nav" className="tomato-main-nav navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#global-nav">
              <span className="sr-only"><FormattedMessage {...messages.sitename} /></span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to={'/'}><FormattedMessage {...messages.sitename} /></Link>
          </div>

          <div className="collapse navbar-collapse" id="#global-nav">
            <ul className="nav navbar-nav">
              <li className={['/dashboard', '/wallet', '/orders', '/order'].includes(this.props.location) ? 'active' : ''}>
                <Link to={'/dashboard'}><FormattedMessage {...messages.dashboard} /></Link>
              </li>

              <li className={this.props.location === '/faq' ? 'active' : ''}>
                <Link to={'/faq'}>
                  <FormattedMessage {...messages.faq} />
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to={'/dashboard#'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
                  <img style={{ width: `${32}px`, height: `${32}px` }} className="img-rounded" alt="avatar" src={`https://www.gravatar.com/avatar/${md5(me.email)}`} />&nbsp;&nbsp;{me.email}<b className="caret" /></Link>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to={'/orders'}>
                      <i className="fa fa-book" />
                      &nbsp;&nbsp;<FormattedMessage {...messages.orders} />
                    </Link>
                  </li>
                  <li>
                    <Link to={'/forgot_password'}>
                      <i className="fa fa-key" />
                      &nbsp;&nbsp;<FormattedMessage {...messages.forgot_password} />
                    </Link></li>
                  <li>
                    <Link to={'/invite'}>
                      <i className="fa fa-share-square-o" />
                      &nbsp;&nbsp;<FormattedMessage {...messages.invite} />
                    </Link></li>
                  <li className="divider" />
                  <li>
                    <form action="/signout" method="post" ref={(signout) => { this.signout = signout; }} />
                    <Link to={'/'} onClick={e => this.handleSignout(e)}>
                      <i className="fa fa-sign-out" />
                      &nbsp;&nbsp;<FormattedMessage {...messages.signout} />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    const { data: { me } } = this.props;
    if (!me) {
      return this.nologin();
    }
    return this.logined(me);
  }
}

export default graphql(query)(Header);
