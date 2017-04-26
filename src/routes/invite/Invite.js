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
import Link from '../../components/Link';
import { host } from '../../config';

const messages = defineMessages({
  breadcrumbDashboard: {
    id: 'breadcrumb.dashboard',
    defaultMessage: '用户中心',
  },
  breadcrumbInvite: {
    id: 'breadcrumb.invite',
    defaultMessage: '邀请',
  },
  title: {
    id: 'invite.title',
    defaultMessage: '邀请链接',
  },
  information: {
    id: 'invite.information',
    defaultMessage: '通过邀请朋友一起来使用番茄网络，当对方付费购买后，您和朋友都将获得30天的免费使用时长，该部分使用时长和付费购买的服务一致，只是不可退款',
  },
  inviteTableTitle: {
    id: 'invite.table.title',
    defaultMessage: '我的邀请',
  },
  invitationInvitee: {
    id: 'invite.invitee',
    defaultMessage: '被邀请人',
  },
  invitationState: {
    id: 'invite.state',
    defaultMessage: '状态',
  },
  invitationTime: {
    id: 'invite.time',
    defaultMessage: '注册时间',
  },
  invitationIsMember: {
    id: 'invite.isMember',
    defaultMessage: '已成为会员',
  },
  invitationIsNotMember: {
    id: 'invite.isNotMember',
    defaultMessage: '未成为会员',
  },
  invitationTimeFormat: {
    id: 'invite.timeFormat',
    defaultMessage: '{year}年 {month}月 {date}日 - {hour}:{minute}:{second}',
  },
  invitationPaging: {
    id: 'invite.paging',
    defaultMessage: '共{count}条',
  },
});

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
                    <i className="fa fa-user" /> <FormattedMessage {...messages.breadcrumbDashboard} />
                  </Link>
                </li>
                <li className="active">
                  <i className="fa fa-share-square-o" /> <FormattedMessage {...messages.breadcrumbInvite} />
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
                    &nbsp;&nbsp;<FormattedMessage {...messages.title} />
                  </h4>
                </header>
                <div id="list">
                  <form>
                    <table className="table table-striped">
                      <caption><FormattedMessage {...messages.information} /></caption>
                      <tbody>
                        <tr>
                          <th width="50%">http://{host}/signup?i={md5(this.props.me.email)}</th>
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
                    <FormattedMessage {...messages.inviteTableTitle} />
                  </h4>
                </header>
                <div id="error-con" />
                <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                  <form id="TN_Table_7_form">
                    <table id="TN_Table_7_table" className="table table-striped">
                      <tbody>
                        <tr>
                          <th width="18.181818181818183%"><FormattedMessage {...messages.invitationInvitee} /></th>
                          <th width="9.090909090909092%"><FormattedMessage {...messages.invitationState} /></th>
                          <th width="27.27272727272727%"><FormattedMessage {...messages.invitationTime} /></th>
                        </tr>
                        {this.props.invitations.map(invitation => (
                          <tr>
                            <td>{invitation.email}</td>
                            <td><span className={invitation.membership ? 'text-success' : 'text-default'}>
                              {invitation.membership ?
                                <FormattedMessage {...messages.invitationIsMember} /> :
                                <FormattedMessage {...messages.invitationIsNotMember} />}
                            </span></td>
                            <td className="gray">
                              <FormattedMessage
                                values={{
                                  year: invitation.createAt.getFullYear(),
                                  month: invitation.createAt.getMonth() + 1,
                                  date: invitation.createAt.getDate(),
                                  hour: `${invitation.createAt.getHours()}`,
                                  minute: `${invitation.createAt.getMinutes()}`,
                                  second: `${invitation.createAt.getSeconds()}`,
                                }}
                                {...messages.invitationTimeFormat}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                  <div id="TN_Table_7_pager">
                    <ul className="pagination">
                      <li>
                        <span className="data-count">
                          <FormattedMessage
                            values={{
                              count: this.props.invitations.length,
                            }}
                            {...messages.invitationPaging}
                          />
                        </span>
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
