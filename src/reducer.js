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


  currentProductGroup: 1,
  currentFilter: {
    size: [],
  },



  productGroup: [
    {
      id: 1,
      link: '#',
      image: '//cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957',
      name: 'Men',
      description: 'men bla bla men men bla bla men men bla bla men men bla bla men men bla bla men men bla bla men ',
    },
    {
      id: 2,
      link: '#',
      image: '//cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957',
      name: 'Women',
      description: 'women bla women women bla women women bla women women bla women women bla women women bla women ',
    },
    {
      id: 3,
      link: '#',
      image: '//cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957',
      name: 'Children',
      description: 'children bla children children bla children children bla children children bla children children bla children ',
    },
  ],
  products: {
    1: [
      {
        name: 'Tshirt',
        size: ['XS', 'S'],
        description: 'Cras in nunc non ipsum duo cursus ultrices est',
        link: '/collections/men/products/cras-in-nunc-non-ipsum-duo-cursus-ultrices',
        image: '//cdn.shopify.com/s/files/1/1825/4753/products/03_ce982bf6-365f-4ad6-8636-208b6b5416fa_large.jpg?v=1488852960',
        price: {
          min: '30.99 €',
          max: '35.99 €',
        },
      },
    ],
    2: [
      {
        name: 'Jacket',
        size: ['XS', 'S'],
        description: 'Cras in nunc non ipsum duo cursus ultrices est',
        link: '/collections/men/products/cras-in-nunc-non-ipsum-duo-cursus-ultrices',
        image: '//cdn.shopify.com/s/files/1/1825/4753/products/03_ce982bf6-365f-4ad6-8636-208b6b5416fa_large.jpg?v=1488852960',
        price: {
          min: '50.99 €',
          max: '55.99 €',
        },
      },
    ],
    3: [
      {
        name: 'Tshirt',
        size: ['XS', 'S'],
        description: 'Cras in nunc non ipsum duo cursus ultrices est',
        link: '/collections/men/products/cras-in-nunc-non-ipsum-duo-cursus-ultrices',
        image: '//cdn.shopify.com/s/files/1/1825/4753/products/03_ce982bf6-365f-4ad6-8636-208b6b5416fa_large.jpg?v=1488852960',
        price: {
          min: '100.99 €',
          max: '150.99 €',
        },
      },
    ],
  },
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'SELECT_PRODUCT_GROUP': {
      const newState = getCopyOfState(state);
      newState.currentProductGroup = action.productGroupId;
      return newState;
    }

    case 'CHANGE_FILTER': {
      const newState = getCopyOfState(state);
      console.log(newState.currentFilter[action.filterGroup].includes(action.filter));
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
