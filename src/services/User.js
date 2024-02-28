import { get } from "../axios/Fetcher";

export const HotProduct = async () => {
  const response = await get("products?limit=5");
  return response;
};
export const TrendingVendor = async () => {
  const response = await get("products?limit=10");
  return response;
};
export const category = async () => {
  const response = await get("products");
  return response;
};
