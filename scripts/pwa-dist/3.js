(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js + 31 modules ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useMutation.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/eventing.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/configuredVariant.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/imageUtils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Image/image.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/QuantityStepper/quantityStepper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/graphql-tag/lib/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/useIntl.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ editModal; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal.js


/**
 * This talon contains logic for a product edit modal used on a cart page.
 * It returns prop data for rendering an interactive modal component.
 *
 * @function
 *
 * @return {EditModalTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useEditModal } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal';
 */
const useEditModal = () => {
  const [variantPrice, setVariantPrice] = Object(react["useState"])(null);
  return {
    setVariantPrice,
    variantPrice
  };
};

/** JSDocs type definitions */

/**
 * Object type returned by the {@link useEditModal} talon.
 * It provides props data for rendering an edit modal component.
 *
 * @typedef {Object} EditModalTalonProps
 *
 * @property {function} setVariantPrice Function for setting a product's variant price.
 * @property {Object} variantPrice The variant price for a product. See [Money object]{@link https://devdocs.magento.com/guides/v2.4/graphql/product/product-interface.html#Money}.
 */
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useMutation.js
var useMutation = __webpack_require__("./node_modules/@apollo/client/react/hooks/useMutation.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js
var useQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/findMatchingProductVariant.js
/**
 * TODO Document
 */
const findMatchingVariant = ({
  variants,
  optionCodes,
  optionSelections
}) => {
  return variants.find(({
    attributes,
    product
  }) => {
    const customAttributes = (attributes || []).reduce((map, {
      code,
      value_index
    }) => new Map(map).set(code, value_index), new Map());
    for (const [id, value] of optionSelections) {
      const code = optionCodes.get(id);
      const matchesStandardAttribute = product[code] === value;
      const matchesCustomAttribute = customAttributes.get(code) === value;

      // if any option selection fails to match any standard attribute
      // and also fails to match any custom attribute
      // then this isn't the correct variant
      if (!matchesStandardAttribute && !matchesCustomAttribute) {
        return false;
      }
    }

    // otherwise, every option selection matched
    // and this is the correct variant
    return true;
  });
};
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 3 modules
var lib = __webpack_require__("./node_modules/graphql-tag/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/productFormFragment.gql.js

const ProductFormFragment = lib["a" /* gql */]`
    # eslint-disable-next-line @graphql-eslint/require-id-when-available
    fragment ProductFormFragment on ProductInterface {
        uid
        sku
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        ... on ConfigurableProduct {
            # eslint-disable-next-line @graphql-eslint/require-id-when-available
            configurable_options {
                attribute_code
                attribute_id
                uid
                label
                values {
                    default_label
                    label
                    store_label
                    use_default_value
                    value_index
                    swatch_data {
                        ... on ImageSwatchData {
                            thumbnail
                        }
                        value
                    }
                }
            }
            variants {
                attributes {
                    code
                    value_index
                }
                # eslint-disable-next-line @graphql-eslint/require-id-when-available
                product {
                    uid
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                    price_range {
                        maximum_price {
                            final_price {
                                currency
                                value
                            }
                        }
                    }
                    sku
                    stock_status
                }
            }
        }
    }
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/productForm.gql.js



const GET_CONFIGURABLE_OPTIONS = lib["a" /* gql */]`
    query productDetailBySku($sku: String) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                uid
                ...ProductFormFragment
            }
        }
    }
    ${ProductFormFragment}
