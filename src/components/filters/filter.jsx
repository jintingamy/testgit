import React, { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import "../filters/filter.css";
import Dropdown from "../shoppages/dropdownlist/dropdown";
import Rangefilter from "./rangefilter/rangefilter";
// 接收传由navBar传过来的shopCard18, updateFilter数据
export default function SimplePopper({ shopCard18, updateFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // 设置State,参数selectedFilterValue，函数setSelectedFilterValue，无初始值。专门用于选择符合要求Brand和Sortby里面的数据
  const [selectedFilterValue, setSelectedFilterValue] = useState({
    brand: "",
    sortBy: "",
    priceMin: 67,
    priceMax: 674,
  });
  // console.log("selectedFilterValue", selectedFilterValue);
  // 设置State,参数selectedFilterPrice，函数setSelectedFilterPrice，无初始值。专门用于选择符合要求Price里面的数据
  // const [selectedFilterPrice, setSelectedFilterPrice] = useState();
  // 设置State,参数selectedFilterPricemax，函数setselectedFilterPricemax，无初始值。专门用于选择符合要求Price最大值里面的数据
  // const [selectedFilterPricemax, setSelectedFilterPricemax] = useState();
  //设置State，用于Sort By,函数setselectedFilterSort，，无初始值。专门用于选择符合要求Sort By里面的数据
  // const [selectedFilterSort, setselectedFilterSort] = useState();

  //设置handleClick 函数，会赋予给Apply Filter Button，当点击它时，会相当于点击灰色Filter按钮
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  //定义函数receiveFilterinfo，调用11行setSelectedFilterValue函数，将接收到的参数selectedvalue，传进setSelectedFilterValue.传入DropDownList去filter数据
  // const receiveFilterinfo = (selectedvalue) => {
  //   setSelectedFilterValue(selectedvalue);
  // };

  // 定义filtershopcard18 subtitle map function，如果selectedFilterValue里面的Brand不等于 “All Brand”,
  //返回接收的参数 filteredcard里面的subtitle等同于selectedFilterValue的数据。
  //不然就selectedFilterValue里面的数据就是18个卡片

  // const filteredshopCard18_value = shopCard18
  //   .filter((eachfilteredcard) => {
  //     if (selectedFilterValue.brand !== "All Brands") {
  //       return eachfilteredcard.subtitle === selectedFilterValue.brand;
  //     } else {
  //       return shopCard18;
  //     }
  //   })
  //   .filter((eachfilteredcard) => {
  //     return selectedFilterValue.priceMin <= eachfilteredcard.price;
  //   })
  //   .filter((eachfilteredcard) => {
  //     return eachfilteredcard.price <= selectedFilterValue.priceMax;
  //   });
  // console.log("filter value", filteredshopCard18_value);
  //
  //定义filtershopcard18 price map function，如果selectedFilterPrice里面的Price小于或等于eachProducts参数里的Price,就返回这组数据。
  //同时继续filter， 如果 eachProducts.price <= selectedFilterPricemax，就返回这组数据。

  // const filteredshopCarid18_price = shopCard18
  //   .filter((eachProducts) => {
  //     return selectedFilterValue.priceMin <= eachProducts.price;
  //   })
  //   .filter((eachProducts) => {
  //     return eachProducts.price <= selectedFilterValue.priceMax;
  //   });

  const filteredshopCard18_value = shopCard18
    .filter((eachfilteredcard) => {
      if (
        selectedFilterValue.brand === "All Brands" ||
        selectedFilterValue.brand === ""
      ) {
        return shopCard18;
      } else {
        return eachfilteredcard.subtitle === selectedFilterValue.brand;
      }
    })
    .filter((eachfilteredcard) => {
      return selectedFilterValue.priceMin <= eachfilteredcard.price;
    })
    .filter((eachfilteredcard) => {
      return eachfilteredcard.price <= selectedFilterValue.priceMax;
    });

  //Sort By Ascending and Descending

  //Sorting
  if (selectedFilterValue.sortBy === "Name Ascending A - Z") {
    filteredshopCard18_value.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (selectedFilterValue.sortBy === "Name Descending Z - A") {
    filteredshopCard18_value.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  } else if (selectedFilterValue.sortBy === "Price High - Low") {
    filteredshopCard18_value
      .sort((a, b) => {
        return a.price - b.price;
      })
      .reverse();
  } else if (selectedFilterValue.sortBy === "Price Low - High") {
    filteredshopCard18_value.sort((a, b) => {
      return a.price - b.price;
    });
  }
  //设置handleApplyFilter函数，当点击FilterApply时就会关闭POOPER，同时调用updateFilter函数里的三个参数，value是brand，price，pricemax,sort by
  const handleApplyFilter = function handleApplyFilter(event) {
    // 传选择好的brand
    setAnchorEl(anchorEl ? null : event.currentTarget);
    updateFilter(filteredshopCard18_value);
    // updateFilter(filteredshopCarid18_price);
  };

  const handleResetFilter = function handleResetFilter(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedFilterValue({
      brand: "",
      sortBy: "",
      priceMin: 67,
      priceMax: 674,
    });
    updateFilter(shopCard18);
  };
  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="filterbutt"
      >
        Filters
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} className="popper">
        <Box
          className="popperBox"
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
        >
          <div className="popperBox_Center">
            <div className="popperDropdown">
              <div className="branddropdown">
                <div className="brand">Brand</div>
                <Dropdown
                  dropdownName=" "
                  dropdownwith={250}
                  inputLable={`All Brands`}
                  names={[
                    "All Brands",
                    "Salt Maalat",
                    "Betsin Maalat",
                    "Black Kibal",
                    "Sexbomb",
                  ]}
                  // receiveFilterinfo={receiveFilterinfo}

                  setSelectedFilterValue={setSelectedFilterValue}
                  selectedFilterValue={selectedFilterValue}
                />
              </div>
              <div className="branddropdown">
                <div className="sort">Sort By</div>
                <Dropdown
                  dropdownName="sortbylist"
                  dropdownwith={250}
                  inputLable={`None`}
                  names={[
                    `None`,
                    `Name Ascending A - Z`,
                    `Name Descending Z - A`,
                    `Price High - Low`,
                    `Price Low - High`,
                  ]}
                  setSelectedFilterValue={setSelectedFilterValue}
                  selectedFilterValue={selectedFilterValue}
                />
              </div>
            </div>
            {/* 价格Price Range Filter */}
            <Rangefilter
              setSelectedFilterValue={setSelectedFilterValue}
              selectedFilterValue={selectedFilterValue}
            />
            <div className="popperbutts">
              <button
                className="applyfil"
                // 调用handleApplyFilter函数
                onClick={(event) => handleApplyFilter(event)}
              >
                Apply filters
              </button>
              <button
                className="resetfil"
                onClick={(event) => handleResetFilter(event)}
              >
                Reset filters
              </button>
            </div>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
