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

const messages = defineMessages({
  title: {
    id: 'cart.title',
    defaultMessage: '订单结算',
    description: 'Title of checkout form',
  },
  product: {
    id: 'cart.product',
    defaultMessage: '产品名称',
    description: 'product column of form',
  },
  details: {
    id: 'cart.details',
    defaultMessage: '详情',
    description: 'details column of form',
  },
  price: {
    id: 'cart.price',
    defaultMessage: '价格',
    description: 'price column of form',
  },
  name: {
    id: 'cart.productName',
    defaultMessage: '番茄网络加速代理',
    description: 'Product Name',
  },
  duration: {
    id: 'cart.duration',
    defaultMessage: '购买时长:{month}个月',
    description: 'duration of form',
  },
  total: {
    id: 'cart.total',
    defaultMessage: '应付总额：',
    description: 'total amount to pay',
  },
  checkout: {
    id: 'cart.checkout',
    defaultMessage: '结算',
    description: 'checkout button',
  },
});

export default class extends React.Component {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      createAt: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title">
              <FormattedMessage {...messages.title} />
            </h2>
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
                        <th><FormattedMessage {...messages.details} /></th>
                        <th><FormattedMessage {...messages.price} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><FormattedMessage {...messages.name} /></td>
                        <td>
                          <p className="gray" style={{ paddingLeft: `${10}px` }}>
                            <FormattedMessage
                              values={{ month: this.props.order.count }}
                              {...messages.duration}
                            />
                          </p>
                        </td>
                        <td>¥{this.props.order.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ paddingLeft: `${20}px` }}>

                    <div id="fee">
                      <input type="hidden" name="total_due" value="9.00" />
                      <p>
                        <label><FormattedMessage {...messages.total} /></label>
                        ¥{this.props.order.price}.00
                      </p>
                      <input type="hidden" name="third_pay_money_count" value="9.00" />
                    </div>
                  </div>
                  <p style={{ textAlign: 'center', marginTop: `${20}px` }}>
                    <button id="submit" type="submit" style={{ width: `${180}px`, marginLeft: `${20}px` }} className="btn btn-lg btn-success">
                      <span className="my-small-circle"><i className="fa fa-credit-card" /></span>
                      <small>&nbsp;<FormattedMessage {...messages.checkout} /></small>
                    </button>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
