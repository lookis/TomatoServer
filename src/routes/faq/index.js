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
import Faq from './Faq';

const title = '常见问题';

export default {

  path: '/faq',

  action() {
    return {
      title,
      component: <Layout><Faq /></Layout>,
    };
  },

};
