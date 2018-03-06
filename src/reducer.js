const DefaultState = {
  socialLinks: [
    { name: 'facebook', href: 'http://facebook.com/shopify' },
    { name: 'twitter', href: 'http://twitter.com/shopify' },
    { name: 'google_plus', href: 'http://plus.google.com/+shopify' },
    { name: 'instagram', href: 'http://instagram.com/shopify' },
    { name: 'pinterest', href: 'https://pinterest.com/shopify' },
  ],
  filter: {
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },


  currentSearchString: '',
  currentProductGroup: 1,
  currentFilter: {
    size: [],
  },

  productGroup: [],
  products: [],
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'SELECT_PRODUCT_GROUP': {
      const newState = getCopyOfState(state);
      newState.currentProductGroup = action.productGroupId;
      return newState;
    }

    case 'SEARCH_PRODUCTS': {
      const newState = getCopyOfState(state);
      newState.currentSearchString = action.searchString;
      return newState;
    }

    case 'INIT_PRODUCT_GROUPS': {
      const newState = getCopyOfState(state);
      newState.productGroup = action.productGroupList;
      return newState;
    }

    case 'INIT_PRODUCTS': {
      const newState = getCopyOfState(state);
      newState.products = action.products;
      return newState;
    }

    case 'CHANGE_FILTER': {
      const newState = getCopyOfState(state);
      if (!newState.currentFilter[action.filterGroup].includes(action.filter)) {
        newState.currentFilter[action.filterGroup] = getCopyOfState(newState.currentFilter[action.filterGroup]);
        newState.currentFilter[action.filterGroup].push(action.filter);
      } else {
        newState.currentFilter[action.filterGroup] =
        newState.currentFilter[action.filterGroup].filter(filter => filter !== action.filter);
      }

      return newState;
    }

    default:
      return state;
  }
}

module.exports = Reducer;
