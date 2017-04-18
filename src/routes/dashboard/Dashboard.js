/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';

export default class extends React.Component {
  static propTypes = {
    membership: PropTypes.shape({
      mode: PropTypes.string.isRequired,
      due: PropTypes.object,
    }).isRequired,
    me: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
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
                      <th width="35%">到期日</th>
                      <th width="30%">操作</th>
                    </tr>
                      <tr>
                        <td>
                          {this.props.membership.mode}</td>
                        <td>
                          {this.props.membership.due ?
                            (`${this.props.membership.due.getFullYear()}年${
                             this.props.membership.due.getMonth() + 1}月${
                             this.props.membership.due.getDate() + 1}日`) : '-'}
                          {this.props.membership.due > new Date() ?
                            <span className="text-success">未过期</span> :
                            <span className="text-danger">已过期</span>}
                        </td>
                        <td>
                          <Link className="btn btn-success" to={'/make_plan'}>续费</Link>
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

