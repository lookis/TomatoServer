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

class Invite extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <ol className="breadcrumb">
                <li>
                  <Link to={'/dashboard'}>
                    <i className="fa fa-user" /> 用户中心
                    </Link>
                </li>
                <li className="active">
                  <i className="fa fa-share-square-o" /> 邀请
                  </li>
              </ol>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <header>
                  <h4><i className="fa fa-link" />
                      &nbsp;&nbsp;邀请链接
                    </h4>
                </header>
                <div id="list">
                  <form>
                    <table className="table table-striped">
                      <caption>通过邀请朋友一起来使用番茄网络，当对方付费购买后，您和朋友都将获得30天的免费使用时长，
                          该部分使用时长和付费购买的服务一致，只是不可退款</caption>
                      <tbody>
                        <tr>
                          <th width="50%">http://tomato.network/signup?i=XXXXX</th>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <header>
                  <h4><i className="fa fa-share-square-o" />
                      &nbsp;&nbsp;我的邀请
                    </h4>
                </header>
                <div id="error-con" />
                <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                  <form id="TN_Table_7_form">
                    <table id="TN_Table_7_table" className="table table-striped">
                      <tbody>
                        <tr>
                          <th width="18.181818181818183%">被邀请人</th>
                          <th width="9.090909090909092%">状态</th>
                          <th width="27.27272727272727%">注册时间</th>
                        </tr>
                        <tr className="">
                          <td>lookisliu@gmail.com</td>
                          <td><span className="text-success">已成为会员</span></td>
                          <td className="gray">04/06 下午 4:47</td>
                        </tr>
                        <tr className="">
                          <td>lookisliu@gmail.com</td>
                          <td><span className="text-default">未成为会员</span></td>
                          <td className="gray">04/06 下午 4:47</td>
                        </tr>
                        <tr className="">
                          <td>lookisliu@gmail.com</td>
                          <td><span className="text-success">已成为会员</span></td>
                          <td className="gray">04/06 下午 4:47</td>
                        </tr>
                        <tr className="">
                          <td>lookisliu@gmail.com</td>
                          <td><span className="text-default">未成为会员</span></td>
                          <td className="gray">04/06 下午 4:47</td>
                        </tr>
                        <tr className="">
                          <td>lookisliu@gmail.com</td>
                          <td><span className="text-success">已成为会员</span></td>
                          <td className="gray">04/06 下午 4:47</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <div id="TN_Table_7_pager">
                    <ul className="pagination">
                      <li>
                        <span className="data-count">共<b>4</b>条</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Invite;
