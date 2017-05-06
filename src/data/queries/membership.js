/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import MembershipType from '../types/MembershipType';
import Membership from '../models/Membership';

const me = {
  type: MembershipType,
  resolve({ request }) {
    return request.user && Membership.findOne({
      where: {
        AccountId: request.user.id,
      },
    }).then((membership) => {
      if (membership) {
        return Object.assign(membership, {
          server: '123.56.17.90', // kcpTun server
          port: 8489, // kcpTun port
          password: '12345679', // sslocal password
          method: 'aes-256-cfb', // sslocal method
          key: 'it\'s not a secret', // kcpTun key
          mode: 'fast2', // kcpTun mode
        });
      }
      const due = new Date();
      due.setFullYear(due.getFullYear() + 1);
      return {
        id: '0',
        due,
        server: '123.56.17.90', // kcpTun server
        port: 8489, // kcpTun port
        password: '12345679', // sslocal password
        method: 'aes-256-cfb', // sslocal method
        key: 'it\'s not a secret', // kcpTun key
        mode: 'fast2', // kcpTun mode
      };
    });
  },
};

export default me;
