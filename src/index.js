import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
