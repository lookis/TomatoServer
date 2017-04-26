/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import Header from '../../components/Header';
import Invite from './Invite';
import Layout from '../../components/Layout';

export default {

  path: '/invite',

  async action() {
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: '{news{title,link,content}, me{id, email}}',
    //   }),
    //   credentials: 'include',
    // });
    // const { data } = await resp.json();
    // if (!data || !data.news) throw new Error('Failed to load the news feed.');
    const me = {
      id: 'user_id',
      email: 'lookisliu@gmail.com',
    };

    const invitations = [{
      email: 'lookisliu@gmail.com',
      membership: true,
      createAt: new Date(),
    }, {
      email: 'lookisliu@gmail.com',
      membership: false,
      createAt: new Date(),
    }, {
      email: 'lookisliu@gmail.com',
      membership: true,
      createAt: new Date(),
    }, {
      email: 'lookisliu@gmail.com',
      membership: false,
      createAt: new Date(),
    }];

    return {
      title: '我的邀请',
      component: <Layout>
        <Header me={me} location={this.path} />
        <Invite invitations={invitations} me={me} />
      </Layout>,
    };
  },

};
