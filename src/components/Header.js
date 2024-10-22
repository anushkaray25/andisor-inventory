import React from "react";
import "../styles/Header.css";
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

export default function Header() {
  return (
    <div className="header-container">
      <div className="nav">
        <div className="nav-item active">Inventory</div>
        <div className="nav-item">Collections</div>
        <div className="nav-item">Analytics</div>
      </div>
      <div className="actions">
        <button className="button">
          <FiPlusCircle size={18} style={{ marginRight: "8px" }} />
          Add New Product
        </button>
        <div className="import-export">
          <span className="import-button">
            <AiOutlineCloudUpload size={18} style={{ marginRight: "8px" }} />
            Import Data
          </span>
          <div className="export-button">
            <AiOutlineCloudDownload size={18} style={{ marginRight: "8px" }} />
            Export CSV
          </div>
        </div>
      </div>
    </div>
  );
}
