import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import ejs from 'ejs';
import nodemailer from 'nodemailer';

const createResetPasswordEmail = {
  type: new ObjectType({
    name: 'CreateAccountResponse',
    fields: {
      success: {
        type: StringType,
      },
      errors: {
        type: new NonNull(new List(StringType)),
      },
    },
  }),
  args: {
    email: { type: new NonNull(StringType) },
    locale: { type: StringType },
  },
  resolve(_, { email, locale }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 465,
      secure: true,
      auth: {
        user: 'noreply@mail.tomato.network',
        pass: 'noreply123',
      },
    });

    return ejs.renderFile('resetPassword.ejs', {}, {
      root: '../../mails',
    }, (err, str) => {
      const mailOptions = {
        from: '"NoReply" <noreply@mail.tomato.network>',
        to: email,
        subject: '番茄网络密码重置',
        html: str,
      };
      return transporter.sendMail(mailOptions).then(() => ({
        success: 'success',
        errors: [],
      })).catch(error => ({
        errors: [error],
      }));
    });
  },
};

export default createResetPasswordEmail;
