/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-for */
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
  checkout: {
    id: 'order.checkout',
    defaultMessage: '支付',
  },
  breadcrumbDashboard: {
    id: 'breadcrumb.dashboard',
    defaultMessage: '用户中心',
  },
  breadcrumbOrders: {
    id: 'breadcrumb.orders',
    defaultMessage: '所有订单',
  },
  breadcrumbOrderDetails: {
    id: 'breadcrumb.orderDetails',
    defaultMessage: '订单详情',
  },
  product: {
    id: 'order.product',
    defaultMessage: '产品名称',
  },
  description: {
    id: 'order.description',
    defaultMessage: '详情',
  },
  price: {
    id: 'order.price',
    defaultMessage: '价格',
  },
  name: {
    id: 'order.name',
    defaultMessage: '番茄网络加速代理',
  },
  duration: {
    id: 'order.duration',
    defaultMessage: '购买时长：{count}个月',
  },
  orderId: {
    id: 'order.id',
    defaultMessage: '订单编号：',
  },
  orderCreateTime: {
    id: 'order.createTime',
    defaultMessage: '创建时间：',
  },
  orderTimeFormat: {
    id: 'order.timeFormat',
    defaultMessage: '{year}年 {month}月 {date}日',
  },
  orderState: {
    id: 'order.state',
    defaultMessage: '订单状态：',
  },
  orderCancel: {
    id: 'order.state.cancel',
    defaultMessage: '已取消',
  },
  orderPending: {
    id: 'order.state.pending',
    defaultMessage: '待支付',
  },
  orderDone: {
    id: 'order.state.done',
    defaultMessage: '已完成',
  },
  orderTotal: {
    id: 'order.total',
    defaultMessage: '应付总额：',
  },
});

export default class extends React.Component {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      createAt: PropTypes.object.isRequired,
    }).isRequired,
  };

  payButton() {
    if (this.props.order.state === 'pending') {
      return (
        <p style={{ textAlign: 'center', marginTop: `${20}px` }}>
          <button
            id="submit" type="submit" style={{ width: `${180}px`, marginLeft: `${20}px` }}
            className="btn btn-lg btn-success"
          >
            <span className="my-small-circle"><i className="fa fa-credit-card" /></span>
            <small>&nbsp;<FormattedMessage {...messages.checkout} /></small>
          </button>
        </p>
      );
    }
    return <div />;
  }

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
                <li>
                  <Link to={'/orders'}>
                    <i className="fa fa-book" /> <FormattedMessage {...messages.breadcrumbOrders} />
                  </Link>
                </li>
                <li className="active"><FormattedMessage {...messages.breadcrumbOrderDetails} /></li>
              </ol>
            </section>
          </div>
        </div>
        <form id="main-form">
          <div className="row">
            <div className="col-md-12">
              <section className="widget">
                <div className="body">
                  <div id="error-con" />
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th><FormattedMessage {...messages.product} /></th>
                        <th><FormattedMessage {...messages.description} /></th>
                        <th><FormattedMessage {...messages.price} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><FormattedMessage {...messages.name} /></td>
                        <td>
                          <p className="gray" style={{ paddingLeft: `${10}px` }}>
                            <FormattedMessage
                              values={{
                                count: this.props.order.count,
                              }}
                              {...messages.duration}
                            />
                          </p>
                        </td>
                        <td>¥{this.props.order.price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ paddingLeft: `${20}px` }}>
                    <p>
                      <label><FormattedMessage {...messages.orderId} /></label>
                      <span className="gray">{this.props.order.id}</span>
                    </p>
                    <p>
                      <label><FormattedMessage {...messages.orderCreateTime} /></label>
                      <span className="gray">
                        <FormattedMessage
                          values={{
                            year: this.props.order.createAt.getFullYear(),
                            month: this.props.order.createAt.getMonth() + 1,
                            date: this.props.order.createAt.getDate(),
                          }}
                          {...messages.orderTimeFormat}
                        />
                      </span>
                    </p>
                    <p>
                      <label><FormattedMessage {...messages.orderState} /></label>
                      <span
                        style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${20}px`, fontSize: `${14}px` }}
                        className={`label label-${this.props.order.state === 'cancel' ? 'default' : 'success'}`}
                      >
                        {this.props.order.state === 'cancel' ? <FormattedMessage {...messages.orderCancel} /> :
                            this.props.order.state === 'pending' ? <FormattedMessage {...messages.orderPending} /> :
                            <FormattedMessage {...messages.orderDone} /> }
                      </span>
                    </p>
                    <div id="fee">
                      <input type="hidden" name="total_due" value="18" />
                      <p><label>
                        <FormattedMessage {...messages.orderTotal} /></label>
                        ¥{this.props.order.price}.00</p>
                    </div>
                    {this.payButton()}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>

    );
  }
}
