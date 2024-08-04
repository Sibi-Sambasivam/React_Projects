import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return <p>{currentYear}</p>;
}

export default Footer;
