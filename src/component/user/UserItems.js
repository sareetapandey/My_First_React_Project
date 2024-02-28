import { Badge, Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";

const UserItems = ({ data, title }) => {
  const { appState, updateState } = useAppContext();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Ensure appState.addtocard is initialized as an array
    const currentCart = Array.isArray(appState.addtocard)
      ? appState.addtocard
      : [];

    // Assuming addToCart is a function that adds the item to the cart in context
    updateState({ ...appState, addtocard: [...currentCart, item] });
  };

  const handleItemClick = (item) => {
    updateState({ ...appState, detail: item });
    navigate(`/userdetail/${item.id}`);
  };

  const cartItemCount = appState.addtocard ? appState.addtocard.length : 0;

  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
      >
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.image} />}
              onClick={() => handleItemClick(item)}
            >
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Brand: {item.Brand}</div>
            </Card>
            <div>
              <Button
                className="w-full bg-black text-white"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;
