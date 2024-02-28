import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import AdminDashBoard from "../component/admin/DashBoard";
import UserLayout from "../layout/UserLayout";
import UserDashBoard from "../component/user/DashBoard";
import AboutUs from "../component/aboutus/AboutUs";
import LoginLayout from "../component/auth/LoginLayout";
import SignupLayout from "../component/auth/SignupLayout";
import PageNotFound from "../component/PageNotFound";
import UserDetail from "../component/user/UserDetail";
import AuthLayout from "../layout/AuthLayout";
import HotProducts from "../component/user/HotProducts";
import TrendingVendors from "../component/user/TrendingVendors";
import UserProfile from "../component/user/profile/UserProfile";
import CheckoutPage from "../component/checkoutpage/CheckouPage";
import ConfirmationPage from "../component/checkoutpage/ConfirmationPage";
import Profile from "../component/user/profile/Profile";
import categories from "../component/categories";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserDashBoard />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="userdetail/:id" element={<UserDetail />} />
        <Route path="hotproduct" element={<HotProducts />} />
        <Route path="latestproducts" element={<TrendingVendors />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="categories" element={<categories />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginLayout />} />
        <Route path="signup" element={<SignupLayout />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </>
  )
);
