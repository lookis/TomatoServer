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

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title">1.选择配置
              <small>&nbsp;2.订单结算</small>
              <small>&nbsp;3.续费成功</small>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <div id="error-con" />
                <form method="post" id="main-form" className="form-horizontal label-right">
                  <div className="form-group">
                    <label className="col-sm-4 control-label">
                      产品名称
                    </label>
                    <div className="col-sm-7">
                      <p style={{ paddingTop: `${5}px` }}>番茄网络 for Mac</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label">购买时长</label>
                    <div id="time-container" className="col-sm-7">
                      <div className="radio">
                        <input type="radio" id="buymonth-1" name="buy_month" defaultChecked value="1" />
                        <label htmlFor="buymonth-1" >
                          1个月</label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-3" name="buy_month" value="3" />
                        <label htmlFor="buymonth-3" >
                          3个月</label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-6" name="buy_month" value="6" />
                        <label htmlFor="buymonth-6" >
                          半年(优惠5%)</label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-12" name="buy_month" value="12" />
                        <label htmlFor="buymonth-12" >
                          1年(优惠10%)</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label">费用</label>
                    <div className="col-sm-7">
                      <p><span id="fee" style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${24}px`, fontSize: `${20}px` }} className="label label-info">¥18</span></p>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-7">
                      <button id="submit" type="submit" style={{ width: `${180}px` }} className="btn btn-lg btn-success">
                        <span className="my-small-circle"><i className="fa fa-shopping-cart" /></span>
                        <small>&nbsp;续费</small>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
