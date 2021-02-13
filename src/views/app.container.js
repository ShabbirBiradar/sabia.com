import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  NotificationOutlined,
  LaptopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ArrowRightOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { SharedHeader } from "../shared";
import "./style.scss";

import { ReactComponent as All } from "../assets/icons/sidebar/all.svg";
import { ReactComponent as Quality } from "../assets/icons/sidebar/quality.svg";
import { ReactComponent as Machines } from "../assets/icons/sidebar/settings.svg";
import { ReactComponent as Energy } from "../assets/icons/sidebar/green-energy.svg";
import { ReactComponent as User } from "../assets/icons/sidebar/user.svg";
import { ReactComponent as AddUser } from "../assets/icons/sidebar/add-user.svg";
import { ReactComponent as Profile } from "../assets/icons/sidebar/user.svg";
import { ReactComponent as Engineering } from "../assets/icons/sidebar/engineering.svg";

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
export function AppContainer(props) {
  const [collapsed, toggleCollapsed] = useState(true);
  return (
    <div>
      <SharedHeader {...props} />

      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          collapsed={collapsed}
        >
          <div className="side-bar-container">
            <div className="side-shared-nav">
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
              >
                <Menu.Item
                  onClick={() => toggleCollapsed(!collapsed)}
                  key="0"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                >
                  <span style={{ color: "black", fontSize: "20px" }}>
                    DV-AR
                  </span>
                </Menu.Item>
                <hr />
                <Menu.Item
                  key="1"
                  icon={<All width="16px" height="16px" fill="#4D9CF8" />}
                >
                  All Domains <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<Quality width="20px" height="20px" fill="#4D9CF8" />}
                >
                  Quality <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<Machines width="20px" height="20px" fill="#4D9CF8" />}
                >
                  Machine <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={<Energy width="20px" height="20px" fill="#4D9CF8" />}
                >
                  Energy <RightOutlined />
                </Menu.Item>
                <Menu.Item key="14">
                  <span
                    style={{
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    Users
                  </span>
                </Menu.Item>
                <hr />
                <Menu.Item
                  key="5"
                  icon={<User width="20px" height="20px" fill="#4D9CF8" />}
                >
                  All Users <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="6"
                  icon={<AddUser width="20px" height="20px" fill="#4D9CF8" />}
                >
                  Create Users <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="7"
                  icon={<Profile width="20px" height="20px" fill="#4D9CF8" />}
                >
                  Profile <RightOutlined />
                </Menu.Item>
                <Menu.Item
                  key="8"
                  icon={
                    <Engineering width="20px" height="20px" fill="#4D9CF8" />
                  }
                >
                  Settings <RightOutlined />
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content style={{ margin: "0px 16px 0 25px" }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>

    // <div>
    //   <SharedHeader {...props} />

    //   {/* <Content
    //     className="site-layout-background"
    //     style={{
    //       padding: 0,
    //       margin: 0,
    //       minHeight: 280,
    //     }}
    //   > */}
    //   <Layout>
    //     <Sider width={200} className="site-layout-background">
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={["1"]}
    //         defaultOpenKeys={["sub1"]}
    //         style={{ height: "100%", borderRight: 0 }}
    //       >
    //         <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
    //           <Menu.Item key="1">option1</Menu.Item>
    //           <Menu.Item key="2">option2</Menu.Item>
    //           <Menu.Item key="3">option3</Menu.Item>
    //           <Menu.Item key="4">option4</Menu.Item>
    //         </SubMenu>
    //         <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
    //           <Menu.Item key="5">option5</Menu.Item>
    //           <Menu.Item key="6">option6</Menu.Item>
    //           <Menu.Item key="7">option7</Menu.Item>
    //           <Menu.Item key="8">option8</Menu.Item>
    //         </SubMenu>
    //         <SubMenu
    //           key="sub3"
    //           icon={<NotificationOutlined />}
    //           title="subnav 3"
    //         >
    //           <Menu.Item key="9">option9</Menu.Item>
    //           <Menu.Item key="10">option10</Menu.Item>
    //           <Menu.Item key="11">option11</Menu.Item>
    //           <Menu.Item key="12">option12</Menu.Item>
    //         </SubMenu>
    //       </Menu>
    //     </Sider>
    //     <Layout style={{ padding: "0 24px 24px" }}>
    //       <Content
    //         className="site-layout-background"
    //         style={{
    //           padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
    //   {/* {props.children} */}
    //   {/* </Content> */}
    // </div>
  );
}
