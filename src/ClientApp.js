import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// any other browser only things
// For eg: Google Analytics doesn't work with server-side rendering so you can add that

hydrate(<App />, document.getElementById("root"));
