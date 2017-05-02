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
import Signup from './Signup';

const title = '注册';

export default {

  path: '/signup',

  action(ctx) {
    const { i } = ctx.query;

    return {
      title,
      component: <Layout><Signup inviter={i} /></Layout>,
    };
  },

};
