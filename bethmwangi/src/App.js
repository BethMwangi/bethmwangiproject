import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import SideMenu from "./components/SideMenu";
import Contact from "./components/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Row>
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
          <Col xs={18} sm={20} md={18} lg={16} xl={16}>
            <Contact />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
