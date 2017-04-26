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
import Orders from './Orders';
import Header from '../../components/Header';

const title = '所有订单';

export default {

  path: '/orders',

  action() {
    const me = {
      id: 'user_id',
      email: 'lookisliu@gmail.com',
    };

    const order = {
      id: 'order_id',
      count: 1,
      price: 9,
      state: 'cancel',
      createAt: new Date(),
    };

    const orders = [order, order, order, order, order, order];

    return {
      title,
      component: <Layout>
        <Header me={me} location={this.path} />
        <Orders orders={orders} />
      </Layout>,
    };
  },

};
