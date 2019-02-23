import React, { Component } from 'react';
import {Layout} from 'antd';

import {HeaderUI} from './Header';
import {SideMenu} from './SideMenu';
import {ContentCont} from './Content';

import './landing.css';

class Landing extends Component {
  render() {
    return (
      <Layout className="main-cont">
          <SideMenu/>
          <Layout>
            <HeaderUI/>
            <ContentCont/>
          </Layout>
      </Layout>
    );
  }
}

export default Landing;
