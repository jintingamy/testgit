import React, { useState, useEffect, useContext } from "react";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import Products from "./components/products/products";
import SignupIn from "./components/signup/signupIn";
import Search from "./components/search/search";
import signContext from "./context/signContext";
import shopCartContext from "./context/shopcartContext";
import allContext from "./context";
//imges
import img_biscut from "../src/assest/biscut.jpg";
import img_blue from "../src/assest/blue.jpg";
import img_brown from "../src/assest/brown.jpg";
import img_golden from "../src/assest/golden.jpg";
import img_red from "../src/assest/red.jpg";
import img_sbrown from "../src/assest/sbrown.jpg";
import Footer from "./components/footer/footer";
import ShopProductsList from "./components/shoppages/shopProductList/shopProductList";
import FeaturedProducts from "./components/featuredpages/featuredproducts/featuredproducts";
import Productdetail from "./components/detail/detail";
import img_green from "../src/assest/green.jpg";

//Routes
import Home from "./pages/home";
import Shop from "./pages/shop";
import Featured from "./pages/featured";
import Recommended from "./pages/recommended";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
function App() {
  //Shop页面中的18张眼镜卡片里的所有资料：img,title,subtitle,price
  const Shopcard18 = [
    {
      id: 1,
      cardtype: "shopcard",
      img: img_blue,
      title: "Sugat",
      subtitle: "Betsin Maalat",
      price: 56,
      addedInCart: false,
      quantity: 0,
      colors: ["primary", "neutral"],
    },
    {
      id: 2,
      cardtype: "shopcard",
      img: img_biscut,
      title: "Kulangot",
      subtitle: "Sexbomb",
      price: 67,
      recommended: true,
      colors: ["primary", "neutral", "danger", "info", "success", "warning"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 3,
      cardtype: "shopcard",
      img: img_blue,
      title: "Tiktilaok Manok",
      subtitle: "Sexbomb",
      price: 78,
      recommended: true,
      colors: ["primary", "success", "warning"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 4,
      cardtype: "shopcard",
      img: img_sbrown,
      title: "Very Nice",
      subtitle: "Salt Maalat",
      price: 79,
      featured: true,
      colors: ["primary", "info", "success", "warning"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 5,
      cardtype: "shopcard",
      img: img_red,
      title: "Quake Overload",
      subtitle: "Yezyow",
      price: 80,
      recommended: true,
      colors: ["danger", "info", "success", "warning"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 6,
      cardtype: "shopcard",
      img: img_brown,
      title: "Kutu",
      subtitle: "Sexbomb",
      price: 129,
      colors: ["danger", "info", "success", "warning", "neutral"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 7,
      cardtype: "shopcard",
      img: img_sbrown,
      title: "Tuluk",
      subtitle: "Black Kibal",
      price: 142,
      recommended: true,
      colors: ["success", "warning", "neutral", "danger"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 8,
      cardtype: "shopcard",
      img: img_green,
      title: "Takla Green",
      subtitle: "Sexboomb",
      price: 150,
      recommended: true,
      colors: ["success", "warning", "neutral"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 9,
      cardtype: "shopcard",
      img: img_golden,
      title: "Balakubak",
      subtitle: "Betsin Maalat",
      price: 170,
      colors: ["success", "warning", "danger"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 10,
      cardtype: "shopcard",
      img: img_golden,
      title: "Pitaklan",
      subtitle: "Black Kibal",
      price: 174,
      colors: ["success", "info", "danger"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 11,
      cardtype: "shopcard",
      img: img_brown,
      title: "Burnikk",
      subtitle: "Sexbomb",
      price: 240,
      featured: true,
      colors: ["danger", "success"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 12,
      cardtype: "shopcard",
      img: img_red,
      title: "Sipon Malapot",
      subtitle: "Salt",
      price: 250,
      featured: true,
      colors: ["danger", "info", "danger", "success"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 13,
      cardtype: "shopcard",
      img: img_biscut,
      title: "Buldit",
      subtitle: "Salt Maalat",
      price: 250,

      colors: ["warning", "danger", "success"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 14,
      cardtype: "shopcard",
      img: img_blue,
      title: "Merry Christmas",
      subtitle: "Salt Maalat",
      price: 78,
      colors: ["warning", "danger", "success", "neutral"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 15,
      cardtype: "shopcard",
      img: img_blue,
      title: "Tilis Malaput",
      subtitle: "Betsin Maalat",
      price: 340,
      featured: true,
      colors: ["danger", "info"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 16,
      cardtype: "shopcard",
      img: img_golden,
      title: "Merry Christmas",
      subtitle: "Salt Maalat",
      price: 365,
      featured: true,
      colors: ["success", "primary", "neutral"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 17,
      cardtype: "shopcard",
      img: img_sbrown,
      title: "Tilapia",
      subtitle: "Salt Maalat",
      price: 450,
      recommended: true,
      colors: ["warning", "success", "neutral"],
      quantity: 0,
      addedInCart: false,
    },
    {
      id: 18,
      cardtype: "shopcard",
      img: img_blue,
      title: "Kibal Batal",
      subtitle: "Kibal Black",
      price: 674,
      featured: true,
      colors: ["info"],
      quantity: 0,
      addedInCart: false,
    },
  ];

  const [card18, setCard18] = useState(Shopcard18);
  console.log("DATA", card18);
  const [signupInfo, setSignupInfo] = useState("");

  // 确定user有没有登录
  const [ifsigned, setIfsigned] = useState(false);
  //设置useState状态，selectedCard变量名，setselectedCard函数，初始值里嵌套了数组方法slice0-11个卡片，也就是会出现12个卡片
  const [selectedCard, setselectedCard] = useState(card18.slice(0, 11));
  //定义updateDataLength箭头函数，箭头函数内容是setselectedCard函数嵌套数组方法slice所有卡片。等会会
  const updateDataLength = () => {
    setselectedCard(card18.slice(0, 17));
  };
  //定义updateFilter箭头函数，专门用于接收brand,sort of, price里面的数据，然后将这些数据传给setselectedCard函数。因为setselectedCard会显示最终有多少个眼镜卡片
  const updateFilter = (data) => {
    setselectedCard(data);
  };
  //
  const [itemInCart, setItemInCart] = useState([]);

  return (
    <BrowserRouter>
      <shopCartContext.Provider
        value={{ itemInCart, setItemInCart, card18, setCard18 }}
      >
        <signContext.Provider
          value={{ signupInfo, setSignupInfo, ifsigned, setIfsigned }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<Home productsInfo={card18} />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route
                path="/featured"
                element={<Featured productsInfo={card18} />}
              ></Route>
              <Route
                path="/recommended"
                element={<Recommended productsInfo={card18} />}
              ></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route
                path="/productdetail/:id"
                element={
                  <Productdetail
                    // Shopcard18={Shopcard18}
                    productsInfo={card18}
                  />
                }
              ></Route>
              <Route
                path="/search/:searchid"
                element={<Search productsInfo={card18} />}
              ></Route>
            </Routes>
            {/* 函数传参Shopcard18个卡片，传参：updateFilter函数，这样navbar里面就能使用这些数据和函数 */}
            <NavBar shopCard18={card18} updateFilter={updateFilter} />

            {/* <Productdetail />
        <Signup /> */}
          </div>
        </signContext.Provider>
      </shopCartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