`;
const UPDATE_QUANTITY_MUTATION = lib["a" /* gql */]`
    mutation UpdateCartItemQuantity(
        $cartId: String!
        $cartItemId: ID!
        $quantity: Float!
    ) {
        updateCartItems(
            input: {
                cart_id: $cartId
                cart_items: [
                    { cart_item_uid: $cartItemId, quantity: $quantity }
                ]
            }
        ) {
            cart {
                id
                ...CartPageFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
const UPDATE_CONFIGURABLE_OPTIONS_MUTATION = lib["a" /* gql */]`
    mutation UpdateConfigurableOptions(
        $cartId: String!
        $cartItemId: ID!
        $parentSku: String!
        $variantSku: String!
        $quantity: Float!
    ) {
        addConfigurableProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [
                    {
                        data: { quantity: $quantity, sku: $variantSku }
                        parent_sku: $parentSku
                    }
                ]
            }
        ) {
            cart {
                id
            }
        }

        removeItemFromCart(
            input: { cart_id: $cartId, cart_item_uid: $cartItemId }
        ) {
            cart {
                id
                ...CartPageFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
const GET_CONFIGURABLE_THUMBNAIL_SOURCE = lib["a" /* gql */]`
    query getConfigurableThumbnailSource {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            configurable_thumbnail_source
        }
    }
`;
/* harmony default export */ var productForm_gql = ({
  getConfigurableThumbnailSourceQuery: GET_CONFIGURABLE_THUMBNAIL_SOURCE,
  getConfigurableOptionsQuery: GET_CONFIGURABLE_OPTIONS,
  updateQuantityMutation: UPDATE_QUANTITY_MUTATION,
  updateConfigurableOptionsMutation: UPDATE_CONFIGURABLE_OPTIONS_MUTATION
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/eventing.js
var eventing = __webpack_require__("./node_modules/@magento/peregrine/lib/context/eventing.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/findAllMatchingVariants.js
/**
 * Find all the products/variants contains current option selections
 * @return {Array} variants
 */
const findAllMatchingVariants = ({
  variants,
  optionCodes,
  singleOptionSelection
}) => {
  return variants === null || variants === void 0 ? void 0 : variants.filter(({
    attributes,
    product
  }) => {
    const customAttributes = (attributes || []).reduce((map, {
      code,
      value_index
    }) => new Map(map).set(code, value_index), new Map());
    for (const [id, value] of singleOptionSelection) {
      const code = optionCodes.get(id);
      const matchesStandardAttribute = product[code] === value;
      const matchesCustomAttribute = customAttributes.get(code) === value;

      // if any option selection fails to match any standard attribute
      // and also fails to match any custom attribute
      // then this isn't the correct variant
      if (!matchesStandardAttribute && !matchesCustomAttribute) {
        return false;
      }
    }

    // otherwise, every option selection matched
    // and these are the correct variants
    return true;
  });
};
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/getOutOfStockIndexes.js
/**
 * Find the value_index of out of stock variants
 * @return {Array} indexes
 */

const getOutOfStockIndexes = items => {
  const OUT_OF_STOCK_CODE = 'OUT_OF_STOCK';
  return items === null || items === void 0 ? void 0 : items.filter(item => item.product.stock_status === OUT_OF_STOCK_CODE).map(option => option.attributes.map(attribute => attribute.value_index));
};
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/createProductVariants.js
/**
 * Rebuild the array of variants with out of stock items data added.
 * Since when admin selects in the Admin dashboard to not to display out of stock products
 * the variants data that are needed to find disabled swatches only show the the in stock ones, missing the out of stock ones
 * We rebuild the variants here to display all the variants and mark the stock status accordingly
 * This returns an array of objects
 */

const createProductVariants = product => {
  const OUT_OF_STOCK_CODE = 'OUT_OF_STOCK';
  const IN_STOCK_CODE = 'IN_STOCK';
  if (product && product.configurable_options) {
    const {
      variants
    } = product;
    // Compute the permutation of all possible arrays of given arrays
    // For example, if array = [[1,2],[10,20],[100,200,300]]
    // the result is [[1, 10, 100], [1, 10, 200], [1, 10, 300], [1, 20, 100], [1, 20, 200],
    // [1, 20, 300], [2, 10, 100], [2, 10, 200], [2, 10, 300], [2, 20, 100], [2, 20, 200], [2, 20, 300]]
    const cartesian = (...array) => array.reduce((array, current) => array.flatMap(cur => current.map(n => [cur, n].flat())));
    const configurableOptionsValueIndexes = product.configurable_options.map(option => option.values.map(value => value.value_index));
    // Get all possible variants for current options
    const allPossibleItems = cartesian(...configurableOptionsValueIndexes);
    const variantsValueIndexes = variants.map(variant => variant.attributes.map(attribute => attribute.value_index));
    const newVariantsArray = [];
    const len = allPossibleItems.length;
    let foundMatch;
    let currentValueIndex = [];
    for (let i = 0; i < len; i++) {
      currentValueIndex = allPossibleItems[i];
      for (const option of variantsValueIndexes) {
        // If found the same item option in the current variants array, meaning the item is in stock
        // If not found a match, meaning the item is out of stock, which is why it's not in the current variants array
        // with the not to display out of stock products selected in Admin dashboard
        foundMatch = option.length > 1 ? Array.from(currentValueIndex).sort().toString() === option.sort().toString() : currentValueIndex.toString() === option.toString();
        if (foundMatch) {
          break;
        }
      }
      const newAttributes = [];
      // If there are more than 1 group of swatches
      if (currentValueIndex.length && currentValueIndex.length > 1) {
        for (const index of Array.from(currentValueIndex)) {
          const code = product.configurable_options.find(option => option.values.find(value => value.value_index === index));
          newAttributes.push({
            value_index: index,
            code: code.attribute_code
          });
        }
        // If there's only one group of swatches
      } else {
        const code = product.configurable_options.find(option => option.values.find(value => value.value_index === currentValueIndex));
        newAttributes.push({
          value_index: currentValueIndex,
          code: code.attribute_code
        });
      }
      newVariantsArray.push({
        key: i,
        attributes: Array.from(newAttributes),
        product: {
          stock_status: foundMatch ? IN_STOCK_CODE : OUT_OF_STOCK_CODE
        }
      });
    }
    return newVariantsArray;
  } else {
    return [];
  }
};
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/getCombinations.js
/**
 * Find the combination of k elements in the array.
 * For example: array is [1,2,3]. k=2.
 * The results are [[1,2],[1,3],[2,3]]
 * @return {Array}
 */
function getCombinations(array, k, prefix = []) {
  if (k == 0) return [prefix];
  return array.flatMap((value, index) => getCombinations(array.slice(index + 1), k - 1, [...prefix, value]));
}
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/util/getOutOfStockVariantsWithInitialSelection.js
/**
 * Find out of stock variants/options of current option selections with initial selctions
 * @return {Array} variants
 */




const getOutOfStockVariantsWithInitialSelection = (product, configurableOptionCodes, multipleOptionSelections, configItem, isOutOfStockProductDisplayed) => {
  if (configItem && product) {
    let variants = product.variants;
    const variantsIfOutOfStockProductsNotDisplayed = createProductVariants(configItem);
    //If out of stock products is set to not displayed, use the variants created
    variants = isOutOfStockProductDisplayed ? variants : variantsIfOutOfStockProductsNotDisplayed;
    if (multipleOptionSelections && multipleOptionSelections.size === configurableOptionCodes.size) {
      const selectedIndexes = Array.from(multipleOptionSelections.values()).flat();
      const selectedIndexesCombinations = getCombinations(selectedIndexes, selectedIndexes.length - 1);
      const oosIndexes = [];
      for (const option of selectedIndexesCombinations) {
        var _getOutOfStockIndexes;
        const curOption = new Map([...multipleOptionSelections].filter(([key, val]) => (option.includes(key), option.includes(val))));
        const curItems = findAllMatchingVariants({
          optionCodes: configurableOptionCodes,
          singleOptionSelection: curOption,
          variants: variants
        });
        const outOfStockIndex = (_getOutOfStockIndexes = getOutOfStockIndexes(curItems)) === null || _getOutOfStockIndexes === void 0 ? void 0 : _getOutOfStockIndexes.flat().filter(idx => !selectedIndexes.includes(idx));
        oosIndexes.push(outOfStockIndex);
      }
      return oosIndexes;
    }
    return [];
  }
};
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm.js









/**
 * This talon contains logic for a product edit form.
 * It performs effects and returns data for rendering the component inside a modal container.
 *
 * This talon performs the following effects:
 *
 * - Manage the updating state of the cart while form data is being saved
 * - Set the variant price on a product depending on the product's options
 *
 * @function
 *
 * @param {Object} props
 * @param {Object} props.cartItem The cart item to configure on the form
 * @param {GraphQLDocument} props.getConfigurableOptionsQuery GraphQL query to get the configurable options for a product.
 * @param {function} props.setIsCartUpdating Function for setting the updating state for the shopping cart.
 * @param {function} props.setVariantPrice Function for setting the variant price on a product.
 * @param {GraphQLDocument} props.updateConfigurableOptionsMutation GraphQL mutation for updating the configurable options for a product.
 * @param {GraphQLDocument} props.updateQuantityMutation GraphQL mutation for updating the quantity of a product in a cart.
 * @param {function} props.setActiveEditItem Function for setting the actively editing item.
 *
 * @return {ProductFormTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useProductForm } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm';
 */

// Get initial selections
function deriveOptionSelectionsFromProduct(cartItem) {
  if (cartItem) {
    const initialOptionSelections = new Map();
    for (const {
      id,
      value_id
    } of cartItem.configurable_options) {
      initialOptionSelections.set(String(id), value_id);
    }
    return initialOptionSelections;
  }
}
const useProductForm = props => {
  const operations = Object(shallowMerge["a" /* default */])(productForm_gql, props.operations);
  const {
    getConfigurableThumbnailSourceQuery,
    getConfigurableOptionsQuery,
    updateConfigurableOptionsMutation,
    updateQuantityMutation
  } = operations;
  const {
    cartItem,
    setIsCartUpdating,
    setVariantPrice,
    setActiveEditItem
  } = props;
  const [, {
    dispatch
  }] = Object(eventing["b" /* useEventingContext */])();
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const derivedOptionSelections = Object(react["useMemo"])(() => {
    if (cartItem) {
      return deriveOptionSelectionsFromProduct(cartItem);
    }
  }, [cartItem]);
  const [optionSelections, setOptionSelections] = Object(react["useState"])(new Map());
  const [multipleOptionSelections, setMultipleOptionSelections] = Object(react["useState"])(derivedOptionSelections ? derivedOptionSelections : new Map());
  Object(react["useEffect"])(() => {
    if (cartItem) {
      setMultipleOptionSelections(derivedOptionSelections);
    }
  }, [derivedOptionSelections, cartItem]);
  const handleClose = Object(react["useCallback"])(() => {
    setMultipleOptionSelections(new Map());
    setOptionSelections(new Map());
    setActiveEditItem(null);
  }, [setActiveEditItem, setMultipleOptionSelections, setOptionSelections]);
  const [updateItemQuantity, {
    called: updateQuantityCalled,
    error: updateQuantityError,
    loading: updateQuantityLoading
  }] = Object(useMutation["a" /* useMutation */])(updateQuantityMutation);
  const [updateConfigurableOptions, {
    called: updateConfigurableCalled,
    error: updateConfigurableError,
    loading: updateConfigurableLoading
  }] = Object(useMutation["a" /* useMutation */])(updateConfigurableOptionsMutation);
  const isSaving = updateQuantityCalled && updateQuantityLoading || updateConfigurableCalled && updateConfigurableLoading;
  Object(react["useEffect"])(() => {
    setIsCartUpdating(isSaving);
  }, [isSaving, setIsCartUpdating]);
  const {
    data,
    error,
    loading
  } = Object(useQuery["a" /* useQuery */])(getConfigurableOptionsQuery, {
    skip: !cartItem,
    variables: {
      sku: cartItem ? cartItem.product.sku : null
    }
  });
  const {
    data: storeConfigData
  } = Object(useQuery["a" /* useQuery */])(getConfigurableThumbnailSourceQuery, {
    fetchPolicy: 'cache-and-network'
  });
  const handleOptionSelection = Object(react["useCallback"])((optionId, selection) => {
    const nextOptionSelections = new Map([...optionSelections]);
    const initialSelection = cartItem.configurable_options.find(option => option.id == optionId);
    if ((initialSelection === null || initialSelection === void 0 ? void 0 : initialSelection.value_id) === selection) {
      nextOptionSelections.delete(optionId);
    } else {
      nextOptionSelections.set(optionId, selection);
    }
    setOptionSelections(nextOptionSelections);

    // Create a new Map to only keep track of user multiple selections with key as String
    // without considering initialSelection.value_id
    const nextMultipleOptionSelections = new Map([...multipleOptionSelections]);
    nextMultipleOptionSelections.set(optionId, selection);
    setMultipleOptionSelections(nextMultipleOptionSelections);
  }, [cartItem, optionSelections, multipleOptionSelections]);
  const configItem = !loading && !error && data ? data.products.items[0] : null;

  // Check if display out of stock products option is selected in the Admin Dashboard
  const isOutOfStockProductDisplayed = Object(react["useMemo"])(() => {
    let totalVariants = 1;
    if (configItem && configItem.configurable_options) {
      for (const option of configItem.configurable_options) {
        const length = option.values.length;
        totalVariants = totalVariants * length;
      }
      return configItem.variants.length === totalVariants;
    }
  }, [configItem]);
  const configurableOptionCodes = Object(react["useMemo"])(() => {
    const optionCodeMap = new Map();
    if (configItem) {
      configItem.configurable_options.forEach(option => {
        optionCodeMap.set(option.attribute_id, option.attribute_code);
      });
    }
    return optionCodeMap;
  }, [configItem]);
  const selectedVariant = Object(react["useMemo"])(() => {
    if (optionSelections.size && configItem) {
      const mergedOptionSelections = new Map([...optionSelections]);
      cartItem.configurable_options.forEach(option => {
        if (!mergedOptionSelections.has(`${option.id}`)) {
          mergedOptionSelections.set(`${option.id}`, option.value_id);
        }
      });
      return findMatchingVariant({
        variants: configItem.variants,
        optionCodes: configurableOptionCodes,
        optionSelections: mergedOptionSelections
      });
    }
  }, [cartItem, configItem, configurableOptionCodes, optionSelections]);
  const outOfStockVariants = Object(react["useMemo"])(() => {
    if (cartItem && configItem) {
      const product = cartItem.product;
      return getOutOfStockVariantsWithInitialSelection(product, configurableOptionCodes, multipleOptionSelections, configItem, isOutOfStockProductDisplayed);
    }
  }, [cartItem, configurableOptionCodes, multipleOptionSelections, configItem, isOutOfStockProductDisplayed]);
  const configurableThumbnailSource = Object(react["useMemo"])(() => {
    var _storeConfigData$stor;
    return storeConfigData === null || storeConfigData === void 0 ? void 0 : (_storeConfigData$stor = storeConfigData.storeConfig) === null || _storeConfigData$stor === void 0 ? void 0 : _storeConfigData$stor.configurable_thumbnail_source;
  }, [storeConfigData]);
  Object(react["useEffect"])(() => {
    var _selectedVariant$prod, _selectedVariant$prod2, _selectedVariant$prod3;
    const variantPrice = selectedVariant === null || selectedVariant === void 0 ? void 0 : (_selectedVariant$prod = selectedVariant.product) === null || _selectedVariant$prod === void 0 ? void 0 : (_selectedVariant$prod2 = _selectedVariant$prod.price_range) === null || _selectedVariant$prod2 === void 0 ? void 0 : (_selectedVariant$prod3 = _selectedVariant$prod2.maximum_price) === null || _selectedVariant$prod3 === void 0 ? void 0 : _selectedVariant$prod3.final_price;
    setVariantPrice(variantPrice);
  }, [selectedVariant, setVariantPrice]);
  const handleSubmit = Object(react["useCallback"])(async formValues => {
    try {
      var _selectedVariant$attr;
      const quantity = formValues.quantity;
      if (selectedVariant && optionSelections.size || selectedVariant && multipleOptionSelections.size) {
        await updateConfigurableOptions({
          variables: {
            cartId,
            cartItemId: cartItem.uid,
            parentSku: cartItem.product.sku,
            variantSku: selectedVariant.product.sku,
            quantity: quantity
          }
        });
        setOptionSelections(new Map());
        setMultipleOptionSelections(new Map());
      } else if (quantity !== cartItem.quantity) {
        await updateItemQuantity({
          variables: {
            cartId,
            cartItemId: cartItem.uid,
            quantity: quantity
          }
        });
      }
      const selectedOptionsLabels =
      // with updated variant
      (selectedVariant === null || selectedVariant === void 0 ? void 0 : (_selectedVariant$attr = selectedVariant.attributes) === null || _selectedVariant$attr === void 0 ? void 0 : _selectedVariant$attr.map(({
        value_index
      }, i) => {
        var _current$values$find;
        const current = configItem.configurable_options[i];
        const attribute = current.label;
        const value = (_current$values$find = current.values.find(x => x.value_index === value_index)) === null || _current$values$find === void 0 ? void 0 : _current$values$find.label;
        return {
          attribute,
          value
        };
      })) ||
      // with current variant (updating only quantity)
      cartItem.configurable_options.map(({
        option_label,
        value_label
      }) => ({
        attribute: option_label,
        value: value_label
      })) ||
      // not applicable
      null;
      dispatch({
        type: 'CART_UPDATE_ITEM',
        payload: {
          cartId,
          sku: cartItem.product.sku,
          name: cartItem.product.name,
          priceTotal: cartItem.prices.price.value,
          currencyCode: cartItem.prices.price.currency,
          discountAmount: cartItem.prices.total_item_discount.value,
          selectedOptions: selectedOptionsLabels,
          quantity
        }
      });
    } catch {
      return;
    }
    handleClose();
  }, [cartId, cartItem, configItem, dispatch, handleClose, optionSelections.size, multipleOptionSelections.size, selectedVariant, updateConfigurableOptions, updateItemQuantity]);
  const errors = Object(react["useMemo"])(() => new Map([['updateQuantityMutation', updateQuantityError], ['updateConfigurableOptionsMutation', updateConfigurableError]]), [updateConfigurableError, updateQuantityError]);
  return {
    configItem,
    errors,
    handleOptionSelection,
    handleSubmit,
    outOfStockVariants,
    isLoading: !!loading,
    isSaving,
    isDialogOpen: cartItem !== null,
    handleClose,
    configurableThumbnailSource
  };
};

/** JSDocs type definitions */

/**
 * Object type returned by the {@link useProductForm} talon.
 * It provides props data for a product form UI component inside a modal.
 *
 * @typedef {Object} ProductFormTalonProps
 *
 * @property {Object} configItem Cart item to configure
 * @property {Array<Error>} errors An array of form errors resulting from a configuration or quantity value
 * @property {function} handleOptionSelection A callback function handling an option selection event
 * @property {function} handleSubmit A callback function for handling form submission
 * @property {boolean} isLoading True if the form is loading data. False otherwise.
 * @property {boolean} isSaving True if the form is saving data. False otherwise.
 * @property {boolean} isDialogOpen True if the form is visible. False otherwise.
 * @property {function} handleClose A callback function for handling form closing
 * @property {String} configurableThumbnailSource A string indicating which thumbnail should be used for configurable products
 */
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 5 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/getOptionType.js
const customAttributes = {
  fashion_color: 'swatch'
};
/* harmony default export */ var getOptionType = (({
  attribute_code: code
} = {}) => customAttributes[code]);
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/imageUtils.js
var imageUtils = __webpack_require__("./node_modules/@magento/peregrine/lib/util/imageUtils.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__("./node_modules/react-feather/dist/icons/check.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css
var swatch_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css

            

var swatch_module_options = {"injectType":"styleTag"};

swatch_module_options.insert = "head";
swatch_module_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(swatch_module["a" /* default */], swatch_module_options);



/* harmony default export */ var ProductOptions_swatch_module = (swatch_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useSwatch.js

const useSwatch = props => {
  const {
    onClick,
    value_index
  } = props;
  const handleClick = Object(react["useCallback"])(() => {
    onClick(value_index);
  }, [value_index, onClick]);
  return {
    handleClick
  };
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.js








const getClassName = (name, isSelected, hasFocus, isOptionOutOfStock, isEverythingOutOfStock) => `${name}${isSelected ? '_selected' : ''}${hasFocus ? '_focused' : ''}${isEverythingOutOfStock || isOptionOutOfStock ? '_outOfStock' : ''}`;

// Swatches _must_ have a 1x1 aspect ratio to match the UI.
const SWATCH_WIDTH = 48;
const Swatch = props => {
  const {
    hasFocus,
    isSelected,
    item: {
      label,
      value_index,
      swatch_data
    },
    onClick,
    style,
    isEverythingOutOfStock,
    isOptionOutOfStock,
    attributeLabel
  } = props;
  const talonProps = useSwatch({
    onClick,
    value_index
  });
  const {
    handleClick
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_swatch_module, props.classes);
  const checkStyle = Object(react["useMemo"])(() => isSelected ? classes.checked : classes.unchecked, [classes.checked, classes.unchecked, isSelected]);
  let finalStyle = style;
  if (swatch_data) {
    const {
      thumbnail,
      value
    } = swatch_data;
    let swatchValue = '';
    if (thumbnail) {
      const imagePath = Object(imageUtils["c" /* generateUrl */])(thumbnail, 'image-swatch')(SWATCH_WIDTH);
      swatchValue = `url("${imagePath}")`;
    } else {
      swatchValue = value;
    }

    // We really want to avoid specifying presentation within JS.
    // Swatches are unusual in that their color is data, not presentation,
    // but applying color *is* presentational.
    // So we merely provide the color data here, and let the CSS decide
    // how to use that color (e.g., background, border).
    finalStyle = Object.assign({}, style, {
      '--venia-swatch-bg': swatchValue
    });
  }
  const selectedText = isSelected ? 'Selected' : '';
  const ariaLabel = `${attributeLabel}'s ${selectedText} option ${label}`;
  const className = classes[getClassName('root', isSelected, hasFocus, isOptionOutOfStock, isEverythingOutOfStock)];
  return /*#__PURE__*/react_default.a.createElement("button", {
    className: className,
    onClick: handleClick,
    style: finalStyle,
    title: label,
    type: "button",
    "data-cy": "Swatch-root",
    disabled: isEverythingOutOfStock || isOptionOutOfStock,
    "aria-label": ariaLabel
  }, !isOptionOutOfStock && /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    classes: {
      root: checkStyle
    },
    src: check["a" /* default */]
  }));
};
Swatch.propTypes = {
  hasFocus: prop_types["bool"],
  isSelected: prop_types["bool"],
  item: Object(prop_types["shape"])({
    label: prop_types["string"].isRequired,
    value_index: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]).isRequired
  }).isRequired,
  onClick: prop_types["func"].isRequired,
  style: prop_types["object"]
};
Swatch.defaultProps = {
  hasFocus: false,
  isSelected: false
};
/* harmony default export */ var swatch = (Swatch);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css
var swatchList_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css

            

