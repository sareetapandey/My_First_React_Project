import React from "react";
import UserItems from "./UserItems";
import { TrendingVendor } from "../../services/User";

const TrendingVendors = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    TrendingVendor().then((response) => {
      return setData(response);
    });
  }, []);
  return (
    <div>
      <UserItems
        data={data.filter((item, index) => index > 4)}
        title="Trending Products"
      />
    </div>
  );
};

export default TrendingVendors;
