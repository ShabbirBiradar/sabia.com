import React, { useRef, useState } from "react";
import {
  Layout,
  Menu,
  Dropdown,
  Card,
  Row,
  Button,
  Col,
  Radio,
  Avatar,
} from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { ReactComponent as Notification } from "../../../assets/icons/notification.svg";

import "./style.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Node1 } from "../../../assets/icons/node/1-Mines.svg";
import { ReactComponent as Node2 } from "../../../assets/icons/node/fan.svg";
import { ReactComponent as Node3 } from "../../../assets/icons/node/filter.svg";
import { ReactComponent as Node4 } from "../../../assets/icons/node/lab.svg";
import { ReactComponent as Node5 } from "../../../assets/icons/node/machine.svg";
import { ReactComponent as Node6 } from "../../../assets/icons/node/milling-machine.svg";
import { ReactComponent as Node7 } from "../../../assets/icons/node/roll-crusher.svg";
import { ReactComponent as Node8 } from "../../../assets/icons/node/settings (1).svg";
import { ReactComponent as Node9 } from "../../../assets/icons/node/silo.svg";
import { ReactComponent as Node10 } from "../../../assets/icons/node/terrain.svg";
import { ReactComponent as Node11 } from "../../../assets/icons/node/arrow-point-to-right.svg";

const { Header } = Layout;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function SharedHeader(props) {
  const [active, setActive] = useState("hist");

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Layout>
        <Header className="header">
          {/* <img src={logo} style={{ width: "10%" }} /> */}

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" className="img-ant-menu-submenu">
              <div className="header-logo" />
            </Menu.Item>

            <Menu.Item key="2" className="img-ant-menu-submenu">
              <div style={{ backgroundColor: "#fff" }}>
                <div class="pulsating-circle"></div>
                <span style={{ color: "black", padding: "0px 24px 0px 50px" }}>
                  26th Dec, 2021
                </span>
              </div>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                height: "64px",
                backgroundColor: "none",
                marginLeft: "12%",
              }}
            >
              <Radio.Group
                style={{ borderRadius: "10px" }}
                onChange={(e) => setActive(e.target.value)}
                value={active}
              >
                <Radio.Button value="hist">Historian</Radio.Button>
                <Radio.Button value="real">Real Time</Radio.Button>
                <Radio.Button value="pre">Rediction</Radio.Button>
              </Radio.Group>
            </Menu.Item>

            <Menu.Item
              key="4"
              style={{
                height: "64px",
                backgroundColor: "none",
                marginLeft: "4%",
              }}
            >
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  ULTRA INC. -SAN JOSE <DownOutlined />
                </a>
              </Dropdown>
            </Menu.Item>

            <Menu.Item key="5" className="img-ant-menu-submenu">
              <div>
                <span
                  style={{
                    backgroundColor: "#fff",

                    padding: "12px 8px 5px 8px",
                    borderRadius: "50px",
                  }}
                >
                  <Notification width="20px" height="20px" />
                </span>

                <span style={{ color: "black", padding: "0px 0px 0px 20px" }}>
                  <Avatar size="large" />
                </span>
                <span style={{ color: "#fff", padding: "0px 0px 0px 10px" }}>
                  @Username
                </span>
              </div>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export function NodeHeader(props) {
  const carRef = useRef(null);
  const data = [
    {
      name: "Node 1",
      value: "1234",
      Icon: <Node1 width="30px" height="30px" />,
    },
    {
      name: "Node 2",
      value: "1234",
      Icon: <Node2 width="30px" height="30px" />,
    },
    {
      name: "Node 3",
      value: "1234",
      Icon: <Node3 width="30px" height="30px" />,
    },
    {
      name: "Node 4",
      value: "1234",
      Icon: <Node4 width="30px" height="30px" />,
    },
    {
      name: "Node 5",
      value: "1234",
      Icon: <Node5 width="30px" height="30px" />,
    },
    {
      name: "Node 6",
      value: "1234",
      Icon: <Node6 width="30px" height="30px" />,
    },
    {
      name: "Node 7",
      value: "1234",
      Icon: <Node7 width="30px" height="30px" />,
    },
    {
      name: "Node 8",
      value: "1234",
      Icon: <Node8 width="30px" height="30px" />,
    },
    {
      name: "Node 9",
      value: "1234",
      Icon: <Node9 width="30px" height="30px" />,
    },
    {
      name: "Node 10",
      value: "1234",
      Icon: <Node10 width="30px" height="30px" />,
    },
    {
      name: "Node 11",
      value: "1234",
      Icon: <Node11 width="30px" height="30px" />,
    },
    {
      name: "Node 12",
      value: "1234",
      Icon: <Node2 width="30px" height="30px" />,
    },
    {
      name: "Node 13",
      value: "1234",
      Icon: <Node2 width="30px" height="30px" />,
    },
  ];

  return (
    <div className="main-header">
      <Row>
        <Col span={22}>
          <Carousel
            ref={carRef}
            arrows={false}
            responsive={responsive}
            className="node-container"
          >
            {data.map((i, k) => (
              <div key={k} className="node-card" style={{ display: "flex" }}>
                <div style={{ width: "40%" }} className="node-icons">
                  {i.Icon}
                </div>

                <div style={{ width: "60%" }}>
                  <div>
                    <span className="value-container"></span>
                    <span> {i.value}</span>
                  </div>
                  <div>{i.name}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={2} className="next-prev-btn">
          {/* <div className="next-prev-btn"> */}
          <Button
            onClick={() => carRef.current.next()}
            style={{
              padding: "0px 15px",
              height: "2vw",
              marginBottom: "5px",
              boxShadow: "0px 0px 10px 0px #ddd",
            }}
          >
            <ArrowRightOutlined />
          </Button>
          <Button
            onClick={() => carRef.current.previous()}
            style={{
              padding: "0px 15px",
              height: "2vw",
              marginTop: "5px",
              boxShadow: "0px 0px 10px 0px #ddd",
            }}
          >
            <ArrowLeftOutlined />
          </Button>
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
}
