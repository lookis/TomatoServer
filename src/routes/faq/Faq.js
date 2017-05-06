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
import Link from '../../components/Link';

const messages = defineMessages({
  title: {
    id: 'faq.title',
    defaultMessage: '常见问题',
  },
  question1: {
    id: 'faq.question1.queation',
    defaultMessage: '为什么我的番茄网络不能用?',
  },
  question1Answer1: {
    id: 'faq.question1.answer1',
    defaultMessage: '请确定已经下载安装最新版本的番茄网络',
  },
  question1Answer2: {
    id: 'faq.question1.answer2',
    defaultMessage: '如果使用chrome浏览器，不要开启代理切换或者广告屏蔽插件，例如:proxy switchy，优酷去广告',
  },
  question1Answer3: {
    id: 'faq.question1.answer3',
    defaultMessage: '如果是firefox浏览器，需要手工设置socks代理',
  },
  question2: {
    id: 'faq.question2.queation',
    defaultMessage: '番茄网络支持哪些浏览器?',
  },
  question2Answer1: {
    id: 'faq.question2.answer1',
    defaultMessage: '对于Chrome和Safari浏览器，只要启用系统代理即可(如果已经安装了翻墙,代理切换,广告屏蔽插件，请禁用)。',
  },
  question2Answer2: {
    id: 'faq.question2.answer2',
    defaultMessage: '对于Firefox浏览器，可以手工配置浏览器使用socks5代理:127.0.0.1:1081，并勾选远程DNS。',
  },
  question3: {
    id: 'faq.question3.queation',
    defaultMessage: '番茄网络会影响访问国内网站的速度吗？',
  },
  question3Answer1: {
    id: 'faq.question3.answer1',
    defaultMessage: '不会，番茄网络会自动识别您访问网站的ip，如果是国外的ip才会使用代理访问。如果启用番茄网络时感觉访问国内网站很慢，可以设置DNS为114.114.114.114。',
  },
  question4: {
    id: 'faq.question4.queation',
    defaultMessage: '番茄网络会修改哪些网络设置?',
  },
  question4Answer1: {
    id: 'faq.question4.answer1',
    defaultMessage: '番茄网络会在系统的网络设置->高级->代理下面启用一个socks5代理和一个自动配置文件',
  },
  question5: {
    id: 'faq.question5.queation',
    defaultMessage: '教育网可以使用番茄网络吗?',
  },
  question5Answer1: {
    id: 'faq.question5.answer1',
    defaultMessage: '如果你使用的校园网不能访问任何国外网站，可以使用番茄网络提供的国内中转线路。',
  },
  question6: {
    id: 'faq.question6.queation',
    defaultMessage: '服务到期后如何续费？',
  },
  question6Answer1: {
    id: 'faq.question6.answer1',
    defaultMessage: '加速服务到期后，客户端会弹出续费提示，在续费期间您还可以免费使用一天。',
  },
  question7: {
    id: 'faq.question7.queation',
    defaultMessage: '如何在命令行使用番茄网络?',
  },
  question7Answer1: {
    id: 'faq.question7.answer1',
    defaultMessage: '可以设置以下环境变量',
  },
  question7Answer2: {
    id: 'faq.question7.answer2',
    defaultMessage: '设置后，git,curl,wget等命令均可使用番茄网络的加速服务',
  },
  question7Answer3: {
    id: 'faq.question7.answer3',
    defaultMessage: '对于ssh命令,可以通过参数指定代理',
  },
  question7Answer4: {
    id: 'faq.question7.answer4',
    defaultMessage: '或者也可以编辑配置文件 ~/.ssh/config',
  },
});

export default class extends React.Component {
  render() {
    return (
      <div className="container landing">
        <div className="row" style={{ marginTop: `${40}px` }}>
          <div className="col-md-12">
            <div className="panel-group" id="faqs">
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq1'}><FormattedMessage {...messages.question1} /></Link>
                </div>
                <div id="faq1" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.title} /></p>
                    <ol>
                      <li><FormattedMessage {...messages.question1Answer1} /></li>
                      <li><FormattedMessage {...messages.question1Answer2} /></li>
                      <li><FormattedMessage {...messages.question1Answer3} /></li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq2'}><FormattedMessage {...messages.question2} /></Link>
                </div>
                <div id="faq2" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.question2Answer1} /></p>
                    <p><FormattedMessage {...messages.question2Answer2} /></p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq3'}><FormattedMessage {...messages.question3} /></Link>
                </div>
                <div id="faq3" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.question3Answer1} /></p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq4'}><FormattedMessage {...messages.question4} /></Link>
                </div>
                <div id="faq4" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.question4Answer1} /></p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq6'}><FormattedMessage {...messages.question6} /></Link>
                </div>
                <div id="faq6" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.question6Answer1} /></p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq7'}><FormattedMessage {...messages.question7} /></Link>
                </div>
                <div id="faq7" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p><FormattedMessage {...messages.question7Answer1} /></p>
                    <pre>
                      <code>export http_proxy=http://127.0.0.1:1081/
                      export https_proxy=http://127.0.0.1:1081/</code>
                    </pre>
                    <p><FormattedMessage {...messages.question7Answer2} /></p>
                    <p><FormattedMessage {...messages.question7Answer3} /></p>
                    <pre>
                      <code dangerouslySetInnerHTML={{ __html: "ssh -o ProxyCommand='nc -x 127.0.0.1:1081 %h %p' root@[host]" }} />
                    </pre>
                    <p><FormattedMessage {...messages.question7Answer4} /></p>
                    <pre>
                      <code>ProxyCommand /usr/bin/nc -x 127.0.0.1:1081 %h %p</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

