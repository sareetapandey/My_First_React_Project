import React from "react";
import { Tabs } from "antd";
import UserProfile from "./UserProfile";
import History from "./History";
import Record from "./Record";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Profile",
    children: <UserProfile />,
  },
  {
    key: "2",
    label: "History",
    children: <History />,
  },
  {
    key: "3",
    label: "Record",
    children: <Record />,
  },
];
const Profile = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default Profile;
