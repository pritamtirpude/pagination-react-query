import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchInfiniteVehicles } from "../api";

const InfiniteLoading = () => {
  const { data, isFetching, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["infiniteVehicles"],
      queryFn: fetchInfiniteVehicles,
      getNextPageParam: (lastPage, pages) => lastPage.vehicle.nextPage,
    });

  if (isFetching) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      {data?.pages.map((vehicleData, index) => {
        return (
          <React.Fragment key={index}>
            {vehicleData.vehicle.docs.map((vehicle) => (
              <h1 key={vehicle._id}>{vehicle.model.tags[0]}</h1>
            ))}
          </React.Fragment>
        );
      })}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default InfiniteLoading;
