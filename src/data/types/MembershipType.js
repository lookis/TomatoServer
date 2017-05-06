/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { attributeFields } from 'graphql-sequelize';
import {
  GraphQLObjectType as ObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import Membership from '../models/Membership';

const MembershipType = new ObjectType({
  name: Membership.name,
  fields: Object.assign(attributeFields(Membership, {
    only: ['id', 'due'],
    commentToDescription: true,
  }), {
    server: { type: GraphQLString }, // kcpTun server
    port: { type: GraphQLInt }, // kcpTun port
    password: { type: GraphQLString }, // sslocal password
    method: { type: GraphQLString }, // sslocal method
    key: { type: GraphQLString }, // kcpTun key
    mode: { type: GraphQLString }, // kcpTun mode
  }),
});

export default MembershipType;