var swatchList_module_options = {"injectType":"styleTag"};

swatchList_module_options.insert = "head";
swatchList_module_options.singleton = false;

var swatchList_module_update = injectStylesIntoStyleTag_default()(swatchList_module["a" /* default */], swatchList_module_options);



/* harmony default export */ var ProductOptions_swatchList_module = (swatchList_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.js





const SwatchList = props => {
  const {
    getItemKey,
    selectedValue = {},
    items,
    onSelectionChange,
    isEverythingOutOfStock,
    outOfStockVariants,
    attributeLabel
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_swatchList_module, props.classes);
  const swatches = Object(react["useMemo"])(() => items.map(item => {
    const isSelected = item.label === selectedValue.label;
    let isOptionOutOfStock;
    if (outOfStockVariants && outOfStockVariants.length > 0) {
      const flatOutOfStockArray = outOfStockVariants.flat();
      isOptionOutOfStock = flatOutOfStockArray.includes(item.value_index);
    }
    return /*#__PURE__*/react_default.a.createElement(swatch, {
      key: getItemKey(item),
      isSelected: isSelected,
      item: item,
      onClick: onSelectionChange,
      isEverythingOutOfStock: isEverythingOutOfStock,
      isOptionOutOfStock: isOptionOutOfStock,
      attributeLabel: attributeLabel
    });
  }), [getItemKey, selectedValue.label, items, onSelectionChange, isEverythingOutOfStock, outOfStockVariants, attributeLabel]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, swatches);
};
SwatchList.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  getItemKey: prop_types["func"],
  selectedValue: prop_types["object"],
  items: Object(prop_types["arrayOf"])(prop_types["object"]),
  onSelectionChange: prop_types["func"]
};
SwatchList.displayName = 'SwatchList';
/* harmony default export */ var swatchList = (SwatchList);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css
var tile_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css

            

