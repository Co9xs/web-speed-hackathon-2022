import React from "react";

import { createCloudinaryUrl } from "../../../../utils";

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
      src={createCloudinaryUrl(url, { crop: "fill" })}
      style={{ display: "block", margin: "0 auto" }}
    />
  );
};
