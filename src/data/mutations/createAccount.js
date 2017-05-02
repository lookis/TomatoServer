import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import Account from '../models/Account';
import AccountType from '../types/AccountType';

const createAccount = {
  type: new ObjectType({
    name: 'CreateAccountResponse',
    fields: {
      account: {
        type: AccountType,
      },
      errors: {
        type: new NonNull(new List(StringType)),
      },
    },
  }),
  args: {
    email: { type: new NonNull(StringType) },
    inviter: { type: StringType },
    password: { type: new NonNull(StringType) },
  },
  resolve(_, { email, inviter, password }) {
    return Account.create({
      email,
      password,
      inviterId: inviter && inviter.length > 0 ? inviter : null,
    }).then(account => ({ account, errors: [] }))
      .catch(error => ({ account: null, errors: error.errors.map(e => e.type) }));
  },
};

export default createAccount;
