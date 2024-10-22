import React from "react";
import PrimaryVariantRow from "./PrimaryVariantRow";
import "../styles/ProductRow.css";

export default function ProductRow({
  product,
  productIndex,
  expandedProduct,
  expandedVariant,
  handleExpandProduct,
  handleExpandVariant,
  handleInputChange,
}) {
  return (
    <>
      <tr
        className="main-product-row"
        onClick={() => handleExpandProduct(product.id)}
      >
        <td>
          <input
            type="text"
            value={product.title}
            onChange={(e) =>
              handleInputChange(e, productIndex, null, "title", false)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <input
            type="text"
            value={product.inventory}
            onChange={(e) =>
              handleInputChange(e, productIndex, null, "inventory", false)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <span>$</span>
          <input
            type="text"
            value={product.price}
            onChange={(e) =>
              handleInputChange(e, productIndex, null, "price", false)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <input
            type="text"
            value={product.discountPercentage}
            onChange={(e) =>
              handleInputChange(
                e,
                productIndex,
                null,
                "discountPercentage",
                false
              )
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
          %
        </td>
        <td>
          <div className="color-indicator">
            <span className="circle blue"></span>
            <span className="circle yellow"></span>
            <span>+1</span>
          </div>
        </td>
        <td>S, M, L +1</td>
        <td>
          <input
            type="text"
            value={product.inventory}
            onChange={(e) =>
              handleInputChange(e, productIndex, null, "inventory", false)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <input
            type="text"
            value={product.leadTime}
            onChange={(e) =>
              handleInputChange(e, productIndex, null, "leadTime", false)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
      </tr>

      {expandedProduct === product.id &&
        product.primary_variants.map((variant, variantIndex) => (
          <PrimaryVariantRow
            key={variant.id}
            variant={variant}
            product={product}
            productIndex={productIndex}
            variantIndex={variantIndex}
            expandedVariant={expandedVariant}
            handleExpandVariant={handleExpandVariant}
            handleInputChange={handleInputChange}
          />
        ))}
    </>
  );
}
