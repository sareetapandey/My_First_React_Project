import React, { useState } from "react";
import { Form, Input, Button, Radio, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import {
  BankOutlined,
  CreditCardOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [form] = Form.useForm();

  const handleInputChange = (field, value) => {
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  const handleFormSubmit = () => {
    // Add logic to handle the form submission, e.g., send data to the server
    console.log("Billing Details submitted:", billingDetails);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Add logic to handle placing an order with the selected payment method
    console.log("Placing order with payment method:", paymentMethod);
    navigate("/confirmation");
  };
  const getPaymentIcon = () => {
    switch (paymentMethod) {
      case "esewa":
        return <WalletOutlined />;
      case "bank":
        return <BankOutlined />;
      case "khalti":
        return <CreditCardOutlined />;
      default:
        return null;
    }
  };
  return (
    <div>
      <h2>Billing Address</h2>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleFormSubmit}
        form={form}
      >
        <Form.Item label="Full Name" name="fullName" required>
          <Input
            value={billingDetails.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Address" name="address" required>
          <Input
            value={billingDetails.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="City" name="city" required>
          <Input
            value={billingDetails.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Zip Code" name="zipCode" required>
          <Input
            value={billingDetails.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Country" name="country" required>
          <Input
            value={billingDetails.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Email" name="email" required>
          <Input
            type="email"
            value={billingDetails.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Phone" name="phone" required>
          <Input
            type="tel"
            value={billingDetails.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </Form.Item>
      </Form>
      <h2>Payment Method</h2>
      {/* Payment method radio group */}
      <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
        <Radio value="cash">Cash on Delivery</Radio>
        <Radio value="esewa">eSewa</Radio>
        <Radio value="bank">Bank Transfer</Radio>
        <Radio value="khalti">Khalti</Radio>
        {/* Display payment icon based on the selected payment method */}
        {getPaymentIcon() && (
          <Row gutter={16}>
            <Col span={8}>{getPaymentIcon()}</Col>
            <Col span={16}>
              {/* Add payment method description or additional UI components */}
              <p>Selected Payment Method: {paymentMethod}</p>
            </Col>
          </Row>
        )}

        {/* Add more payment options as needed */}
      </Radio.Group>
      <Button
        onClick={handlePlaceOrder}
        disabled={
          !form.isFieldsTouched(true) ||
          form.getFieldsError().some((field) => field.errors.length)
        }
      >
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutPage;
