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
    id: 'tos.title',
    defaultMessage: '番茄网络服务协议',
  },
  titleRight: {
    id: 'tos.titleRight',
    defaultMessage: '番茄网络保留以下权利',
  },
  right: {
    id: 'tos.right',
    defaultMessage: '如果因用户发送垃圾邮件,下载盗版软件,音像制品等行为造成番茄网络被投诉或服务器IP被封, 番茄网络有权关闭用户账号，并返还未使用账户余额(扣除番茄网络的损失费用后)',
  },
  titlePrivacy: {
    id: 'tos.titlePrivacy',
    defaultMessage: '隐私声明',
  },
  subtitlePrivacy: {
    id: 'tos.subtitlePrivacy',
    defaultMessage: '番茄网络会使用用户的以下信息:',
  },
  privacy1: {
    id: 'tos.privacy1',
    defaultMessage: '1. 注册邮箱（以确定用户身份）',
  },
  privacy2: {
    id: 'tos.privacy2',
    defaultMessage: '2. 番茄网络版本，以及设备的唯一标示',
  },
  privacy3: {
    id: 'tos.privacy3',
    defaultMessage: '3. 番茄网络客户端与服务器的连接延迟，丢包率，路由信息（用来改善我们的服务）',
  },
});

export default class extends React.Component {

  render() {
    return (
      <div className="container landing">
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body" style={{ padding: `${20}px`, paddingTop: `${0}px`, fontSize: `${14}px` }}>
                <h3><FormattedMessage {...messages.title} /></h3>
                <p />
                <p />
                <h4><FormattedMessage {...messages.titleRight} /></h4>
                <FormattedMessage {...messages.right} />
                <p />
                <p />
                <h4><FormattedMessage {...messages.titlePrivacy} /></h4>
                <FormattedMessage {...messages.subtitlePrivacy} /><br />
                <FormattedMessage {...messages.privacy1} /><br />
                <FormattedMessage {...messages.privacy2} /><br />
                <FormattedMessage {...messages.privacy3} /><br />
                <p />
              </div>

            </section>
          </div>
        </div>
      </div>
    );
  }
}
