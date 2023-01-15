import axios from "axios";

export const fetchVehicles = async (page) => {
  const response = await axios.get(
    `https://core.gaddideals.com/api/vehicle?status=approved&&is_sold=no&page=${page}`
  );

  return response.data;
};

export const fetchInfiniteVehicles = async ({ pageParam = 0 }) => {
  const response = await axios.get(
    `https://core.gaddideals.com/api/vehicle?status=approved&&is_sold=no&limit=12&page=${pageParam}`
  );

  return response.data;
};
