import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import Link from '../Link';

const messages = defineMessages({
  sitename: {
    id: 'footer.sitename',
    defaultMessage: '番茄网络',
    description: 'Sitename in footer',
  },
  home: {
    id: 'footer.home',
    defaultMessage: '首页',
    description: 'Home in footer',
  },
  dashboard: {
    id: 'footer.dashboard',
    defaultMessage: '用户中心',
    description: 'Dashboard in footer',
  },
  tos: {
    id: 'footer.tos',
    defaultMessage: '服务协议',
    description: 'Term of service in footer',
  },
  contact: {
    id: 'footer.contact',
    defaultMessage: '联系我们',
    description: 'Contact in footer',
  },
})

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container">
        <div className="row">
          <div className="col-md-12">
            <p>©{new Date().getFullYear()} <FormattedMessage {...messages.sitename} />&nbsp;
              <Link to={'/'}><FormattedMessage {...messages.home} /></Link>
              <Link to={'/dashboard'} rel="nofollow"><FormattedMessage {...messages.dashboard} /></Link>
              <Link to={'/terms_of_service'} rel="nofollow"><FormattedMessage {...messages.tos} /></Link>
              <Link to={'/contact'} rel="nofollow"><FormattedMessage {...messages.contact} /></Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
