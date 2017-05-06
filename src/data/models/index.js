/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import Account from './Account';
import Order from './Order';
import Membership from './Membership';

Account.belongsTo(Account, {
  as: 'inviter',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
  allowNull: true,
});


Account.Membership = Account.hasOne(Membership);
Account.hasMany(Order);

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Account, Order, Membership };
