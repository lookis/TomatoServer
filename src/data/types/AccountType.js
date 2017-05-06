/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
} from 'graphql';


import { attributeFields } from 'graphql-sequelize';
import Account from '../models/Account';

const AccountType = new ObjectType({
  name: Account.name,
  fields: Object.assign(attributeFields(Account, {
    only: ['id', 'email', 'createdAt', 'emailConfirmed'],
    commentToDescription: true,
  })),
});

export default AccountType;
