import React from "react";
import "../styles/SecondaryVariantRow.css";

export default function SecondaryVariantRow({
  secVariant,
  product,
  productIndex,
  variantIndex,
  secVariantIndex,
  handleInputChange,
}) {
  return (
    <tr className="secondary-variant-row">
      <td>
        &nbsp; &nbsp;
        <input
          type="text"
          value={secVariant.name}
          onChange={(e) =>
            handleInputChange(
              e,
              productIndex,
              variantIndex,
              "name",
              true,
              true,
              secVariantIndex
            )
          }
          onClick={(e) => e.stopPropagation()}
          className="input-container"
        />
      </td>
      <td>
        <input
          type="text"
          value={secVariant.inventory}
          onChange={(e) =>
            handleInputChange(
              e,
              productIndex,
              variantIndex,
              "inventory",
              true,
              true,
              secVariantIndex
            )
          }
          onClick={(e) => e.stopPropagation()}
          className="input-container"
        />
      </td>
      <td>
        $
        <input
          type="text"
          value={secVariant.price}
          onChange={(e) =>
            handleInputChange(
              e,
              productIndex,
              variantIndex,
              "price",
              true,
              true,
              secVariantIndex
            )
          }
          onClick={(e) => e.stopPropagation()}
          className="input-container"
        />
      </td>
      <td>
        <input
          type="text"
          value={secVariant.discountPercentage}
          onChange={(e) =>
            handleInputChange(
              e,
              productIndex,
              variantIndex,
              "discountPercentage",
              true,
              true,
              secVariantIndex
            )
          }
          onClick={(e) => e.stopPropagation()}
          className="input-container"
        />
        %
      </td>
      <td></td>
      <td></td>
      <td>
        <input
          type="text"
          value={secVariant.inventory}
          onChange={(e) =>
            handleInputChange(
              e,
              productIndex,
              variantIndex,
              "inventory",
              true,
              true,
              secVariantIndex
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
  );
}
