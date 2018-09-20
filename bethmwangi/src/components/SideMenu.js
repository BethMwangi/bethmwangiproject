import React, { Component } from "react";
import { Row, Col, Menu, Icon, Switch } from "antd";
const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
  state = {
    // theme:'dark',
    current: "1"
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>


            <Menu
              onClick={this.handleClick}
              style={{
                width: 400,
                height: 700,
                backgroundColor: "#000000",
                opacity: "0.9",
                paddingLeft: "40%",
                paddingTop: "10%"
              }}
              //   defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >

              <Menu.Item
                style={{
                  marginBotton: "10px",
                  fontSize: '24px',
                  fontWeight: 400
                }}>
            BETH MWANGI

              </Menu.Item>
              <Menu.Item>SOFTWARE DEVELOPER</Menu.Item>
              <Menu.Item key="1">
              <Icon type="home" />
                ABOUT
              </Menu.Item>

              <Menu.Item key="2">
              <Icon type="code" />
                PROJECTS
            </Menu.Item>
              <Menu.Item key="3">
              <Icon type="file-text" />
                RESUME
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="mail" />
                CONTACT
              </Menu.Item>

              {/* <ul>
                <li>
                  Github
                </li>
                <li>
                  Github
                </li>
              </ul> */}

            </Menu>



      </div>
    );
  }
}
