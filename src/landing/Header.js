import React from 'react';
import {Layout, Icon} from 'antd';

const {Header} = Layout;

const HeaderUI = props => {
    const {collapsed, toggle} = props;
    return(
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
        </Header>
    )
}

export {
    HeaderUI
}