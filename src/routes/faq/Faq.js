/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Link from '../../components/Link';

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="container landing">
        <div className="row" style={{ marginTop: `${40}px` }}>
          <div className="col-md-12">
            <div className="panel-group" id="faqs">
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq1'}>为什么我的番茄网络不能用?</Link>
                </div>
                <div id="faq1" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>常见问题</p>
                    <ol>
                      <li>请确定已经下载安装最新版本的番茄网络</li>
                      <li>如果使用chrome浏览器，不要开启代理切换或者广告屏蔽插件，例如:proxy switchy，优酷去广告</li>
                      <li>如果是firefox浏览器，需要手工设置socks代理</li>
                      <li>如果安装了杀毒软件，请联系tomato@protonmail.com，帮您更换端口</li>
                      <li>如果番茄网络升级版本后一直显示一个鱼骨头，可以重启系统后重新安装一下</li>
                      <li>艾普宽带用户请直接退款</li>
                      <li>天翼校园网用户请直接退款</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq2'}>番茄网络支持哪些浏览器?</Link>
                </div>
                <div id="faq2" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>对于Chrome和Safari浏览器，只要启用系统代理即可(如果已经安装了翻墙,代理切换,广告屏蔽插件，请禁用)。</p>
                    <p>对于Firefox浏览器，可以手工配置浏览器使用socks5代理:127.0.0.1:9742，并勾选远程DNS。</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq3'}>番茄网络会影响访问国内网站的速度吗？</Link>
                </div>
                <div id="faq3" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>不会，番茄网络会自动识别您访问网站的ip，如果是国外的ip才会使用代理访问。如果启用番茄网络时感觉访问国内网站很慢，
                      可以设置DNS为114.114.114.114。</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq4'}>番茄网络会修改哪些网络设置?</Link>
                </div>
                <div id="faq4" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>番茄网络会在系统的网络设置-&gt;高级-&gt;代理下面启用一个socks5代理</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq5'}>教育网可以使用番茄网络吗?</Link>
                </div>
                <div id="faq5" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>如果你使用的校园网不能访问任何国外网站，可以使用番茄网络提供的国内中转线路。</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq6'}>服务到期后如何续费？</Link>
                </div>
                <div id="faq6" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>加速服务到期后，客户端会弹出续费提示，在续费期间您还可以免费使用一天。</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faqs" to={'/faq#faq7'}>如何在命令行使用番茄网络?</Link>
                </div>
                <div id="faq7" className="panel-collapse collapse" style={{ height: `${0}px` }}>
                  <div className="panel-body">
                    <p>可以设置以下环境变量</p>
                    <pre>
                      <code>export http_proxy=http://127.0.0.1:9743/
                      export https_proxy=http://127.0.0.1:9743/</code>
                    </pre>
                    <p>设置后，git,curl,wget等命令均可使用番茄网络的加速服务</p>
                    <p>对于ssh命令,可以通过参数指定代理</p>
                    <pre>
                      <code dangerouslySetInnerHTML={{ __html: "ssh -o ProxyCommand='nc -x 127.0.0.1:9742 %h %p' root@主机IP" }} />
                    </pre>
                    <p>或者也可以编辑配置文件 ~/.ssh/config</p>
                    <pre>
                      <code>ProxyCommand /usr/bin/nc -x 127.0.0.1:9742 %h %p</code>
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

