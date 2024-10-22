import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductRow from "../components/ProductRow";
import "../styles/InventoryPage.css";

export default function InventoryPage() {
  const [products, setProducts] = useState([]);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [expandedVariant, setExpandedVariant] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("products");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      "https://mocki.io/v1/dff67380-3384-4ab0-8825-4c810f7866f1"
    );
    const productsWithIds = result?.data?.map((product) => {
      product.primary_variants = product.primary_variants.map(
        (primaryVariant, primaryIndex) => {
          return {
            ...primaryVariant,
            id: `${product.id}-primary-${primaryIndex}`,
          };
        }
      );
      return product;
    });

    setProducts(productsWithIds);
    sessionStorage.setItem("products", JSON.stringify(productsWithIds));
  };

  const handleExpandProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handleExpandVariant = (variantId) => {
    setExpandedVariant(expandedVariant === variantId ? null : variantId);
  };

  const handleInputChange = (
    e,
    productIndex,
    variantIndex,
    field,
    isPrimary = true,
    isSecondary = false,
    secVariantIndex = null
  ) => {
    const updatedProducts = [...products];
    if (isPrimary) {
      if (isSecondary) {
        updatedProducts[productIndex].primary_variants[
          variantIndex
        ].secondary_variants[secVariantIndex][field] = e.target.value;
      } else {
        updatedProducts[productIndex].primary_variants[variantIndex][field] =
          e.target.value;
      }
    } else {
      updatedProducts[productIndex][field] = e.target.value;
    }

    setProducts(updatedProducts);
    sessionStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="inventory-page">
      <Header />
      <SearchBar />
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>WHS</th>
            <th>Discount</th>
            <th>Colour</th>
            <th>Sizes</th>
            <th>Inventory</th>
            <th>Lead Time</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, productIndex) => (
            <ProductRow
              key={product.id}
              product={product}
              productIndex={productIndex}
              expandedProduct={expandedProduct}
              expandedVariant={expandedVariant}
              handleExpandProduct={handleExpandProduct}
              handleExpandVariant={handleExpandVariant}
              handleInputChange={handleInputChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
