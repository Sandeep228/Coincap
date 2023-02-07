const fetchDataRequest = async () => {
  return fetch("https://api.coincap.io/v2/assets", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};
export default fetchDataRequest;
