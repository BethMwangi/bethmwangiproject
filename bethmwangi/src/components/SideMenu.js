import React, { Component } from 'react'
import { Row, Col, Menu, Icon , Switch} from 'antd';
const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
    state = {
        // theme:'dark',
        current: '1',
    }
    changeTheme = (value) => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      }

      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
  render() {
    return (
      <div>
        <Row>
            <Col>

        <br />

        <Menu
        //   theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 400, height: 700 , backgroundColor: '#000000', opacity: '0.6' , paddingLeft: '40%', paddingTop: '20%'}}
        //   defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item
          key="1">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
        </Menu>

            </Col>
        </Row>
      </div>
    )
  }
}
