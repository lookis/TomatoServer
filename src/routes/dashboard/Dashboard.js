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
import { defineMessages, FormattedMessage } from 'react-intl';
import { graphql } from 'react-apollo';
import query from './dashboard.graphql';
import Link from '../../components/Link';

const messages = defineMessages({
  title: {
    id: 'dashboard.title',
    defaultMessage: '服务信息',
  },
  product: {
    id: 'dashboard.product',
    defaultMessage: '模式',
  },
  duration: {
    id: 'dashboard.duration',
    defaultMessage: '到期日',
  },
  action: {
    id: 'dashboard.action',
    defaultMessage: '操作',
  },
  mode: {
    id: 'dashboard.mode',
    defaultMessage: '普通',
  },
  testMode: {
    id: 'dashboard.testMode',
    defaultMessage: '测试期间免费使用',
  },
  endTime: {
    id: 'dashboard.endTime',
    defaultMessage: '{year}年{month}月{date}日',
  },
  serviceOff: {
    id: 'dashboard.serviceOff',
    defaultMessage: '已过期',
  },
  serviceOn: {
    id: 'dashboard.serviceOn',
    defaultMessage: '未过期',
  },
  subscribe: {
    id: 'dashboard.subscribe',
    defaultMessage: '续费',
  },
  download: {
    id: 'dashboard.download',
    defaultMessage: '下载客户端',
  },
});

class Dashboard extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      membership: PropTypes.shape({
        due: PropTypes.object,
      }),
    }).isRequired,
  };

  render() {
    const { data: { membership } } = this.props;
    let due = null;
    if (membership && membership.due) {
      due = new Date(membership.due);
    }
    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <header>
                <h4><i className="fa fa-cloud" />&nbsp;&nbsp;<FormattedMessage {...messages.title} /></h4>
              </header>
              {membership && membership.id !== '0' ? (
                <div className="body">
                  <table className="table table-striped">
                    <tbody><tr>
                      <th width="20%"><FormattedMessage {...messages.product} /></th>
                      <th width="35%"><FormattedMessage {...messages.duration} /></th>
                      <th width="30%"><FormattedMessage {...messages.action} /></th>
                    </tr>
                      <tr>
                        <td>
                          <FormattedMessage {...messages.mode} /></td>
                        <td>
                          {due ? (<FormattedMessage
                            values={{
                              year: due.getFullYear(),
                              month: due.getMonth() + 1,
                              date: due.getDate() + 1,
                            }}
                            {...messages.endTime}
                          />) : '-'}
                          {due > new Date() ?
                            <span className="text-success"><FormattedMessage {...messages.serviceOn} /></span> :
                            <span className="text-danger"><FormattedMessage {...messages.serviceOff} /></span>}
                        </td>
                        <td>
                          <Link className="btn btn-success" to={'/make_plan'}><FormattedMessage {...messages.subscribe} /></Link>
                        </td>
                      </tr><tr /></tbody></table>
                </div>
              ) : (
                <div className="body">
                  <table className="table table-striped">
                    <tbody><tr>
                      <th width="20%"><FormattedMessage {...messages.product} /></th>
                      <th width="35%"><FormattedMessage {...messages.duration} /></th>
                      <th width="30%"><FormattedMessage {...messages.action} /></th>
                    </tr>
                      <tr>
                        <td>
                          <FormattedMessage {...messages.mode} /></td>
                        <td>
                          <FormattedMessage {...messages.testMode} /></td>
                        <td>
                          <a className="btn btn-success" href="/download"><FormattedMessage {...messages.download} /></a>
                        </td>
                      </tr><tr /></tbody></table>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
