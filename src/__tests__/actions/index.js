/* global expect */
/* global it */
/* global describe */
import {
  selectProductGroup,
  selectSubProductGroup,
  changeFilter,
  changeFilterPrice,
  searchProducts,
  initProductGroups,
  initProducts,
} from '../../actions/index';

describe('src/__tests__/actions/index.js', () => {
  describe('selectProductGroup', () => {
    it('should create an action for select a product-group', () => {
      const fakeGroupId = 'Test updateFrontText';
      const expectedAction = {
        type: 'SELECT_PRODUCT_GROUP',
        productGroupId: fakeGroupId,
      };
      const actualAction = selectProductGroup(fakeGroupId);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('selectSubProductGroup', () => {
    it('should create an action to select a subgroup', () => {
      const fakeSubGroupId = 'Test updateBackText';
      const expectedAction = {
        type: 'SELECT_SUB_PRODUCT_GROUP',
        productGroupId: fakeSubGroupId,
      };
      const actualAction = selectSubProductGroup(fakeSubGroupId);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('changeFilter', () => {
    it('should change an action to change filter', () => {
      const fakeFilterGroup = 1;
      const fakeFilter = 2;
      const expectedAction = {
        type: 'CHANGE_FILTER',
        fakeFilterGroup,
        fakeFilter,
      };
      const actualAction = changeFilter(fakeFilterGroup, fakeFilter);
      expect(actualAction.type).toEqual(expectedAction.type);
    });
  });

  describe('changeFilterPrice', () => {
    it('should change an action to change the price-filter', () => {
      const fakePrice = 9;
      const expectedAction = {
        type: 'CHANGE_FILTER_PRICE',
        fakePrice,
      };
      const actualAction = changeFilterPrice(fakePrice);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('searchProducts', () => {
    it('should search an action to search products by searchstring', () => {
      const fakeSearchString = 'searchstring';
      const expectedAction = {
        type: 'SEARCH_PRODUCTS',
        fakeSearchString,
      };
      const actualAction = searchProducts(fakeSearchString);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('initProductGroups', () => {
    it('should init a special product group', () => {
      const fakeProductGroupList = 'searchstring';
      const expectedAction = {
        type: 'INIT_PRODUCT_GROUPS',
        fakeProductGroupList,
      };
      const actualAction = initProductGroups(fakeProductGroupList);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('initProducts', () => {
    it('should init the products', () => {
      const fakeProducts = [];
      const expectedAction = {
        type: 'INIT_PRODUCTS',
        fakeProducts,
      };
      const actualAction = initProducts(fakeProducts);
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
