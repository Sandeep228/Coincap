const getCurrencySystem = (labelValue) => {
  return `$${
    Math.abs(labelValue) >= 1.0e9
      ? (Math.abs(labelValue) / 1.0e9).toFixed(2) + "b"
      : Math.abs(labelValue) >= 1.0e6
      ? (Math.abs(labelValue) / 1.0e6).toFixed(2) + "m"
      : Math.abs(labelValue) >= 1.0e3
      ? (Math.abs(labelValue) / 1.0e3).toFixed(2) + "k"
      : Math.abs(labelValue)
  }`;
};

const getCurrencyInDollar = (priceUsd) => {
  return Number(priceUsd).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export { getCurrencyInDollar, getCurrencySystem };
