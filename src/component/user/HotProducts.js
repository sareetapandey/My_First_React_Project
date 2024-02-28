import React from "react";
import { HotProduct } from "../../services/User";
import UserItems from "./UserItems";

const HotProducts = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    HotProduct().then((response) => {
      return setData(response);
    });
  }, []);
  return (
    <div className="m-5">
      <UserItems data={data} title="Hot Products" />
    </div>
  );
};

export default HotProducts;
