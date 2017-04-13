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
import ForgotPassword from './ForgotPassword';

const title = '忘记密码';

export default {

  path: '/forgot_password',

  action() {
    return {
      title,
      component: <Layout><ForgotPassword /></Layout>,
    };
  },

};
