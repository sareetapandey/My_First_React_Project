import { Avatar, Descriptions, Modal, Table } from "antd";
import React from "react";
import { Payment } from "../../utils/Items";
import { Post } from "./Esewa";
import KhaltiCheckout from "khalti-checkout-web";
import { config } from "./Khalti";
let checkout = new KhaltiCheckout(config);

const Order = ({
  isModalOpen,
  setIsModalOpen,
  sumNetTotal,
  sumQty,
  myOrder,
}) => {
  const [ispayment, setPayment] = React.useState(false);
  const path = "https://uat.esewa.com.np/epay/main";
  const params = {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  };

  // console.log("sumnettotal", sumNetTotal, sumQty, myOrder);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePaymentMethod = (id) => {
    setPayment(id);
  };

  const handlePayment = () => {
    if (ispayment === 1) {
      Post(path, params); // Call eSewa payment method
    } else if (ispayment === 2) {
      checkout.show({ amount: 1000 }); // Show Khalti checkout
    }
  };

  //console.log("ispayment", ispayment);

  const columns = [
    {
      title: "Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div>
      <Modal
        title="Order Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <Table columns={columns} dataSource={myOrder} pagination={false} />
        </div>
        <div className="flex items-center justify-start gap-2 ">
          <div>
            <Descriptions title={null}>
              <Descriptions.Item label="Price">{sumNetTotal}</Descriptions.Item>
              <Descriptions.Item label="Quantity">{sumQty}</Descriptions.Item>
            </Descriptions>
          </div>
          <div className=" grid gap-3">
            {Payment?.map((item) => (
              <div
                key={item.id}
                className={`border-8 cursor-pointer 
                ${item.id === ispayment ? "border-red-800" : "border-current"}`}
                onClick={() => handlePaymentMethod(item.id)}
              >
                <div>
                  <Avatar src={item.icon} />
                </div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      {ispayment && handlePayment()}
    </div>
  );
};

export default Order;
