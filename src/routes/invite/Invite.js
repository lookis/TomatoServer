/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import md5 from 'md5';
import Link from '../../components/Link';

class Invite extends React.Component {
  static propTypes = {
    me: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    invitations: PropTypes.arrayOf(PropTypes.shape({
      email: PropTypes.string.isRequired,
      membership: PropTypes.bool.isRequired,
      createAt: PropTypes.object.isRequired,
    }).isRequired).isRequired,
  };

  render() {
    return (
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
                  <i className="fa fa-share-square-o" /> 邀请
                  </li>
              </ol>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <header>
                  <h4><i className="fa fa-link" />
                      &nbsp;&nbsp;邀请链接
                    </h4>
                </header>
                <div id="list">
                  <form>
                    <table className="table table-striped">
                      <caption>通过邀请朋友一起来使用番茄网络，当对方付费购买后，您和朋友都将获得30天的免费使用时长，
                          该部分使用时长和付费购买的服务一致，只是不可退款</caption>
                      <tbody>
                        <tr>
                          <th width="50%">http://tomato.network/signup?i={md5(this.props.me.email)}</th>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <header>
                  <h4><i className="fa fa-share-square-o" />
                      &nbsp;&nbsp;我的邀请
                    </h4>
                </header>
                <div id="error-con" />
                <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                  <form id="TN_Table_7_form">
                    <table id="TN_Table_7_table" className="table table-striped">
                      <tbody>
                        <tr>
                          <th width="18.181818181818183%">被邀请人</th>
                          <th width="9.090909090909092%">状态</th>
                          <th width="27.27272727272727%">注册时间</th>
                        </tr>
                        {this.props.invitations.map(invitation => (
                          <tr>
                            <td>{invitation.email}</td>
                            <td><span className={invitation.membership ? 'text-success' : 'text-default'}>
                              {invitation.membership ? '已' : '未'}成为会员
                            </span></td>
                            <td className="gray">
                              {invitation.createAt.getFullYear()}年
                              {invitation.createAt.getMonth() + 1}月
                              {invitation.createAt.getDate()}日 - {invitation.createAt.getHours()}:
                              {invitation.createAt.getMinutes()}:
                              {invitation.createAt.getSeconds()}</td>
                          </tr>
                        ))}
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
    );
  }
}

export default Invite;
