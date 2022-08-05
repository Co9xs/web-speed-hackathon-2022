import React from "react";

/**
 * @typedef Props
 * @type {object}
 * @property {string} url
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ url }) => {
  return (
    <img
      alt="Hero Image"
      src={url}
      style={{ display: "block", margin: "0 auto" }}
    />
  );
};
