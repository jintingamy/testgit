import React, { useState, useContext, useEffect } from "react";
import ShopProductsList from "../components/shoppages/shopProductList/shopProductList";
import shopCartContext from "../context/shopcartContext";
import { Margin } from "@mui/icons-material";
export default function Shop() {
  //设置useState状态，selectedCard变量名，setselectedCard函数，初始值里嵌套了数组方法slice0-11个卡片，也就是会出现12个卡片
  // const [selectedCard, setselectedCard] = useState(Shopcard18.slice(0, 11));
  //定义updateDataLength箭头函数，箭头函数内容是setselectedCard函数嵌套数组方法slice所有卡片。等会会
  const { card18, setCard18 } = useContext(shopCartContext);
  const [dataLength, setDataLength] = useState(11);
  const [selectedCard, setSelectedCard] = useState(card18.slice(0, dataLength));
  console.log("selectedCard", selectedCard);
  useEffect(() => {
    setSelectedCard(card18.slice(0, dataLength));
  }, [card18, dataLength]);
  return (
    <div>
      <ShopProductsList
        selectedCard={selectedCard}
        setDataLength={setDataLength}
        setCard18={setCard18}
        card18={card18}
      />
      {/* <div>filter tags</div> */}
    </div>
  );
}
