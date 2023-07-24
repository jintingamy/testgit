import React, { useContext, useEffect } from "react";
import "../shoppingcart/shoppingcartCard.css";
import Radio, { radioClasses } from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import shopCartContext from "../../context/shopcartContext";

export default function ShoppingcartCard({ eachItem }) {
  const { title, quantity, size, colors, price, img, id, subtotalprice } =
    eachItem;
  // console.log("cart", quantity);
  let totalPricing = quantity * price;

  const { card18, setCard18 } = useContext(shopCartContext);
  const itemInCart = card18.filter((eachcard) => {
    return (eachcard.addedInCart = true);
  });

  const handleAddQuantity = (e) => {
    const newList = card18.map((eachcard) => {
      if (eachcard.id === e.target.id) {
        return {
          ...eachItem,
          quantity: quantity + 1,
        };
      }
      return eachcard;
    });
    setCard18(newList);
    // const newList = itemInCart.map((eachitem) => {
    //   if (Number(eachitem.id) === Number(e.target.id)) {
    //     return {
    //       ...eachItem,
    //       quantity: quantity + 1,
    //     };
    //   }
    //   return eachitem;
    // });
    // setItemInCart(newList);
  };
  const handleRemoveQuantity = (e) => {
    const newlist = itemInCart.map((eachitem) => {
      if (Number(eachitem.id) === Number(e.target.id)) {
        let quantity = eachitem.quantity;
        if (quantity > 1) {
          return {
            ...eachitem,
            quantity: quantity - 1,
          };
        }
      }
      return eachitem;
    });
    // setItemInCart(newlist);
  };
  const handleDelete = (e) => {
    let newfilterlist = itemInCart.filter((eachitem) => {
      return Number(eachitem.id) !== Number(e.target.id);
    });

    // setItemInCart(newfilterlist);
  };

  return (
    <div>
      <div className="BasketCard">
        <div className="BasketCard_Container">
          <div className="plusminusButtons">
            <button
              id={id}
              className="pm_buttn plus"
              onClick={(e) => handleAddQuantity(e)}
            >
              +
            </button>
            <button
              id={id}
              className="pm_buttn minus"
              onClick={(e) => handleRemoveQuantity(e)}
            >
              -
            </button>
          </div>
          <div className="BasketCardInformation">
            <div className="card_imgContainer">
              <img src={img} alt="BasketCard_img" className="cardImg" />
            </div>
            <div className="card_allinfo">
              <div className="allinfo_title">{title}</div>
              <div className="allinfo_detailInformation">
                <div className="detailList">
                  <div className="detailList_text">Quantity</div>
                  <div className="detailList_content">{quantity}</div>
                </div>
                <div className="detailList">
                  <div className="detailList_text">Size</div>
                  <div className="detailList_content">{size}</div>
                </div>
                <div className="detailList">
                  <div className="detailList_text">Color</div>
                  <div className="detailList_content">
                    {/* <Sheet
                      key={colors}
                      sx={{
                        position: "relative",
                        // top: "10px",
                        left: "5px",
                        width: 15,
                        height: 15,
                        flexShrink: 0,
                        bgcolor: `${colors}.solidBg`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Radio
                        overlay
                        variant="solid"
                        color={colors}
                        value={colors}
                        slotProps={{
                          input: { "aria-label": colors },
                          radio: {
                            sx: {
                              display: "contents",
                              "&, &.Mui-checked": {
                                color: "white",
                                fontSize: "25px",
                              },
                              "--variant-borderWidth": "2px",
                            },
                          },
                        }}
                        sx={{
                          "--joy-focus-outlineOffset": "4px",
                          "--joy-palette-focusVisible": (theme) =>
                            // theme.vars.palette[color][500],
                            theme.vars.palette[colors],
                          [`& .${radioClasses.action}.${radioClasses.focusVisible}`]:
                            {
                              outlineWidth: "2px",
                            },
                        }}
                      />
                    </Sheet> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardPricing">${totalPricing}.00</div>
          <div
            className="deleteButton"
            id={id}
            onClick={(e) => handleDelete(e)}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
}