var tile_module_options = {"injectType":"styleTag"};

tile_module_options.insert = "head";
tile_module_options.singleton = false;

var tile_module_update = injectStylesIntoStyleTag_default()(tile_module["a" /* default */], tile_module_options);



/* harmony default export */ var ProductOptions_tile_module = (tile_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useTile.js

const useTile = props => {
  const {
    onClick,
    value_index
  } = props;
  const handleClick = Object(react["useCallback"])(() => {
    onClick(value_index);
  }, [value_index, onClick]);
  return {
    handleClick
  };
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.js





const tile_getClassName = (name, isSelected, hasFocus, isOptionOutOfStock, isEverythingOutOfStock) => `${name}${isSelected ? '_selected' : ''}${hasFocus ? '_focused' : ''}${isEverythingOutOfStock || isOptionOutOfStock ? '_outOfStock' : ''}`;
const Tile = props => {
  const {
    hasFocus,
    isSelected,
    item: {
      label,
      value_index
    },
    onClick,
    isEverythingOutOfStock,
    isOptionOutOfStock
  } = props;
  const talonProps = useTile({
    onClick,
    value_index
  });
  const {
    handleClick
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_tile_module, props.classes);
  const className = classes[tile_getClassName('root', isSelected, hasFocus, isOptionOutOfStock, isEverythingOutOfStock)];
  return /*#__PURE__*/react_default.a.createElement("button", {
    className: className,
    onClick: handleClick,
    title: label,
    type: "button",
    "data-cy": "Tile-button",
    disabled: isEverythingOutOfStock || isOptionOutOfStock
  }, /*#__PURE__*/react_default.a.createElement("span", null, label));
};
/* harmony default export */ var tile = (Tile);
Tile.propTypes = {
  hasFocus: prop_types["bool"],
  isSelected: prop_types["bool"],
  item: Object(prop_types["shape"])({
    label: prop_types["string"].isRequired,
    value_index: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]).isRequired
  }).isRequired,
  onClick: prop_types["func"].isRequired
};
Tile.defaultProps = {
  hasFocus: false,
  isSelected: false
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css
var tileList_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css

            

var tileList_module_options = {"injectType":"styleTag"};

tileList_module_options.insert = "head";
tileList_module_options.singleton = false;

var tileList_module_update = injectStylesIntoStyleTag_default()(tileList_module["a" /* default */], tileList_module_options);



/* harmony default export */ var ProductOptions_tileList_module = (tileList_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.js





const TileList = props => {
  const {
    getItemKey,
    selectedValue = {},
    items,
    onSelectionChange,
    isEverythingOutOfStock,
    outOfStockVariants
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_tileList_module, props.classes);
  const tiles = Object(react["useMemo"])(() => items.map(item => {
    const isSelected = item.label === selectedValue.label;
    let isOptionOutOfStock;
    if (outOfStockVariants && outOfStockVariants.length > 0) {
      const flatOutOfStockArray = outOfStockVariants.flat();
      isOptionOutOfStock = flatOutOfStockArray.includes(item.value_index);
    }
    return /*#__PURE__*/react_default.a.createElement(tile, {
      key: getItemKey(item),
      isSelected: isSelected,
      item: item,
      onClick: onSelectionChange,
      isEverythingOutOfStock: isEverythingOutOfStock,
      isOptionOutOfStock: isOptionOutOfStock
    });
  }), [getItemKey, selectedValue.label, items, onSelectionChange, isEverythingOutOfStock, outOfStockVariants]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, tiles);
};
TileList.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  getItemKey: prop_types["func"],
  selectedValue: prop_types["object"],
  items: Object(prop_types["arrayOf"])(prop_types["object"]),
  onSelectionChange: prop_types["func"]
};
TileList.displayName = 'TileList';
/* harmony default export */ var tileList = (TileList);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css
var option_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css

            

var option_module_options = {"injectType":"styleTag"};

option_module_options.insert = "head";
option_module_options.singleton = false;

var option_module_update = injectStylesIntoStyleTag_default()(option_module["a" /* default */], option_module_options);



/* harmony default export */ var ProductOptions_option_module = (option_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOption.js


/**
 * Talon for Option.
 *
 * @param {number} props.attribute_id the id of the option
 * @param {function} props.onSelectionChange callback handler for when the option is clicked
 * @param {string} props.selectedValue the label of the selected option
 * @param {array} props.values an array containing possible values
 */
const useOption = props => {
  const {
    attribute_id,
    onSelectionChange,
    selectedValue,
    values
  } = props;
  const [selection, setSelection] = Object(react["useState"])(null);
  const initialSelection = Object(react["useMemo"])(() => {
    let initialSelection = {};
    const searchValue = selection || selectedValue;
    if (searchValue) {
      initialSelection = values.find(value => value.default_label === searchValue) || {};
    }
    return initialSelection;
  }, [selectedValue, selection, values]);
  const valuesMap = Object(react["useMemo"])(() => {
    return new Map(values.map(value => [value.value_index, value.store_label]));
  }, [values]);
  const selectedValueDescription = selection || initialSelection.default_label || 'None';
  const handleSelectionChange = Object(react["useCallback"])(selection => {
    setSelection(valuesMap.get(selection));
    if (onSelectionChange) {
      onSelectionChange(attribute_id, selection);
    }
  }, [attribute_id, onSelectionChange, valuesMap]);
  return {
    handleSelectionChange,
    initialSelection,
    selectedValueDescription
  };
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.js









const option_getItemKey = ({
  value_index
}) => value_index;

// TODO: get an explicit field from the API
// that identifies an attribute as a swatch
const getListComponent = (attribute_code, values) => {
  const optionType = getOptionType({
    attribute_code,
    values
  });
  return optionType === 'swatch' ? swatchList : tileList;
};
const Option = props => {
  const {
    attribute_code,
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values,
    isEverythingOutOfStock,
    outOfStockVariants
  } = props;
  const talonProps = useOption({
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values
  });
  const {
    handleSelectionChange,
    initialSelection,
    selectedValueDescription
  } = talonProps;
  const ValueList = Object(react["useMemo"])(() => getListComponent(attribute_code, values), [attribute_code, values]);
  const classes = Object(shallowMerge["a" /* default */])(ProductOptions_option_module, props.classes);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root,
    "data-cy": "ProductOptions-Option-root"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.title
  }, label), /*#__PURE__*/react_default.a.createElement(ValueList, {
    getItemKey: option_getItemKey,
    selectedValue: initialSelection,
    items: values,
    onSelectionChange: handleSelectionChange,
    isEverythingOutOfStock: isEverythingOutOfStock,
    outOfStockVariants: outOfStockVariants,
    attributeLabel: label
  }), /*#__PURE__*/react_default.a.createElement("dl", {
    className: classes.selection
  }, /*#__PURE__*/react_default.a.createElement("dt", {
    "data-cy": "ProductOptions-Option-selectedLabel",
    className: classes.selectionLabel
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "productOptions.selectedLabel",
    defaultMessage: "Selected {label}:",
    values: {
      label
    }
  })), /*#__PURE__*/react_default.a.createElement("dd", null, selectedValueDescription)));
};
Option.propTypes = {
  attribute_code: prop_types["string"].isRequired,
  attribute_id: prop_types["string"],
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    title: prop_types["string"]
  }),
  label: prop_types["string"].isRequired,
  onSelectionChange: prop_types["func"],
  selectedValue: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  values: Object(prop_types["arrayOf"])(prop_types["object"]).isRequired
};
/* harmony default export */ var ProductOptions_option = (Option);
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/ProductOptions/useOptions.js

