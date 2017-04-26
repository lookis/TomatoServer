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
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  step1: {
    id: 'plan.step1',
    defaultMessage: '选择配置',
  },
  step2: {
    id: 'plan.step2',
    defaultMessage: '订单结算',
  },
  step3: {
    id: 'plan.step3',
    defaultMessage: '续费成功',
  },
  product: {
    id: 'plan.product',
    defaultMessage: '产品名称',
  },
  name: {
    id: 'plan.name',
    defaultMessage: '番茄网络 for Mac',
  },
  duration: {
    id: 'plan.duration',
    defaultMessage: '购买时长',
  },
  onemonth: {
    id: 'plan.onemonth',
    defaultMessage: '1个月',
  },
  threemonth: {
    id: 'plan.threemonth',
    defaultMessage: '3个月',
  },
  sixmonth: {
    id: 'plan.sixmonth',
    defaultMessage: '半年(优惠5%)',
  },
  oneyear: {
    id: 'plan.oneyear',
    defaultMessage: '1年(优惠10%)',
  },
  fee: {
    id: 'plan.fee',
    defaultMessage: '费用',
  },
  checkout: {
    id: 'plan.checkout',
    defaultMessage: '续费',
  },
});

export default class extends React.Component {

  render() {
    return (
      <div className="container" style={{ marginTop: `${30}px` }}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-title">1.<FormattedMessage {...messages.step1} />
              <small>&nbsp;2.<FormattedMessage {...messages.step2} /></small>
              <small>&nbsp;3.<FormattedMessage {...messages.step3} /></small>
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
                      <FormattedMessage {...messages.product} />
                    </label>
                    <div className="col-sm-7">
                      <p style={{ paddingTop: `${5}px` }}><FormattedMessage {...messages.name} /></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label"><FormattedMessage {...messages.duration} /></label>
                    <div id="time-container" className="col-sm-7">
                      <div className="radio">
                        <input type="radio" id="buymonth-1" name="buy_month" defaultChecked value="1" />
                        <label htmlFor="buymonth-1" >
                          <FormattedMessage {...messages.onemonth} /></label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-3" name="buy_month" value="3" />
                        <label htmlFor="buymonth-3" >
                          <FormattedMessage {...messages.threemonth} /></label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-6" name="buy_month" value="6" />
                        <label htmlFor="buymonth-6" >
                          <FormattedMessage {...messages.sixmonth} /></label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="buymonth-12" name="buy_month" value="12" />
                        <label htmlFor="buymonth-12" >
                          <FormattedMessage {...messages.oneyear} /></label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-4 control-label"><FormattedMessage {...messages.fee} /></label>
                    <div className="col-sm-7">
                      <p><span id="fee" style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${24}px`, fontSize: `${20}px` }} className="label label-info">¥18</span></p>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: `${20}px` }}>
                    <div className="col-sm-offset-4 col-sm-7">
                      <button id="submit" type="submit" style={{ width: `${180}px` }} className="btn btn-lg btn-success">
                        <span className="my-small-circle"><i className="fa fa-shopping-cart" /></span>
                        <small>&nbsp;<FormattedMessage {...messages.checkout} /></small>
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
