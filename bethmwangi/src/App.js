import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

import "antd/dist/antd.css";
import SideMenu from "./components/SideMenu";
import Contact from "./components/Contact";

import "./App.css";
const { Header, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div className="main">
        <Row
          style={{
            background: "#fff"
          }}
        >
          <Col
            style={{
              width: 400,
              height: 700
            }}
            xs={6}
            sm={4}
            md={6}
            lg={8}
            xl={8}
          >
            <SideMenu />
          </Col>
          <Col
            style={{
              background: "#fff",
              marginLeft: 25
            }}
            xs={24}
            sm={20}
            md={18}
            lg={16}
            xl={16}
          >
            <Row>
              <h1
                style={{
                  // fontFamily:
                  lineHeight: 1.5,
                  fontWeight: 700,
                  paddingTop: 20
                }}
              >
                Contact Me
              </h1>
            </Row>
            <Row>
              <Content
                style={{
                  background: "#ff7875",
                  padding: 24,
                  marginTop: 20,
                  borderRadius: 8
                  // marginLeft: 20
                  // minHeight: 340
                }}
              >
                <Contact />
              </Content>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
