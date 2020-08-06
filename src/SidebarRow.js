import React from "react";

import "./SidebarRow.css";
function SidebarRow({ selected, Icon, title }) {
  const isSelected = selected ? "selected" : "";
  return (
    <div className={`sidebarRow ${isSelected}`}>
      <Icon className={`sidebarRow__icon`} />
      <h2 className={`sidebarRow__title`}>{title}</h2>
    </div>
  );
}

export default SidebarRow;
