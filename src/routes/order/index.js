/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Order from './Order';
import Header from '../../components/Header';

const title = '订单信息';

export default {

  path: '/order',

  action() {
    const order = {
      id: 'order_id',
      count: 1,
      price: 9,
      state: 'pending',
      createAt: new Date(),
    }

    return {
      title,
      component: <Layout>
        <Header location={this.path} />
        <Order order={order} />
      </Layout>,
    };
  },

};
