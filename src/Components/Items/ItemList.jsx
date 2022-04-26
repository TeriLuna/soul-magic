import React, { memo } from "react";
import Item from "./Item";

export default memo(function ItemList({ products }) {
  return products.map((product) => {
    return (
      <>
        <Item
          key={product.id}
          product={{ ...product.data(), id: product.id }}
        />
      </>
    );
  });
});
