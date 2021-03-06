import React from "react";

export default function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%" }}>{children}</div>
    </div>
  );
}
