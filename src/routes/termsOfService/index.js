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
import TermsOfService from './TermsOfService';
import Header from '../../components/Header';

const title = '服务协议';

export default {

  path: '/terms_of_service',

  action() {
    const me = {
      id: 'user_id',
      email: 'lookisliu@gmail.com',
    };

    return {
      title,
      component: <Layout>
        <Header me={me} location={this.path} />
        <TermsOfService />
      </Layout>,
    };
  },

};
