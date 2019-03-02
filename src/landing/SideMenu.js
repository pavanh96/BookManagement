import React from 'react';
import {Layout, Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

const {Sider}=Layout;
const { SubMenu } = Menu;

const SideMenu = props => {
    const {collapsed} = props;
    return(
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.SubMenu key="sub1" title={<span><Icon type="book" />Books</span>}>
            <Menu.Item key="1"><Link to="/books">List Books</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/add-books">Add Books</Link></Menu.Item>
            
          </Menu.SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="user" />subnav 2</span>}>
            <Menu.Item key="3"><Link to="/Login">Login</Link> </Menu.Item>
            <Menu.Item key="4"><Link to="/signup">Signup</Link></Menu.Item>
            
          </SubMenu>

          </Menu>

         

        </Sider>

        
    );
}

export {SideMenu};