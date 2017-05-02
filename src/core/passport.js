/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Account } from '../data/models';

passport.use(new LocalStrategy(
  (username, password, done) => {
    Account.findOne(
      { where: { email: username } },
    ).then((user) => {
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user.get({
        plain: true,
      }));
    });
  },
));

export default passport;
