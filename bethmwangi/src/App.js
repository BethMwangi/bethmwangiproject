import React, { Component } from 'react';
import { Layout, Row, Col, } from 'antd';
import 'antd/dist/antd.css';
import SideMenu  from './components/SideMenu';


import './App.css';
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor:'white' }}>
        <Row>
        <Col style={{ backgroundColor: '' }} xs={6} sm={4} md={6} lg={8} xl={8}>
      <SideMenu />
        </Col>
        <Col xs={18} sm={20} md={18} lg={16} xl={16}></Col>
        </Row>

    {/* <Sider classname="nav-sider" style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <div className="logo" />
      <Menu className="navigation"  theme="" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="team" />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="shop" />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider> */}
    {/* <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center', minHeight: 380  }}>

          content
        </div>
      </Content>
      <Footer style={{ margin: '24px 16px 0', padding: 24, background: '#fff', textAlign: 'center' , minHeight: 180  }}>
       Footer
      </Footer>
    </Layout> */}
  </Layout>
    );
  }
}

export default App;
