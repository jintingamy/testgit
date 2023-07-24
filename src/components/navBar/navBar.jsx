import React, { useEffect, useState, useContext, useCallback } from "react";
import "./navBar.css";
import MainContext from "../shoppingcart/context";
import logo from "../../assest/eyeglasseslogo.jpg";
import Filterpopper from "../filters/filter";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import Shoppingcart from "../shoppingcart/shoppingcart";
import signContext from "../../context/signContext";
import goldenAvatar from "../../assest/goldenavatar.jpg";
import shopCartContext from "../../context/shopcartContext";

export default function Navbar({ shopCard18, updateFilter }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBarHeight, setNavBarHeight] = useState(150);
  const location = useLocation();
  const [searchInputValue, setSearchInputValue] = useState("");
  // false 是购物车关闭状态
  const [cartStatus, setCartStatus] = useState(false);
  const [showsignup, setShowsignup] = useState("");
  const [showsignin, setShowsignin] = useState("");
  const { signupInfo, setSignupInfo, ifsigned, setIfsigned } =
    useContext(signContext);

  // add to shopping cart context
  const { card18, setCard18 } = useContext(shopCartContext);
  let itemInCart_length = card18.filter((eachcard) => {
    // console.log("eacj", eachcard.addedInCart);
    return eachcard.quantity > 0;
  }).length;
  // const providerValue = useCallback(() => {
  //   return cartStatus, setCartStatus;
  // }, [cartStatus, setCartStatus]);

  function onScroll() {
    setScrollPosition(document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    if (scrollPosition > 94) {
      setNavBarHeight(85);
    } else {
      setNavBarHeight(150);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);
  //按下Enter键跳转
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      navigate(`/search/${e.target.value}`);
    }
  };
  //关闭开启购物车
  const handleShoppingCartClick = () => {
    setCartStatus(true);
  };

  return (
    <div>
      <MainContext.Provider value={{ cartStatus, setCartStatus }}>
        <div className="navigationBar" style={{ height: navBarHeight }}>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="eyewearLogo" className="eyewearlogo" />
            </div>
          </Link>
          <div className="navMenu">
            {/* <NavLink
              to="/"
              className={(isActive) => {
                return isActive ? "good" : "";
              }}
            >
              Home
            </NavLink> */}
            <NavLink to="/" className="navButt">
              Home
            </NavLink>
            <NavLink to="/shop" className="navButt">
              Shop
            </NavLink>
            {/* <NavLink
              to="/shop"
              className={(isActive) => {
                return isActive ? "good" : "false";
              }}
            >
              Shop
            </NavLink> */}
            <NavLink to="/featured" className="navButt">
              Featured
            </NavLink>

            <NavLink to="/recommended" className="navButt">
              Recommended
            </NavLink>
          </div>
          <div className="searchContainer">
            <div className="filterbutt">
              {/*首先在App.js里面已经传给Navbar这些数据，再接着传入命名为Filterpopper 函数组件（filter.jsx），传shopCard18卡片数据，传 updateFilter函数 */}
              {location.pathname === "/shop" ? (
                <Filterpopper
                  shopCard18={shopCard18}
                  updateFilter={updateFilter}
                />
              ) : (
                ""
              )}
            </div>
            <div className="search">
              <span className="searchsvg">
                <svg
                  t="1686772286212"
                  className="icon"
                  viewBox="0 0 1025 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4757"
                  width="20"
                  height="20"
                >
                  <path
                    d="M911.958045 890.721335l-241.415018-246.54112a336.369964 336.369964 0 1 0-58.095828 45.158522l247.029321 252.643623a36.859118 36.859118 0 0 0 51.749225 0 37.103218 37.103218 0 0 0 0.7323-51.261025zM176.240286 404.473897a261.431228 261.431228 0 1 1 261.431228 261.431228A261.675328 261.675328 0 0 1 176.240286 404.473897z"
                    p-id="4758"
                    fill="#8B8B8B"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                onKeyDown={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="userMenu">
            <div
              className="shoppingsvg"
              onClick={() => {
                handleShoppingCartClick();
              }}
            >
              <svg
                t="1686770010042"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3653"
                width="30"
                height="30"
              >
                <path
                  d="M64 149.333333h64c12.949333 0 25.450667 10.965333 27.178667 23.978667l74.026666 555.029333C233.706667 762.304 264.384 789.333333 298.453333 789.333333H874.666667v-42.666666H298.474667c-12.629333 0-25.28-11.136-26.986667-23.978667L197.461333 167.68C192.938667 133.461333 162.346667 106.666667 128 106.666667H64v42.666666z"
                  fill="#1A1A1A"
                  p-id="3654"
                ></path>
                <path
                  d="M277.333333 234.666667h597.504c10.453333 0 16.853333 7.402667 15.36 17.792l-51.968 363.712c-1.813333 12.757333-14.634667 23.829333-27.669333 23.829333H341.333333a21.333333 21.333333 0 0 0 0 42.666667h469.226667c34.24 0 65.066667-26.666667 69.909333-60.458667l51.968-363.712c5.141333-36.053333-21.162667-66.496-57.6-66.496H277.333333a21.333333 21.333333 0 0 0 0 42.666667z"
                  fill="#1A1A1A"
                  p-id="3655"
                ></path>
                <path
                  d="M298.666667 896m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                  fill="#1A1A1A"
                  p-id="3656"
                ></path>
                <path
                  d="M810.666667 896m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                  fill="#1A1A1A"
                  p-id="3657"
                ></path>
              </svg>
              {itemInCart_length > 0 && (
                <div className="addNumber"> {itemInCart_length}</div>
              )}
            </div>
            {ifsigned === true ? (
              <div className="ifsigned_true">
                <div className="signupInfo_Name">{signupInfo.fullname}</div>
                <div className="goldenAvatar">
                  <img
                    src={goldenAvatar}
                    alt="GoldenAvatar"
                    className="goldenAvatar_img"
                  />
                </div>
                <svg
                  className="arrowdown"
                  t="1689271581442"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2250"
                  width="20"
                  height="20"
                >
                  <path
                    d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
                    fill="#222222"
                    p-id="2251"
                  ></path>
                </svg>
              </div>
            ) : (
              <div className="signUpIn">
                {location.pathname !== "/signup" && (
                  <Link to="/signup">
                    <button className="signUp">Sign Up</button>
                  </Link>
                )}
                {location.pathname !== "/signin" && (
                  <Link to="/signin">
                    <button className="signIn">Sign In</button>
                  </Link>
                )}
              </div>
            )}
          </div>
          <Shoppingcart
            cartStatus={cartStatus}
            handleShoppingCartClick={handleShoppingCartClick}
          />
        </div>
      </MainContext.Provider>
    </div>
  );
}
