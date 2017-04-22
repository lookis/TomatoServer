/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import md5 from 'md5';
import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

  password: {
    type: DataType.STRING(255),
    allowNull: false,
    set(val) {
      if (__DEV__) {
        this.setDataValue('password', val);
      } else {
        const id = this.getDataValue('id');
        this.setDataValue('password', md5(val + id));
      }
    },
  },

}, {
  instanceMethods: {
    verifyPassword(passwordInput) {
      if (__DEV__) {
        return this.password === passwordInput;
      }
      return this.password === md5(passwordInput + this.id);
    },
  },

  indexes: [
    { fields: ['email'] },
  ],

});

export default User;