const useOptions = props => {
  const {
    onSelectionChange,
    selectedValues,
    options
  } = props;
  const handleSelectionChange = Object(react["useCallback"])((optionId, selection) => {
    if (onSelectionChange) {
      onSelectionChange(optionId, selection);
    }
  }, [onSelectionChange]);
  const selectedValueMap = new Map();

  // Map the option with correct option_label
  for (const {
    id,
    value_label
  } of selectedValues) {
    const option_label = options.find(option => option.attribute_id === String(id)).label;
    selectedValueMap.set(option_label, value_label);
  }
  return {
    handleSelectionChange,
    selectedValueMap
  };
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/ProductOptions/options.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Options = props => {
  const {
    classes,
    onSelectionChange,
    options,
    selectedValues = [],
    isEverythingOutOfStock,
    outOfStockVariants
  } = props;
  const talonProps = useOptions({
    onSelectionChange,
    selectedValues,
    options
  });
  const {
    handleSelectionChange,
    selectedValueMap
  } = talonProps;

  // Render a list of options passing in any pre-selected values.
  return options.map(option => /*#__PURE__*/react_default.a.createElement(ProductOptions_option, _extends({}, option, {
    classes: classes,
    key: option.attribute_id,
    onSelectionChange: handleSelectionChange,
    selectedValue: selectedValueMap.get(option.label),
    isEverythingOutOfStock: isEverythingOutOfStock,
    outOfStockVariants: outOfStockVariants
  })));
};
Options.propTypes = {
  onSelectionChange: prop_types["func"],
  options: prop_types["array"].isRequired,
  selectedValues: prop_types["array"]
};
/* harmony default export */ var ProductOptions_options = (Options);
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/QuantityStepper/quantityStepper.js + 2 modules
var quantityStepper = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/QuantityStepper/quantityStepper.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css
var productForm_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css

            

var productForm_module_options = {"injectType":"styleTag"};

productForm_module_options.insert = "head";
productForm_module_options.singleton = false;

var productForm_module_update = injectStylesIntoStyleTag_default()(productForm_module["a" /* default */], productForm_module_options);



/* harmony default export */ var EditModal_productForm_module = (productForm_module["a" /* default */].locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 2 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/configuredVariant.js
var configuredVariant = __webpack_require__("./node_modules/@magento/peregrine/lib/util/configuredVariant.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Image/image.js + 8 modules
var Image_image = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Image/image.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css
var productDetail_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css

            

var productDetail_module_options = {"injectType":"styleTag"};

productDetail_module_options.insert = "head";
productDetail_module_options.singleton = false;

var productDetail_module_update = injectStylesIntoStyleTag_default()(productDetail_module["a" /* default */], productDetail_module_options);



/* harmony default export */ var EditModal_productDetail_module = (productDetail_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.js







const IMAGE_SIZE = 240;
const ProductDetail = props => {
  const {
    item,
    variantPrice,
    configurableThumbnailSource
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    prices,
    product
  } = item;
  const {
    price
  } = prices;
  const {
    currency,
    value: unitPrice
  } = variantPrice || price;
  const {
    name,
    sku,
    stock_status: stockStatusValue
  } = product;
  const stockStatusLabels = new Map([['IN_STOCK', formatMessage({
    id: 'productDetail.inStock',
    defaultMessage: 'In stock'
  })], ['OUT_OF_STOCK', formatMessage({
    id: 'productDetail.outOfStock',
    defaultMessage: 'Out of stock'
  })]]);
  const stockStatus = stockStatusLabels.get(stockStatusValue) || formatMessage({
    id: 'productDetail.unknown',
    defaultMessage: 'Unknown'
  });
  const classes = Object(shallowMerge["a" /* default */])(EditModal_productDetail_module, props.classes);
  const configured_variant = Object(configuredVariant["a" /* default */])(item.configurable_options, product);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Image_image["a" /* default */], {
    alt: name,
    classes: {
      image: classes.image,
      root: classes.imageContainer
    },
    width: IMAGE_SIZE,
    resource: configurableThumbnailSource === 'itself' && configured_variant ? configured_variant.small_image.url : product.small_image.url
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.productName
  }, name), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.stockRow
  }, /*#__PURE__*/react_default.a.createElement("span", null, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: 'productDetail.skuNumber',
    defaultMessage: 'SKU # {sku}',
    values: {
      sku
    }
  })), /*#__PURE__*/react_default.a.createElement("span", null, stockStatus)), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.price
  }, /*#__PURE__*/react_default.a.createElement(Price_price["a" /* default */], {
    currencyCode: currency,
    value: unitPrice
  })));
};
/* harmony default export */ var productDetail = (ProductDetail);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.js











