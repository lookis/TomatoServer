import React, { PropTypes } from 'react';
import md5 from 'md5';
import Link from '../Link';

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.string.isRequired,
    me: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }

  nologin() {
    return (
      <div className="container landing">
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav pull-right navbar-menu hidden-xs">
              <li className={this.props.location === '/' ? 'active' : ''}>
                <Link to={'/'}>
                  首页
                </Link>
              </li>
              <li className={this.props.location === '/faq' ? 'active' : ''}>
                <Link to={'/faq'}>
                  常见问题
                </Link>
              </li>
              <li className={this.props.location === '/signin' ? 'active' : ''}>
                <Link to={'/signin'}>
                  登录
                </Link>
              </li>
              <li className={this.props.location === '/signup' ? 'active' : ''}>
                <Link to={'/signup'}>
                  注册
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }

  logined() {
    return (
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
              <li className={['/dashboard', '/wallet', '/orders', '/order'].includes(this.props.location) ? 'active' : ''}>
                <Link to={'/dashboard'}>用户中心</Link>
              </li>

              <li className={this.props.location === '/faq' ? 'active' : ''}>
                <Link to={'/faq'}>常见问题</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to={'/dashboard#'} style={{ padding: 0, paddingTop: `${3}px` }} className="dropdown-toggle" data-toggle="dropdown">
                  <img style={{ width: `${32}px`, height: `${32}px` }} className="img-rounded" alt="avatar" src={`https://www.gravatar.com/avatar/${md5(this.props.me.email)}`} />&nbsp;&nbsp;{this.props.me.email}<b className="caret" /></Link>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to={'/wallet'}>
                      <i className="fa fa-cny" />
                      &nbsp;&nbsp;&nbsp;钱包余额
                    </Link>
                  </li>
                  <li>
                    <Link to={'/orders'}>
                      <i className="fa fa-book" />
                      &nbsp;&nbsp;历史订单
                    </Link>
                  </li>
                  <li>
                    <Link to={'/forgot_password'}>
                      <i className="fa fa-key" />
                      &nbsp;&nbsp;重置密码
                    </Link></li>
                  <li>
                    <Link to={'/invite'}>
                      <i className="fa fa-share-square-o" />
                      &nbsp;&nbsp;奖励时长
                    </Link></li>
                  <li className="divider" />
                  <li>
                    <Link to={'/signout'}>
                      <i className="fa fa-sign-out" />
                      &nbsp;&nbsp;退出登录
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
    if (this.props.me === undefined) {
      return this.nologin();
    } else {
      return this.logined();
    }
  }
}

export default Header;
