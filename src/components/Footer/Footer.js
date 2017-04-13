import React from 'react';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container">
        <div className="row">
          <div className="col-md-12">
            <p>©{new Date().getFullYear()} TomatoNetwork&nbsp;
              <Link to={'/'}>首页</Link>
              <Link to={'/dashboard'}>用户中心</Link>
              <Link to={'/terms_of_service'}>服务协议</Link>
              <Link to={'/contact'}>联系我们</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