const ProductForm = props => {
  const {
    item: cartItem,
    setIsCartUpdating,
    variantPrice,
    setVariantPrice,
    setActiveEditItem
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const talonProps = useProductForm({
    cartItem,
    setIsCartUpdating,
    setVariantPrice,
    setActiveEditItem
  });
  const {
    configItem,
    errors,
    handleOptionSelection,
    handleSubmit,
    outOfStockVariants,
    isLoading,
    isSaving,
    isDialogOpen,
    handleClose,
    configurableThumbnailSource
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(EditModal_productForm_module, props.classes);
  const dialogButtonsDisabled = isLoading;
  const dialogSubmitButtonDisabled = isSaving;
  const dialogFormProps = {
    initialValues: cartItem
  };
  const message = isLoading ? formatMessage({
    id: 'productForm.fetchingProductOptions',
    defaultMessage: 'Fetching Product Options...'
  }) ? isSaving : formatMessage({
    id: 'productForm.updatingCart',
    defaultMessage: 'Updating Cart...'
  }) : null;
  const maybeLoadingIndicator = isLoading || isSaving ? /*#__PURE__*/react_default.a.createElement(indicator["a" /* default */], {
    classes: {
      root: classes.loading
    }
  }, message) : null;
  if (cartItem && !isLoading && !configItem) {
    return /*#__PURE__*/react_default.a.createElement("span", {
      className: classes.dataError
    }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
      id: 'productForm.dataError',
      defaultMessage: 'Something went wrong. Please refresh and try again.'
    }));
  }
  const dialogContent = cartItem && configItem ? /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.errorContainer
    },
    errors: Array.from(errors.values()),
    scrollOnError: false
  }), /*#__PURE__*/react_default.a.createElement(productDetail, {
    item: cartItem,
    variantPrice: variantPrice,
    configurableThumbnailSource: configurableThumbnailSource
  }), /*#__PURE__*/react_default.a.createElement(ProductOptions_options, {
    classes: {
      root: classes.optionRoot
    },
    onSelectionChange: handleOptionSelection,
    options: configItem.configurable_options,
    selectedValues: cartItem.configurable_options,
    outOfStockVariants: outOfStockVariants
  }), /*#__PURE__*/react_default.a.createElement("h3", {
    className: classes.quantityLabel
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: 'productForm.quantity',
    defaultMessage: 'Quantity'
  })), /*#__PURE__*/react_default.a.createElement(quantityStepper["a" /* default */], {
    classes: {
      root: classes.quantityRoot
    },
    initialValue: cartItem.quantity,
    itemId: cartItem.id
  })) : null;
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(dialog["a" /* default */], {
    classes: {
      contents: classes.contents
    },
    confirmText: 'Update',
    confirmTranslationId: 'productForm.submit',
    formProps: dialogFormProps,
    isOpen: isDialogOpen,
    onCancel: handleClose,
    onConfirm: handleSubmit,
    shouldDisableAllButtons: dialogButtonsDisabled,
    shouldDisableConfirmButton: dialogSubmitButtonDisabled,
    shouldUnmountOnHide: false,
    title: formatMessage({
      id: 'editModal.headerText',
      defaultMessage: 'Edit Item'
    })
  }, maybeLoadingIndicator, dialogContent));
};
/* harmony default export */ var productForm = (ProductForm);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.js




