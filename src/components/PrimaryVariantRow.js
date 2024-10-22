import React from "react";
import SecondaryVariantRow from "./SecondaryVariantRow";
import "../styles/PrimaryVariantRow.css";

export default function PrimaryVariantRow({
  variant,
  product,
  productIndex,
  variantIndex,
  expandedVariant,
  handleExpandVariant,
  handleInputChange,
}) {
  return (
    <>
      <tr
        className="primary-variant-row"
        onClick={() => handleExpandVariant(variant.id)}
      >
        <td>
          &nbsp;
          <input
            type="text"
            value={variant.name}
            onChange={(e) =>
              handleInputChange(e, productIndex, variantIndex, "name", true)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
          <span className="active-label">{variant.active ? "Active" : ""}</span>
        </td>
        <td>
          <input
            type="text"
            value={variant.inventory}
            onChange={(e) =>
              handleInputChange(
                e,
                productIndex,
                variantIndex,
                "inventory",
                true
              )
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <span>$</span>
          <input
            type="text"
            value={variant.price}
            onChange={(e) =>
              handleInputChange(e, productIndex, variantIndex, "price", true)
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
        </td>
        <td>
          <input
            type="text"
            value={variant.discountPercentage}
            onChange={(e) =>
              handleInputChange(
                e,
                productIndex,
                variantIndex,
                "discountPercentage",
                true
              )
            }
            onClick={(e) => e.stopPropagation()}
            className="input-container"
          />
          %
        </td>
        <td></td>
        <td>S, M, L + 1</td>
        <td>
          <input
            type="text"
            value={variant.inventory}
            onChange={(e) =>
              handleInputChange(
                e,
                productIndex,
                variantIndex,
                "inventory",
                true
              )
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

      {expandedVariant === variant.id &&
        variant.secondary_variants.map((secVariant, secVariantIndex) => (
          <SecondaryVariantRow
            key={secVariantIndex}
            secVariant={secVariant}
            product={product}
            productIndex={productIndex}
            variantIndex={variantIndex}
            secVariantIndex={secVariantIndex}
            handleInputChange={handleInputChange}
          />
        ))}
    </>
  );
}
