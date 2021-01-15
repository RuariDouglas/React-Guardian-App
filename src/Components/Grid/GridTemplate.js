import React from "react";

const GridTemplate = (props) => {
  return (
    <div className="wrapper">
      <aside className="col-left">
        {props.left && props.left}

        {props.weatherApp}
      </aside>
      <main className="col-main">{props.right}</main>
    </div>
  );
};

export default GridTemplate;