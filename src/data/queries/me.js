/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import AccountType from '../types/AccountType';
import Account from '../models/Account';

const me = {
  type: AccountType,
  resolve({ request }) {
    return request.user && Account.findById(request.user.id);
  },
};

export default me;
