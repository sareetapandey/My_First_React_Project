import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Menu, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../utils/Storage";

const UserHeader = () => {
  const navigate = useNavigate();
  const handelClick = (e) => {
    console.log("event", e);
    if (Number(e.key) === 2) {
      Logout();
      navigate("/");
    } else {
      navigate("/user/profile");
    }
    // if (Number(e.key) === 1) {
    //   localStorage.removeItem("token");
    //   navigate("/");
    // } else {
    //   localStorage.removeItem("token");
    //   navigate("/admin");
    // }
  };

  const items = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Logout",
    },
  ];
  const menu = (
    <Menu onClick={handelClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="flex justify-between">
      <div>
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Space size={24}>
            <Badge dot>
              <Avatar
                className="bg-white text-blue-950"
                shape="square"
                icon={<UserOutlined />}
              />
            </Badge>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default UserHeader;
