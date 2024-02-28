import React from "react";
import { Outlet } from "react-router-dom";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import MainHeader from "./header";
import {
  Breadcrumb,
  Button,
  Col,
  Flex,
  Input,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const commonStyle = {
    borderRadius: borderRadiusLG,
  };
  return (
    <div>
      <Layout>
        <Header className="!sticky !top-0" style={{ zIndex: 999 }}>
          <MainHeader />
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            backgroundColor: "#000000", // Change to black color
            color: "#ffffff", // Set text color to white for better visibility
            padding: "20px",
            textAlign: "center",
            ...commonStyle,
          }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Text strong style={{ color: "#ffffff" }}>
                Contact Us:
              </Text>
              <p>Email: saritapandey20176@gmail.com</p>
              <p>Phone: 9867320176</p>
            </Col>
            <Col xs={10} sm={10} md={3}>
              <Text strong style={{ color: "#ffffff" }}>
                Quick Links:
              </Text>

              <ul>
                <li>
                  <a href="/aboutus" style={{ color: "#ffffff" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" style={{ color: "#ffffff" }}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/Hotproduct" style={{ color: "#ffffff" }}>
                    Hot Products
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={10} sm={10} md={8}>
              <div>
                <Text strong style={{ color: "#ffffff" }}>
                  {" "}
                  Connect with Us:
                </Text>
                <div></div>
                <Space size="large">
                  <div>
                    <p>
                      {" "}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff" }} // White color
                      >
                        <FacebookOutlined style={{ fontSize: "20px" }} />
                      </a>
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#ffffff" }}
                    >
                      <TwitterOutlined style={{ fontSize: "20px" }} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#ffffff" }} // White color
                    >
                      <InstagramOutlined style={{ fontSize: "20px" }} />
                    </a>
                  </div>
                </Space>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Text strong style={{ color: "#ffffff" }}>
                Subscribe to Newsletter:
              </Text>
              <p>
                <Input placeholder="Enter your email" />
              </p>
              <Button type="primary" style={{ marginTop: "8px" }}>
                Subscribe
              </Button>
            </Col>
          </Row>

          <div style={{ marginTop: "20px" }}>
            <p>&copy;{new Date().getFullYear()} ShoesHolic</p>
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default UserLayout;
