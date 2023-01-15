import React, { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import SimplePaginate from "./components/SimplePaginate";
import Navbar from "./components/Navbar";
import InfiniteLoading from "./components/InfiniteLoading";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index path="/" element={<SimplePaginate />} />
        <Route path="/infinite" element={<InfiniteLoading />} />
      </Routes>
    </Fragment>
  );
};

export default App;
