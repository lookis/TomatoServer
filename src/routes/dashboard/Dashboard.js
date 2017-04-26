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
});

export default class extends React.Component {
  static propTypes = {
    membership: PropTypes.shape({
      due: PropTypes.object,
    }).isRequired,
  };

  render() {
    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <header>
                <h4><i className="fa fa-cloud" />&nbsp;&nbsp;<FormattedMessage {...messages.title} /></h4>
              </header>
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
                        {this.props.membership.due ? (<FormattedMessage
                          values={{
                            year: this.props.membership.due.getFullYear(),
                            month: this.props.membership.due.getMonth() + 1,
                            date: this.props.membership.due.getDate() + 1,
                          }}
                          {...messages.endTime}
                        />) : '-'}
                        {this.props.membership.due > new Date() ?
                          <span className="text-success"><FormattedMessage {...messages.serviceOn} /></span> :
                          <span className="text-danger"><FormattedMessage {...messages.serviceOff} /></span>}
                      </td>
                      <td>
                        <Link className="btn btn-success" to={'/make_plan'}><FormattedMessage {...messages.subscribe} /></Link>
                      </td>
                    </tr><tr /></tbody></table>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

