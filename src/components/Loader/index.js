import React from "react";

import { Animation } from "./styles";

const Loader = ({ ariaLabel = "Loading" }) => (
  <Animation aria-label={ariaLabel} role="alert" aria-live="assertive">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </Animation>
);

export default Loader;
