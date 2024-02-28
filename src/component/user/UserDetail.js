import { EyeOutlined } from "@ant-design/icons";
import { Card, Form, Rate, Space, Tabs } from "antd";
import React from "react";
import { useAppContext } from "../../ContextApi";
import { AntdInput, SaveButton } from "../common/Index";
import Order from "./Order";
import { HotProductData, TrendingVendor } from "../../utils/Items";
import Profile from "./profile/Profile";

const UserDetail = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isvalue, setIsValue] = React.useState({
    qty: 0,
    price: 0,
    name: "",
  });

  const { appState } = useAppContext();
  console.log("userdetail", appState);
  const handelBuyNow = (value) => {
    setIsModalOpen(true);
    console.log("value", value);
    setIsValue({
      qty: value?.qty,
      price: appState?.detail?.price * value?.qty,
      name: appState?.detail?.name,
    });
  };

  const onChange = (key) => {
    console.log(key);
  };
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
  return (
    <div style={{ display: "flex", justifyItems: "center", gap: "25px" }}>
      <div>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={<img alt="example" src={appState?.detail.image} />}
        ></Card>
      </div>
      <Space direction="vertical" size="small" style={{ display: "flex" }}>
        <div>{appState?.detail.name}</div>
        <div>
          Rate:
          <Rate value={appState?.detail.rate} />
        </div>

        <div>
          <EyeOutlined /> {appState?.detail.view} People viewed this product
        </div>

        <div>Description: {appState?.detail.description}</div>
        <div>stockItem: {appState?.detail.stockItem}</div>
        <div className="w-full">
          <Form onFinish={handelBuyNow}>
            <AntdInput initialValue={1} name="qty" type="number" />
            <div className="flex justify-between items-center">
              <div>
                <SaveButton
                  type="submit"
                  className="bg-black-500 text-white"
                  name={"Buy Now"}
                />
              </div>
              <div>
                <SaveButton
                  name="Add To Cart"
                  className="bg-slate-300 text-black w-full"
                />
              </div>
            </div>
          </Form>
        </div>
      </Space>
      <div>
        {isModalOpen && (
          <Order
            isModalOpen={isModalOpen}
            setIsModalOpen={(e) => setIsModalOpen(e)}
            sumNetTotal={isvalue.price}
            sumQty={isvalue.qty}
            myOrder={[isvalue]}
          />
        )}
      </div>
    </div>
  );
};

export default UserDetail;
const items = [
  {
    key: "1",
    label: "Profile",
    children: <HotProductData />,
  },
  {
    key: "2",
    label: "History",
    children: <TrendingVendor />,
  },
  {
    key: "3",
    label: "Record",
    children: "Sp",
  },
];
