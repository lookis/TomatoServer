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
import Header from '../../components/Header';
import Dashboard from './Dashboard';

const title = '用户中心';

export default {

  path: '/dashboard',

  action() {
    const membership = {
      due: new Date(),
    }
    return {
      title,
      component: <Layout>
        <Header location={this.path} />
        <Dashboard membership={membership} />
      </Layout>,
    };
  },

};