/**
 * A child component of the ProductListing component.
 * This component renders an edit modal for a product.
 *
 * @param {Object} props
 * @param {Object} props.item Product to edit.
 * @param {function} props.setActiveEditItem Function for setting the actively editing item
 * See [productListingFragments.js]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js}
 * for a list of properties for this object.
 * @param {Function} props.setIsCartUpdating Function for setting the updating state of the cart.
 * @param {Object} props.classes CSS className overrides.
 * See [editModal.module.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.module.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import EditModal from "@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal";
 */
const EditModal = props => {
  const {
    item,
    setActiveEditItem,
    setIsCartUpdating
  } = props;
  const talonProps = useEditModal();
  const {
    setVariantPrice,
    variantPrice
  } = talonProps;
  return /*#__PURE__*/react_default.a.createElement(productForm, {
    item: item,
    setIsCartUpdating: setIsCartUpdating,
    setVariantPrice: setVariantPrice,
    variantPrice: variantPrice,
    setActiveEditItem: setActiveEditItem
  });
};
/* harmony default export */ var editModal = (EditModal);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/index.js


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productDetail-root-WID {\n}\n\n.productDetail-imageContainer-wGg {\n}\n\n.productDetail-image-F6k {\n}\n\n.productDetail-productName-1Yr {\n}\n\n.productDetail-stockRow-XdE {\n}\n\n.productDetail-price-nxp {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productDetail.module.css"],"names":[],"mappings":"AAAA;AAOA;;AAEA;AAEA;;AAEA;AAGA;;AAEA;AAGA;;AAEA;AAKA;;AAEA;AAEA","sourcesContent":[".root {\n    composes: border-b from global;\n    composes: border-solid from global;\n    composes: border-subtle from global;\n    composes: gap-xs from global;\n    composes: grid from global;\n    composes: pb-xs from global;\n}\n\n.imageContainer {\n    composes: justify-self-center from global;\n}\n\n.image {\n    composes: px-md from global;\n    composes: py-0 from global;\n}\n\n.productName {\n    composes: font-semibold from global;\n    composes: text-xl from global;\n}\n\n.stockRow {\n    composes: flex from global;\n    composes: font-light from global;\n    composes: justify-between from global;\n    composes: text-sm from global;\n}\n\n.price {\n    composes: font-semibold from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "productDetail-root-WID border-b border-solid border-subtle gap-xs grid pb-xs",
	"imageContainer": "productDetail-imageContainer-wGg justify-self-center",
	"image": "productDetail-image-F6k px-md py-0",
	"productName": "productDetail-productName-1Yr font-semibold text-xl",
	"stockRow": "productDetail-stockRow-XdE flex font-light justify-between text-sm",
	"price": "productDetail-price-nxp font-semibold"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Dialog_dialog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../postcss-loader/dist/cjs.js!../../../Dialog/dialog.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.module.css");
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_QuantityStepper_quantityStepper_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../postcss-loader/dist/cjs.js!../../../QuantityStepper/quantityStepper.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/QuantityStepper/quantityStepper.module.css");
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../postcss-loader/dist/cjs.js!../../../LoadingIndicator/indicator.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.module.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Dialog_dialog_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_QuantityStepper_quantityStepper_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], "", true);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productForm-contents-PPU {\n}\n\n.productForm-optionRoot-VLv {\n}\n\n.productForm-quantityLabel-UpD {\n}\n\n.productForm-quantityRoot-fop {\n    grid-template-columns: auto 4rem auto;\n}\n\n.productForm-loading-0Qo {\n    transform: translateY(-50%);\n}\n\n.productForm-dataError-CgK {\n}\n\n.productForm-errorContainer-g69 {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal/productForm.module.css"],"names":[],"mappings":"AAAA;AAIA;;AAEA;AAMA;;AAEA;AAMA;;AAEA;IAEI,qCAAqC;AAIzC;;AAEA;IASI,2BAA2B;AAC/B;;AAEA;AAKA;;AAEA;AAEA","sourcesContent":[".contents {\n    composes: contents from '../../../Dialog/dialog.module.css';\n\n    composes: relative from global;\n}\n\n.optionRoot {\n    composes: border-b from global;\n    composes: border-solid from global;\n    composes: border-subtle from global;\n    composes: px-0 from global;\n    composes: py-xs from global;\n}\n\n.quantityLabel {\n    composes: font-semibold from global;\n    composes: leading-normal from global;\n    composes: mb-sm from global;\n    composes: pt-xs from global;\n    composes: text-colorDefault from global;\n}\n\n.quantityRoot {\n    composes: root from '../../../QuantityStepper/quantityStepper.module.css';\n    grid-template-columns: auto 4rem auto;\n    composes: justify-start from global;\n    composes: px-xs from global;\n    composes: py-0 from global;\n}\n\n.loading {\n    composes: root from '../../../LoadingIndicator/indicator.module.css';\n\n    composes: absolute from global;\n    composes: h-unset from global;\n    composes: left-0 from global;\n    composes: text-center from global;\n    composes: top-2/4 from global;\n    composes: z-mask from global;\n    transform: translateY(-50%);\n}\n\n.dataError {\n    composes: inline-block from global;\n    composes: leading-normal from global;\n    composes: pt-xs from global;\n    composes: text-error from global;\n}\n\n.errorContainer {\n    composes: pt-xs from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contents": "productForm-contents-PPU " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Dialog_dialog_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["contents"] + " relative",
	"optionRoot": "productForm-optionRoot-VLv border-b border-solid border-subtle px-0 py-xs",
	"quantityLabel": "productForm-quantityLabel-UpD font-semibold leading-normal mb-sm pt-xs text-colorDefault",
	"quantityRoot": "productForm-quantityRoot-fop " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_QuantityStepper_quantityStepper_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].locals["root"] + " justify-start px-xs py-0",
	"loading": "productForm-loading-0Qo " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].locals["root"] + " absolute h-unset left-0 text-center top-2/4 z-mask",
	"dataError": "productForm-dataError-CgK inline-block leading-normal pt-xs text-error",
	"errorContainer": "productForm-errorContainer-g69 pt-xs"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".option-root-9Af {\n}\n\n.option-title-8KV {\n}\n\n.option-selection-2zF {\n}\n\n.option-selectionLabel-JfM {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/ProductOptions/option.module.css"],"names":[],"mappings":"AAAA;AAQA;;AAEA;AAMA;;AAEA;AAKA;;AAEA;AAEA","sourcesContent":[".root {\n    composes: border-b from global;\n    composes: border-solid from global;\n    composes: border-subtle from global;\n    composes: mx-sm from global;\n    composes: my-0 from global;\n    composes: px-0 from global;\n    composes: py-sm from global;\n}\n\n.title {\n    composes: block from global;\n    composes: font-semibold from global;\n    composes: leading-normal from global;\n    composes: mb-sm from global;\n    composes: text-colorDefault from global;\n}\n\n.selection {\n    composes: flex from global;\n    composes: leading-normal from global;\n    composes: mt-xs from global;\n    composes: text-colorDefault from global;\n}\n\n.selectionLabel {\n    composes: mr-xs from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "option-root-9Af border-b border-solid border-subtle mx-sm my-0 px-0 py-sm",
	"title": "option-title-8KV block font-semibold leading-normal mb-sm text-colorDefault",
	"selection": "option-selection-2zF flex leading-normal mt-xs text-colorDefault",
	"selectionLabel": "option-selectionLabel-JfM mr-xs"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!./tile.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* TODO @TW: review. This relies on custom prop to set color from JSX \"style\" prop. */\n.swatch-root-6VC {\n    --venia-swatch-bg: var(--venia-global-color-gray-100);\n    background: var(--venia-swatch-bg);\n}\n\n/* TODO @TW: review. This relies on custom prop to set color from JSX \"style\" prop. */\n.swatch-root_selected--kC {\n\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.swatch-root_focused-27- {\n}\n\n.swatch-root_selected_focused-WQx {\n}\n\n.swatch-checked-blv {\n    opacity: 1;\n    transition-property: opacity;\n    transition-duration: 256ms;\n}\n\n.swatch-unchecked-Aap {\n    opacity: 0;\n}\n\n.swatch-root_outOfStock-Xid,\n.swatch-root_selected_outOfStock-Ul1 {\n}\n.swatch-root_outOfStock-Xid:after,\n.swatch-root_selected_outOfStock-Ul1:after {\n    content: '';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatch.module.css"],"names":[],"mappings":"AAAA,qFAAqF;AACrF;IACI,qDAAqD;IAOrD,kCAAkC;AACtC;;AAEA,qFAAqF;AACrF;;IAGI;8BAC0B;AAC9B;;AAEA;AAEA;;AAEA;AAEA;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IAEI,UAAU;AACd;;AAEA;;AAOA;AACA;;IAEI,WAAW;IACX,kBAAkB;IAClB,6DAA6D;IAC7D,WAAW;IACX,yBAAyB;AAC7B","sourcesContent":["/* TODO @TW: review. This relies on custom prop to set color from JSX \"style\" prop. */\n.root {\n    --venia-swatch-bg: var(--venia-global-color-gray-100);\n\n    composes: root from './tile.module.css';\n\n    composes: border-shaded-10 from global;\n    composes: text-white from global;\n    composes: w-[3rem] from global;\n    background: var(--venia-swatch-bg);\n}\n\n/* TODO @TW: review. This relies on custom prop to set color from JSX \"style\" prop. */\n.root_selected {\n    composes: root;\n\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.root_focused {\n    composes: root;\n}\n\n.root_selected_focused {\n    composes: root_selected;\n}\n\n.checked {\n    opacity: 1;\n    transition-property: opacity;\n    transition-duration: 256ms;\n}\n\n.unchecked {\n    composes: checked;\n    opacity: 0;\n}\n\n.root_outOfStock,\n.root_selected_outOfStock {\n    composes: root;\n    composes: opacity-40 from global;\n    composes: border-2 from global;\n    composes: border-solid from global;\n    composes: border-gray-400 from global;\n}\n.root_outOfStock:after,\n.root_selected_outOfStock:after {\n    content: '';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem]",
	"root_selected": "swatch-root_selected--kC swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem]",
	"root_focused": "swatch-root_focused-27- swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem]",
	"root_selected_focused": "swatch-root_selected_focused-WQx swatch-root_selected--kC swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem]",
	"checked": "swatch-checked-blv",
	"unchecked": "swatch-unchecked-Aap swatch-checked-blv",
	"root_outOfStock": "swatch-root_outOfStock-Xid swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem] opacity-40 border-2 border-solid border-gray-400",
	"root_selected_outOfStock": "swatch-root_selected_outOfStock-Ul1 swatch-root-6VC " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tile_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border-shaded-10 text-white w-[3rem] opacity-40 border-2 border-solid border-gray-400"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tileList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!./tileList.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tileList_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swatchList-root-m0x {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/ProductOptions/swatchList.module.css"],"names":[],"mappings":"AAAA;AAEA","sourcesContent":[".root {\n    composes: root from './tileList.module.css';\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "swatchList-root-m0x " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_tileList_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + ""
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!../clickable.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/clickable.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tile-root-zJL {\n    position: relative;\n}\n\n.tile-root_selected-Kmb {\n}\n\n.tile-root_focused-Rt5 {\n}\n\n.tile-root_selected_focused-sYj {\n}\n\n.tile-root_outOfStock-Ps6,\n.tile-root_selected_outOfStock-IAL {\n}\n.tile-root_outOfStock-Ps6:after,\n.tile-root_selected_outOfStock-IAL:after {\n    content: '';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/ProductOptions/tile.module.css"],"names":[],"mappings":"AAAA;IAWI,kBAAkB;AACtB;;AAEA;AAKA;;AAEA;AAEA;;AAEA;AAEA;;AAEA;;AASA;AACA;;IAEI,WAAW;IACX,kBAAkB;IAClB,6DAA6D;IAC7D,WAAW;IACX,yBAAyB;AAC7B","sourcesContent":[".root {\n    composes: root from '../clickable.module.css';\n\n    composes: border from global;\n    composes: border-solid from global;\n    composes: border-strong from global;\n    composes: h-[3rem] from global;\n    composes: min-w-[3rem] from global;\n    composes: px-2xs from global;\n    composes: py-0 from global;\n    composes: rounded-sm from global;\n    position: relative;\n}\n\n.root_selected {\n    composes: root;\n\n    composes: bg-gray-900 from global;\n    composes: text-white from global;\n}\n\n.root_focused {\n    composes: root;\n}\n\n.root_selected_focused {\n    composes: root_selected;\n}\n\n.root_outOfStock,\n.root_selected_outOfStock {\n    composes: root;\n    composes: bg-disabledTile from global;\n    composes: opacity-50 from global;\n    composes: border-2 from global;\n    composes: border-solid from global;\n    composes: border-gray-400 from global;\n    composes: text-gray-600 from global;\n}\n.root_outOfStock:after,\n.root_selected_outOfStock:after {\n    content: '';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",
	"root_selected": "tile-root_selected-Kmb tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white",
	"root_focused": "tile-root_focused-Rt5 tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",
	"root_selected_focused": "tile-root_selected_focused-sYj tile-root_selected-Kmb tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white",
	"root_outOfStock": "tile-root_outOfStock-Ps6 tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-disabledTile opacity-50 border-2 border-solid border-gray-400 text-gray-600",
	"root_selected_outOfStock": "tile-root_selected_outOfStock-IAL tile-root-zJL " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-disabledTile opacity-50 border-2 border-solid border-gray-400 text-gray-600"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tileList-root-m4a {\n    grid-template-columns: repeat(auto-fit, minmax(3rem, max-content));\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/ProductOptions/tileList.module.css"],"names":[],"mappings":"AAAA;IAII,kEAAkE;AACtE","sourcesContent":[".root {\n    composes: gap-xs from global;\n    composes: grid from global;\n    composes: grid-flow-col from global;\n    grid-template-columns: repeat(auto-fit, minmax(3rem, max-content));\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "tileList-root-m4a gap-xs grid grid-flow-col"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/clickable.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/clickable.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clickable-root-sDL {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/clickable.module.css"],"names":[],"mappings":"AAAA;AAQA","sourcesContent":[".root {\n    composes: cursor-pointer from global;\n    composes: inline-flex from global;\n    composes: items-center from global;\n    composes: justify-center from global;\n    composes: leading-none from global;\n    composes: pointer-events-auto from global;\n    composes: text-center from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "clickable-root-sDL cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=3.js.map