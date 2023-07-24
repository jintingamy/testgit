import React, { useState, useEffect } from "react";

import "./products.css";
import ProductCard from "../productCard/productCard";
import { Link } from "react-router-dom";

export default function Products({
  productTitle,
  productsInfo,
  whichPage,
  whichpath,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [whichpath]);

  return (
    <div className="Products">
      <div className="p_titleContainer">
        <div className="p_title">{productTitle}</div>
        {whichPage === "home" ? (
          <Link to={`/${whichpath}`}>
            <div className="seeall">See All</div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="p_productDisplay">
        {productsInfo.map((eachinfo) => {
          return (
            <Link
              to={`/productdetail/${eachinfo.id}`}
              style={{ textDecoration: "none" }}
              key={eachinfo.id}
            >
              <ProductCard
                img={eachinfo.img}
                title={eachinfo.title}
                subtitle={eachinfo.subtitle}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
