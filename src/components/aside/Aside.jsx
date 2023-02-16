import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PushPinIcon from "@mui/icons-material/PushPin";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import AsideContext from "../../context/asideContext";

const Aside = () => {
  const asideWidthFull = useContext(AsideContext).asideWidthFull

  return (
    <>
    
      <div className="bg-lgrey text-dblue py-8 text-3xl font-semibold leading-loose">
        <ul
          className="aside sticky top-36 whitespace-nowrap overflow-hidden"
          style={{ width: asideWidthFull === true ? "26rem" : "8rem" }}
        >
          <li>
            <NavLink to={`/hero`}  end>
              <div className="flex gap-28 px-12">
                <span className="icon">
                  <ReceiptLongIcon fontSize="large" />
                </span>
                {asideWidthFull && <h3> All Notes </h3>}
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/hero/pinned`}>
              <div className="flex gap-28 px-12">
                <span className="icon">
                  <PushPinIcon fontSize="large" />
                </span>
                {asideWidthFull && <h3> Pinned </h3>}
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/hero/archived`}>
              <div className="flex gap-28 px-12">
                <span className="icon">
                  <ArchiveIcon fontSize="large" />
                </span>
                {asideWidthFull && <h3> Archived </h3>}
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/hero/trash`}>
              <div className="flex gap-28 px-12">
                <span className="icon">
                  <DeleteIcon fontSize="large" />
                </span>
                {asideWidthFull && <h3> Trash </h3>}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aside;
