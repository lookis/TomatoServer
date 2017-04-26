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
import Cart from './Cart';

const title = '订单结算';

export default {

  path: '/cart',

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
      component: <Layout><Cart order={order} /></Layout>,
    };
  },

};
