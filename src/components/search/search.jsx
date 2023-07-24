import React from "react";
import { useParams } from "react-router-dom";
import "../search/search.css";
import ShopProductList from "../shoppages/shopProductList/shopProductList";
export default function Search({ productsInfo }) {
  const params = useParams();
  let searchid = params.searchid;
  let matchsearch = `^${searchid}`;
  let reg = new RegExp(matchsearch, "i");
  const compareCardTitle = productsInfo.filter((eachcard) => {
    if (reg.test(eachcard.title) == true) {
      return eachcard;
    }
  });

  return (
    <div className="searchTitle">
      {compareCardTitle.length > 0 ? (
        <>
          <div className="searchinfo">
            Found {compareCardTitle.length} product with keyword {searchid}
          </div>

          <ShopProductList selectedCard={compareCardTitle} />
        </>
      ) : (
        <div className="noproductfound">No product found.</div>
      )}
    </div>
  );
}
