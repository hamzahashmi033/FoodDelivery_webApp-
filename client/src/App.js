import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Contact from "./components/Contact/Contact.jsx"
import Cart from "./components/Cart/Cart.jsx"
import ShippingDetails from "./components/Cart/ShippingDetails.jsx"
import ConfirmOrder from "./components/Cart/ConfirmOrder.jsx"
import OrderSuccess from "./components/Cart/OrderSuccess.jsx"
import Login from "./components/Login/Login.jsx"
import Profile from './components/Profile/Profile.jsx'
import MyOrders from "./components/Orders/MyOrders.jsx"
import OrderDetails from "./components/Orders/OrderDetails.jsx"
import Dashboard from "./components/Admin/Dashboard.jsx"
import Users from "./components/Admin/Users.jsx"
import AdminOrders from "./components/Admin/AdminOrders.jsx"
import NotFound from "./components/Layout/NotFound.jsx"
import Loader from "./components/Layout/Loader.jsx"
import toast, { Toaster } from "react-hot-toast";

// import styles
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import  "./styles/menu.scss"
import  "./styles/footer.scss"
import  "./styles/Contact.scss"
import "./styles/cart.scss"
import "./styles/ShippingDetails.scss"
import "./styles/confirmOrder.scss"
import "./styles/Login.scss"
import "./styles/Profile.scss"
import "./styles/Table.scss"
import "./styles/orderDetails.scss"
import "./styles/Dashboard.scss"
function App() {
  const isAuthenticated = true
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shipping" element={<ShippingDetails/>}/>
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route path="/ordersuccess" element={<OrderSuccess/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/orderdetails" element={<OrderDetails/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/loading" element={<Loader/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Toaster/>
      <Footer/>
    </Router>
  );
}

export default App;
