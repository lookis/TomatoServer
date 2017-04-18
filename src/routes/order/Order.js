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

import React, { PropTypes } from 'react';
import Link from '../../components/Link';

export default class extends React.Component {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
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
            <small>&nbsp;支付</small>
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
                    <i className="fa fa-user" /> 用户中心
                    </Link>
                </li>
                <li>
                  <Link to={'/orders'}>
                    <i className="fa fa-book" /> 所有订单
                    </Link>
                </li>
                <li className="active">订单详情</li>
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
                        <th>产品名称</th>
                        <th>详情</th>
                        <th>价格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.props.order.name}</td>
                        <td>
                          <p className="gray" style={{ paddingLeft: `${10}px` }}>
                              购买时长:{this.props.order.count}个月<br />
                          </p>
                        </td>
                        <td>¥{this.props.order.price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ paddingLeft: `${20}px` }}>
                    <p>
                      <label>订单编号：</label>
                      <span className="gray">{this.props.order.id}</span>
                    </p>
                    <p>
                      <label>创建时间：</label>
                      <span className="gray">
                        {this.props.order.createAt.getFullYear()}年
                          {this.props.order.createAt.getMonth() + 1}月
                          {this.props.order.createAt.getDate()}日
                        </span>
                    </p>
                    <p>
                      <label>订单状态：</label>
                      <span
                        style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${20}px`, fontSize: `${14}px` }}
                        className={`label label-${this.props.order.state === 'cancel' ? 'default' : 'success'}`}
                      >
                        {this.props.order.state === 'cancel' ? '已取消' :
                            this.props.order.state === 'pending' ? '待支付' : '已完成' }
                      </span>
                    </p>
                    <div id="fee">
                      <input type="hidden" name="total_due" value="18" />
                      <p><label>应付总额：</label>¥{this.props.order.price}.00</p>
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
