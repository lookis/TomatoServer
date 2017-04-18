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
      createAt: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {

    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title">订单结算</h2>
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
                            购买时长:{this.props.order.count}个月
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
                        <label>应付总额：</label>
                        ¥{this.props.order.price}.00
                      </p>
                      <input type="hidden" name="third_pay_money_count" value="9.00" />
                    </div>
                  </div>
                  <p style={{ textAlign: 'center', marginTop: `${20}px` }}>
                    <button id="submit" type="submit" style={{ width: `${180}px`, marginLeft: `${20}px` }} className="btn btn-lg btn-success">
                      <span className="my-small-circle"><i className="fa fa-credit-card" /></span>
                      <small>&nbsp;结算</small>
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
