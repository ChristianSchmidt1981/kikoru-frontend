const selectProductGroup = productGroupId => ({
  type: 'SELECT_PRODUCT_GROUP',
  productGroupId,
});

const selectSubProductGroup = productGroupId => ({
  type: 'SELECT_SUB_PRODUCT_GROUP',
  productGroupId,
});

const changeFilter = (filterGroup, filter) => ({
  type: 'CHANGE_FILTER',
  filterGroup,
  filter,
});

const changeFilterPrice = price => ({
  type: 'CHANGE_FILTER_PRICE',
  price,
});

const searchProducts = searchString => ({
  type: 'SEARCH_PRODUCTS',
  searchString,
});

const initProductGroups = productGroupList => ({
  type: 'INIT_PRODUCT_GROUPS',
  productGroupList,
});

const initProducts = products => ({
  type: 'INIT_PRODUCTS',
  products,
});

module.exports = {
  selectProductGroup,
  selectSubProductGroup,
  changeFilter,
  changeFilterPrice,
  searchProducts,
  initProductGroups,
  initProducts,
};
