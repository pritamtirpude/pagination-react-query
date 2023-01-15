import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchVehicles } from "../api";

const SimplePaginate = () => {
  const [page, setPage] = useState(0);

  const { data, isFetching, isError, isPreviousData } = useQuery({
    queryKey: ["vehicles", page],
    queryFn: () => fetchVehicles(page),
    keepPreviousData: true,
  });

  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <main>
      {data.vehicle?.docs.map((vehicle) => (
        <h1 key={vehicle._id}>{vehicle.model.tags[0]}</h1>
      ))}
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      {[...new Array(data?.vehicle?.totalPages)].map((_, index) => (
        <button
          onClick={() => {
            setPage(index);
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => {
          if (!isPreviousData && data.vehicle.hasNextPage) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={!data?.vehicle.hasNextPage}
      >
        Next Page
      </button>
    </main>
  );
};

export default SimplePaginate;
