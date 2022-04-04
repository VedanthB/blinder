export const filterByCategory = (products, categoriesFilter) => {
  let filterProducts = [];

  const noFilterSelected = Object.values(categoriesFilter).every(
    (category) => !category
  );

  console.log(noFilterSelected);

  if (noFilterSelected) return products;

  for (let category in categoriesFilter) {
    let filteredProductsByCategory = [];
    if (categoriesFilter[category]) {
      filteredProductsByCategory = products.filter(
        (product) => product.categoryName === category
      );
    }

    filterProducts = [...filterProducts, ...filteredProductsByCategory];
  }

  return filterProducts;
};
