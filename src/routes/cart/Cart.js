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
    title: PropTypes.string.isRequired,
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
                        <td>番茄网络加速代理</td>
                        <td>
                          <p className="gray" style={{ paddingLeft: `${10}px` }}>
                          加速模式:大陆-&gt;海外<br />
                            设备数:1<br />
                            购买时长:1个月 4月7日 - 5月7日<br />
                          </p>
                        </td>
                        <td>¥9/$1.5</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ paddingLeft: `${20}px` }}>

                    <p id="moneytype-container">支付币种:
                      &nbsp;
                      <input type="radio" id="moneytype-CNY" name="pay_money_type" value="CNY" checked="" />&nbsp;
                      <label htmlFor="moneytype-CNY">人民币</label>
                      &nbsp;
                      <input type="radio" id="moneytype-USD" name="pay_money_type" value="USD" />&nbsp;
                      <label htmlFor="moneytype-USD">美元</label>
                    </p>

                    <div id="fee">
                      <input type="hidden" name="total_due" value="9.00" />
                      <p>
                        <label>应付总额：</label>
                        <span style={{ fontWeight: 200, letterSpacing: `${5}px`, lineHeight: `${24}px`, fontSize: `${20}px` }} className="label label-info">¥9.00</span>
                      </p>
                      <p>
                        <label>支付方式：</label>
                        支付宝
                      </p>
                      <input type="hidden" name="third_pay_money_count" value="9.00" />
                    </div>
                  </div>
                  <p style={{ textAlign: 'center', marginTop: `${20}px` }}>
                    <Link to={'/cart'} onClick={() => { history.go(-1); return false; }} style={{ width: `${100}px` }} className="btn btn-lg btn-default">
                      <small>&nbsp;上一步</small>
                    </Link>
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
