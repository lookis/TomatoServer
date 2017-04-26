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

const messages = defineMessages({
  title: {
    id: 'contact.title',
    defaultMessage: '联系我们',
    description: 'breadcrumb of page',
  },
  emailInformation: {
    id: 'contact.emailInformation',
    defaultMessage: '番茄网络目前唯一联系邮箱：',
    description: 'email information',
  },
  otherInformation: {
    id: 'contact.otherInformation',
    defaultMessage: '如果有什么好的想法请联系我们，一经采纳会奖励使用时长哦',
    description: 'other information',
  },
});

export default class extends React.Component {

  render() {
    return (
      <div className="container landing">
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <header>
                <h4><i className="fa fa-envelope-o" />&nbsp;&nbsp;<FormattedMessage {...messages.title} /></h4>
              </header>
              <div className="body" style={{ padding: `${20}px` }}>
                <p>
                  <FormattedMessage {...messages.emailInformation} /><a href="mailto:tomato@protonmail.com">tomato@protonmail.com</a>
                </p>
                <ol>
                  <li><FormattedMessage {...messages.otherInformation} /></li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
