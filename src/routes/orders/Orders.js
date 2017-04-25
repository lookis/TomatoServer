/* eslint-disable no-nested-ternary */
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
    orders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      createAt: PropTypes.object.isRequired,
    }).isRequired).isRequired,
  };
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
                  <i className="fa fa-book" /> 所有订单
                  </li>
              </ol>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <section className="widget">
              <div className="body">
                <div id="error-con" />
                <div id="list" style={{ position: 'relative', minHeight: `${100}px` }}>
                  <table id="TN_Table_7_table" className="table table-striped">
                    <tbody>
                      <tr>
                        <th width="20%">产品</th>
                        <th width="10%">总价</th>
                        <th width="10%">状态</th>
                        <th width="30%">创建时间</th>
                        <th width="30%" style={{ textAlign: 'center' }}>操作</th>
                      </tr>
                      {this.props.orders.map(order => (
                        <tr>
                          <td>{order.name}</td>
                          <td>¥{order.price}.00</td>
                          <td>
                            <span
                              style={{ fontWeight: 200, paddingLeft: `${10}px`, letterSpacing: `${5}px`, lineHeight: `${20}px`, fontSize: `${14}px` }}
                              className={`label label-${order.state === 'cancel' ? 'default' : 'success'}`}
                            >
                              {order.state === 'cancel' ? '已取消' :
                                order.state === 'pending' ? '待支付' : '已完成' }
                            </span>
                          </td>
                          <td className="gray">
                            {order.createAt.getFullYear()}年
                              {order.createAt.getMonth() + 1}月
                              {order.createAt.getDate()}日 - {order.createAt.getHours()}:
                              {order.createAt.getMinutes()}:
                              {order.createAt.getSeconds()}</td>
                          <td className="tn-tb-ac">
                            <Link to={`/order?id=${order.id}`} >详情</Link>
                          </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
                  <div>
                    <ul className="pagination">
                      <li className="disabled">
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">上一页</span>
                        </a>
                      </li>
                      <li className="active">
                        <Link data-page="1" to={'/wallet'} onClick={() => false}>1</Link>
                      </li>
                      <li>
                        <Link data-page="2" to={'/wallet'} onClick={() => false}>2</Link>
                      </li>
                      <li>
                        <Link data-action="next" to={'/wallet'} onClick={() => false}>下一页</Link>
                      </li>
                      <li>
                        <Link data-action="last" to={'/wallet'} onClick={() => false}>尾页</Link>
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
