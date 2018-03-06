const selectProductGroup = productGroupId => ({
  type: 'SELECT_PRODUCT_GROUP',
  productGroupId,
});

const changeFilter = (filterGroup, filter) => ({
  type: 'CHANGE_FILTER',
  filterGroup,
  filter,
});

module.exports = {
  selectProductGroup,
  changeFilter,
};
