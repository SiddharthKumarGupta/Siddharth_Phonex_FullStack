const filteredProducts = products.filter((product) => {
  const name = product.name.toLowerCase();
  const category = product.category.toLowerCase();

  if (
    query === "mobile" ||
    query === "mobiles" ||
    query === "phone" ||
    query === "phones"
  ) {
    return (
      category.includes("mobile") ||
      category.includes("phone") ||
      category.includes("smartphone") ||
      name.includes("iphone") ||
      name.includes("samsung") ||
      name.includes("oneplus") ||
      name.includes("google pixel")
    );
  }

  return `${name} ${category}`.includes(query);
});