import { Link, useNavigate } from "react-router-dom";
import { Auth, HeaderItem } from "../../utils/Items";
import { Button } from "antd/es/radio";
import logo from "../../image/logo.png";
import UserHeader from "../header/UserHeader";

import {
  DeleteFilled,
  MinusCircleFilled,
  PlusCircleFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../../ContextApi";
import { Badge, Drawer, Image, message } from "antd";
import React, { useState } from "react";
import Order from "../../component/user/Order";
import { Token } from "../../utils/Storage";

const Index = () => {
  const { appState, updateState } = useAppContext();
  const [myOrder, setMyOrder] = React.useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token, name } = Token();
  console.log("appState", token);
  const navigate = useNavigate();
  const handelClick = (e) => {
    navigate(e);
  };

  const handleDrawerOpen = () => {
    if (myOrder.length > 0) {
      setDrawerVisible(true);
    }
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };
  React.useEffect(() => {
    setMyOrder([...new Set(appState?.addtocard)]);
  }, [appState?.addtocard]);
  const handleAdd = (id) => {
    console.log("myOrder", myOrder);
    const updateAdddata = myOrder?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMyOrder(updateAdddata);
    console.log(updateAdddata, "plus");
  };

  const handleSub = (id) => {
    console.log("myOrder", myOrder);
    const updateSubdata = myOrder?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: Math.max(1, item.qty - 1),
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMyOrder(updateSubdata);
    console.log(updateSubdata, "Sub");
    console.log(id, "minus");
  };

  const handelDelete = (id) => {
    const updatedDeletedata = myOrder.filter((item) => item.id !== id);
    setMyOrder(updatedDeletedata);
  };
  const showModal = () => {
    if (token) {
      setIsModalOpen(true);
    } else {
      message.info("Please login first!");
    }
  };

  const sumNetTotal = myOrder?.reduce((sum, service) => {
    console.log("sum", sum, service);
    return sum + parseFloat(Number(service.price * service.qty));
  }, 0);
  console.log("sumNetTotal", sumNetTotal);
  const sumQty = myOrder?.reduce((sum, service) => {
    console.log("sum", sum, service);
    return sum + parseFloat(service.qty);
  }, 0);
  console.log("sumQty", sumQty);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <div>
        <Link to="/">
          <img
            style={{
              width: "65px",
              height: "65px",
              paddingTop: "15px",
              marginbottom: "20px",
            }}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "25px",
          color: "white",
        }}
      >
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white" }}
            onClick={() => {
              handelClick(item.link);
            }}
          >
            {item.name}
          </div>
        ))}

        <div>
          <div className="flex justify-items-center gap-4">
            <div>
              <div>
                {token && (
                  <div className="flex items-center gap-2">
                    <div>
                      <UserHeader />
                    </div>
                    <div>{name}</div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Badge count={myOrder.length} showZero>
                <ShoppingCartOutlined
                  style={{ fontSize: "25px", color: "white" }}
                  onClick={handleDrawerOpen}
                />
              </Badge>
            </div>
          </div>
        </div>

        {/* Drawer for shopping cart */}
        {drawerVisible && (
          <div>
            <Drawer
              title="Shopping Cart"
              placement="right"
              onClose={handleDrawerClose}
              visible={drawerVisible}
            >
              <div>
                {/* Display shopping cart content without using map */}
                <h3>Items in Cart:</h3>
                {myOrder?.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-20 h-20">
                      <Image src={item.Image} alt="noimage" />
                    </div>
                    <div>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price * item.qty}</div>
                      <div>Quantity: {item.qty}</div>

                      <div> View: {item.view}</div>
                      <div> StockItem: {item.stockItem}</div>
                    </div>
                    <div className="flex gap-3 cursor-move">
                      <div>
                        <PlusCircleFilled onClick={() => handleAdd(item.id)} />
                      </div>
                      <div>
                        <MinusCircleFilled onClick={() => handleSub(item.id)} />
                      </div>

                      <div>
                        <DeleteFilled onClick={() => handelDelete(item.id)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Button className="bg-green-600 w-full" onClick={showModal}>
                  Order Now
                </Button>
                {}
                {isModalOpen && (
                  <Order
                    isModalOpen={isModalOpen}
                    setIsModalOpen={(e) => setIsModalOpen(e)}
                    sumNetTotal={sumNetTotal}
                    sumQty={sumQty}
                    myOrder={myOrder}
                  />
                )}
              </div>
            </Drawer>
          </div>
        )}
        {!token && (
          <div style={{ display: "flex", gap: "25px", color: "white" }}>
            {Auth?.map((item) => (
              <div
                key={item.link}
                style={{ color: "white" }}
                onClick={() => {
                  handelClick(item.link);
                }}
              >
                <Button>{item.name}</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Index;
