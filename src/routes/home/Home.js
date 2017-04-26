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
import Link from '../../components/Link';

const messages = defineMessages({
  productName: {
    id: 'home.productName',
    defaultMessage: '番茄网络 1.0.1',
  },
  subtitle1: {
    id: 'home.subtitle1',
    defaultMessage: '穿梭网络海洋',
  },
  subtitle2: {
    id: 'home.subtitle2',
    defaultMessage: '从未如此迅速',
  },
  requirement: {
    id: 'home.requirement',
    defaultMessage: '系统要求: Mac OS X10.7或更高版本',
  },
  price: {
    id: 'home.price',
    defaultMessage: '仅需 ¥9/月',
  },
});

class Home extends React.Component {
  render() {
    return (
      <div className="container landing">
        <div className="row" style={{ marginTop: `${90}px`, marginBottom: `${40}px` }}>
          <div className="col-sm-5" style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 200 }}><FormattedMessage {...messages.productName} /></h1>
            <h3 style={{ fontWeight: 200 }}><FormattedMessage {...messages.subtitle1} /><br />
              <FormattedMessage {...messages.subtitle2} /></h3>
            <p>
              <Link style={{ fontSize: `${18}px` }} to={'/make_plan'} className="btn btn-sm btn-success">
                <FormattedMessage {...messages.price} />
                <i className="fa fa-shopping-cart" />
              </Link>
            </p>
            <p><FormattedMessage {...messages.requirement} /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
