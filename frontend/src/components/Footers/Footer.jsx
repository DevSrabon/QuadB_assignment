import React from "react";

export const Footer = () => {
  return (
    <footer
      className="d-flex flex-row justify-content-between"
      style={{
        width: "100%",
        margin: "0%",
        color: "grey",
        backgroundColor: "rgb(36, 36, 42)",
        borderTop: "1px solid ",
      }}
    >
      <b>
        <div className="m-3" style={{ fontSize: "80%" }}>
          Copyright © 2019 &nbsp; Hodlinfo.com &nbsp;
        </div>
      </b>
      <div className="m-3" style={{ cursor: "pointer" }}>
        Support
      </div>
    </footer>
  );
};
