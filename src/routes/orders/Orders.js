/* eslint-disable no-nested-ternary */
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
  breadcrumbDashboard: {
    id: 'breadcrumb.dashboard',
    defaultMessage: '用户中心',
  },
  breadcrumbOrders: {
    id: 'breadcrumb.orders',
    defaultMessage: '所有订单',
  },
  product: {
    id: 'orders.product',
    defaultMessage: '产品',
  },
  price: {
    id: 'orders.price',
    defaultMessage: '价格',
  },
  state: {
    id: 'orders.state',
    defaultMessage: '状态',
  },
  createTime: {
    id: 'orders.createTime',
    defaultMessage: '创建时间',
  },
  action: {
    id: 'orders.action',
    defaultMessage: '操作',
  },
  name: {
    id: 'orders.name',
    defaultMessage: '番茄网络加速服务',
  },
  cancel: {
    id: 'orders.cancel',
    defaultMessage: '已取消',
  },
  pending: {
    id: 'orders.pending',
    defaultMessage: '待支付',
  },
  done: {
    id: 'orders.done',
    defaultMessage: '已完成',
  },
  timeFormat: {
    id: 'orders.timeFormat',
    defaultMessage: '{year}年 {month}月 {date}日 - {hour}:{minute}:{second}',
  },
  details: {
    id: 'orders.details',
    defaultMessage: '详情',
  },
  prev: {
    id: 'orders.prev',
    defaultMessage: '上一页',
  },
  next: {
    id: 'orders.next',
    defaultMessage: '下一页',
  },
});

export default class extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
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
                  <i className="fa fa-book" /> <FormattedMessage {...messages.breadcrumbOrders} />
                </li>
              </ol>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <div id="error-con" />
                <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                  <table id="TN_Table_7_table" className="table table-striped">
                    <tbody>
                      <tr>
                        <th width="20%"><FormattedMessage {...messages.product} /></th>
                        <th width="10%"><FormattedMessage {...messages.price} /></th>
                        <th width="10%"><FormattedMessage {...messages.state} /></th>
                        <th width="30%"><FormattedMessage {...messages.createTime} /></th>
                        <th width="30%" style={{ textAlign: 'center' }}><FormattedMessage {...messages.action} /></th>
                      </tr>
                      {this.props.orders.map(order => (
                        <tr>
                          <td><FormattedMessage {...messages.name} /></td>
                          <td>¥{order.price}.00</td>
                          <td>
                            <span
                              style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${20}px`, fontSize: `${14}px` }}
                              className={`label label-${order.state === 'cancel' ? 'default' : 'success'}`}
                            >
                              {order.state === 'cancel' ? <FormattedMessage {...messages.cancel} /> :
                                order.state === 'pending' ? <FormattedMessage {...messages.pending} /> :
                                <FormattedMessage {...messages.done} /> }
                            </span>
                          </td>
                          <td className="gray">
                            <FormattedMessage
                              values={{
                                year: order.createAt.getFullYear(),
                                month: order.createAt.getMonth() + 1,
                                date: order.createAt.getDate(),
                                hour: `${order.createAt.getHours()}`,
                                minute: `${order.createAt.getMinutes()}`,
                                second: `${order.createAt.getSeconds()}`,
                              }}
                              {...messages.timeFormat}
                            />
                          </td>
                          <td className="tn-tb-ac">
                            <Link to={`/order?id=${order.id}`} ><FormattedMessage {...messages.details} /></Link>
                          </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
                  <div>
                    <ul className="pagination">
                      <li className="disabled">
                        <Link aria-label="Previous" to={'/orders'} onClick={() => false}>
                          <span aria-hidden="true"><FormattedMessage {...messages.prev} /></span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link data-page="1" to={'/orders'} onClick={() => false}>1</Link>
                      </li>
                      <li>
                        <Link data-page="2" to={'/orders'} onClick={() => false}>2</Link>
                      </li>
                      <li>
                        <Link data-action="next" to={'/orders'} onClick={() => false}><FormattedMessage {...messages.next} /></Link>
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
