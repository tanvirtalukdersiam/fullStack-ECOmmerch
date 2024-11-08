import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Rootlayout from "./Components/layout/Rootlayout";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Eror404 from "./pages/Eror404";
import SignUp from "./pages/SignUp";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";
import ForgetPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import AllUsers from "./admin/AllUsers";
import UpdateUser from "./admin/UpdateUser";
import AllProduct from "./admin/AllProduct";
import AddProducts from "./admin/AddProducts";
import EditOrDeleteProducts from "./admin/EditOrDeleteProducts";
import AllCategory from "./admin/AllCategory";
import AddCategory from "./admin/AddCategory";
import UpdateCategory from "./admin/UpdateCategory";
import ProductDetiels from "./pages/ProductDetiels";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home title="Home" />}></Route>
        <Route path="/shop" element={<Shop title="Products" />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetiels />}></Route>

        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
        <Route
          path="/changePassword/:token"
          element={<ChangePassword />}
        ></Route>
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="alluser" element={<AllUsers />} />
        <Route path="updateUser" element={<UpdateUser />} />
        <Route path="allProducts" element={<AllProduct />} />
        <Route path="addProducts" element={<AddProducts />} />
        <Route path="editOrDeleteProducts" element={<EditOrDeleteProducts />} />
        <Route path="allCategory" element={<AllCategory />} />
        <Route path="addCategory" element={<AddCategory />} />
        <Route path="UpdateCategory" element={<UpdateCategory />} />
      </Route>
      {/* <Route path="*" element={<Eror404 />} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
