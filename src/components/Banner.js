import React from "react";

export default function Banner({ children, title, subtitle, subtitle2 }) {
  return (
    <div className="banner">
      <div />
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      <p>{subtitle2}</p>
      {children}
    </div>
  );
}
