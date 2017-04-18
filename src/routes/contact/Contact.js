/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';

export default class extends React.Component {

  render() {
    return (
      <div className="container landing">
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <header>
                <h4><i className="fa fa-envelope-o" />&nbsp;&nbsp;联系我们</h4>
              </header>
              <div className="body" style={{ padding: `${20}px` }}>
                <p>
                  番茄网络目前唯一联系邮箱：<a href="mailto:tomato@protonmail.com">tomato@protonmail.com</a>
                </p>
                <ol>
                  <li>如果有什么好的想法请联系我们，一经采纳会奖励使用时长哦</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
