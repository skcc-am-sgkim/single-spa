import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from "./root.component";
// SingleSpaContext is a react@16.3 (if available) context that provides singleSpa props
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  // ReactDOM,
  rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

// React 17
// import React from "react";
// import ReactDOM from "react-dom";
// import singleSpaReact from "single-spa-react";
// import Root from "./root.component";

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: Root,
//   errorBoundary(err, info, props) {
//     // Customize the root error boundary for your microfrontend here.
//     return null;
//   },
// });

// export const { bootstrap, mount, unmount } = lifecycles;