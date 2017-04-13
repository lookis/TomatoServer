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

const title = '所有订单';

export default {

  path: '/orders',

  action() {
    return {
      title,
      component: <Layout><Orders /></Layout>,
    };
  },

};
