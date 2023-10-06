import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}
const items = [
  getItem('Laptop', 'Laptop'),
  getItem('Trimmer', 'Trimmer'),
  getItem('Earphones', 'Earphones', [
    getItem('Earphones', 'Earphoness'),
    getItem('TWS', 'TWS'),
    getItem('Neckband', 'Neckband'),
  ]),
  getItem('Watch', 'Watchs',  [getItem('Watch', 'Watch'), getItem('Smart Watch', 'Smart Watch')]),
  getItem('Shoes', 'Shoes'),
  getItem('home theater', 'home theater'),
  getItem('Sports', 'Sports'),
];
const Products = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function printc(item){
    console.log(item.keyPath[0]);
    if(item.keyPath[0] === "Watch"){
      return <Link to='/contact' >Watch</Link>
    }
  }
  return (
    <Layout
      style={{
        minHeight: '87vh',
        maxHeight: '87vh'
      }}
    >
      <Sider className=' overflow-y-scroll scroll' theme='dark' width={250} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" defaultSelectedKeys={['9']} mode="inline" items={items} onClick={printc}/>
      </Sider>
      <Content className=' bg-cyan-700'>

      </Content>
    </Layout>
  );
};

export default Products