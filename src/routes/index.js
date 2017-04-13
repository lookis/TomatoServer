/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./cart').default,
    require('./contact').default,
    require('./dashboard').default,
    require('./faq').default,
    require('./forgotPassword').default,
    require('./makePlan').default,
    require('./order').default,
    require('./orders').default,
    require('./signin').default,
    require('./signup').default,
    require('./termsOfService').default,
    require('./wallet').default,
    // require('./signup').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || '番茄网络'} - tomato.network`;
    route.keywords = `${route.keywords || ['番茄', '番茄网络', 'Mac', 'VPN', '加速器', '翻墙', 'GFW']}`;
    route.description = route.description || '番茄网络是一款为Mac下为访问国内外网站加速的工具，支持国内手游、端游、页游，跨运营商加速，支持国外Coursera、edx、TED、youtube等视频站';

    return route;
  },

};
