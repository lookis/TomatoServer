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
      mode: '普通',
      due: new Date(),
    }
    const me = {
      id: 'user_id',
      email: 'lookisliu@gmail.com',
    }
    return {
      title,
      component: <Layout>
        <Header me={me} location={this.path} />
        <Dashboard membership={membership} me={me} />
      </Layout>,
    };
  },

};
