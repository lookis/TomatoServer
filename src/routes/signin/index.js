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
import Signin from './Signin';

const title = '登陆';

export default {

  path: '/signin',

  action(ctx) {
    return {
      title,
      component: <Layout><Signin {...ctx.query} /></Layout>,
    };
  },

};
