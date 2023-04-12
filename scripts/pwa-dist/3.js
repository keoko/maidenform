(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js + 7 modules ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useMutation.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/queries/giftOptionsSummary.ee.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/edit-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/graphql-tag/lib/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.debounce/index.js (<- Module is not an ECMAScript module) */
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
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ giftOptions; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__("./node_modules/react-feather/dist/icons/edit-2.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useMutation.js
var useMutation = __webpack_require__("./node_modules/@apollo/client/react/hooks/useMutation.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js
var useQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js");

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__("./node_modules/lodash.debounce/index.js");
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var context_cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 3 modules
var lib = __webpack_require__("./node_modules/graphql-tag/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/queries/giftOptionsSummary.ee.js
var giftOptionsSummary_ee = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/PriceSummary/queries/giftOptionsSummary.ee.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/giftOptionsFragments.gql.js


const GiftOptionsFragment = lib["a" /* gql */]`
    fragment GiftOptionsFragment on Cart {
        __typename
        id
        gift_message {
            from
            to
            message
        }
        gift_receipt_included
        printed_card_included
        ...GiftOptionsSummaryFragment
    }
    ${giftOptionsSummary_ee["a" /* GiftOptionsSummaryFragment */]}
`;
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js



const GET_GIFT_OPTIONS = lib["a" /* gql */]`
    query GetGiftOptions($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...GiftOptionsFragment
        }
    }
    ${GiftOptionsFragment}
`;

// Currently Commerce only
const SET_GIFT_OPTIONS_ON_CART = lib["a" /* gql */]`
    mutation SetGiftOptionsOnCart(
        $cartId: String!
        $giftMessage: GiftMessageInput
        $giftReceiptIncluded: Boolean!
        $printedCardIncluded: Boolean!
    ) {
        setGiftOptionsOnCart(
            input: {
                cart_id: $cartId
                gift_message: $giftMessage
                gift_receipt_included: $giftReceiptIncluded
                printed_card_included: $printedCardIncluded
            }
        ) {
            cart {
                id
                ...CartPageFragment
                ...GiftOptionsFragment
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
    ${GiftOptionsFragment}
`;
/* harmony default export */ var giftOptions_gql = ({
  getGiftOptionsQuery: GET_GIFT_OPTIONS,
  setGiftOptionsOnCartMutation: SET_GIFT_OPTIONS_ON_CART
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js








/**
 * This talon contains the logic for a gift options component.
 * It performs effects and returns a data object containing values for rendering the component.
 *
 * This talon performs the following effects:
 *
 * - Fetch the gift options associated with the cart
 * - Update the {@link GiftOptionsTalonProps} values with the data returned by the query
 *
 * @function
 *
 * @param {Object} props
 * @param {GiftOptionsOperations} props.operations
 *
 * @returns {GiftOptionsTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useGiftOptions } from '@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions';
 */
const useGiftOptions = (props = {}) => {
  var _cart$gift_message10, _cart$gift_message11, _cart$gift_message12, _cart$prices, _cart$prices$gift_opt;
  const operations = Object(shallowMerge["a" /* default */])(giftOptions_gql, props.operations);
  const {
    setGiftOptionsOnCartMutation,
    getGiftOptionsQuery
  } = operations;
  const [{
    cartId
  }] = Object(context_cart["b" /* useCartContext */])();
  const [setGiftOptionsOnCart, {
    error: setGiftOptionsOnCartError
  }] = Object(useMutation["a" /* useMutation */])(setGiftOptionsOnCartMutation);
  const {
    data: getGiftOptionsData,
    error: getGiftOptionsError,
    loading
  } = Object(useQuery["a" /* useQuery */])(getGiftOptionsQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const {
    cart
  } = getGiftOptionsData || {};
  const formApiRef = Object(react["useRef"])(null);
  const [giftMessageIsChecked, setGiftMessageIsChecked] = Object(react["useState"])(false);
  const [showGiftMessageResult, setShowGiftMessageResult] = Object(react["useState"])(false);
  const [savingOptions, setSavingOptions] = Object(react["useState"])([]);
  const initialValues = Object(react["useMemo"])(() => {
    var _cart$gift_message, _cart$gift_message2, _cart$gift_message3, _formApiRef$current, _formApiRef$current$g, _cart$gift_message4, _cart$gift_message5, _cart$gift_message6;
    const hasInitialGiftMessage = (cart === null || cart === void 0 ? void 0 : (_cart$gift_message = cart.gift_message) === null || _cart$gift_message === void 0 ? void 0 : _cart$gift_message.from.length) > 0 || (cart === null || cart === void 0 ? void 0 : (_cart$gift_message2 = cart.gift_message) === null || _cart$gift_message2 === void 0 ? void 0 : _cart$gift_message2.to.length) > 0 || (cart === null || cart === void 0 ? void 0 : (_cart$gift_message3 = cart.gift_message) === null || _cart$gift_message3 === void 0 ? void 0 : _cart$gift_message3.message.length) > 0;
    if ((formApiRef === null || formApiRef === void 0 ? void 0 : (_formApiRef$current = formApiRef.current) === null || _formApiRef$current === void 0 ? void 0 : (_formApiRef$current$g = _formApiRef$current.getState()) === null || _formApiRef$current$g === void 0 ? void 0 : _formApiRef$current$g.values) === undefined) {
      setGiftMessageIsChecked(hasInitialGiftMessage);
      setShowGiftMessageResult(hasInitialGiftMessage);
    }
    return {
      cardFrom: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message4 = cart.gift_message) === null || _cart$gift_message4 === void 0 ? void 0 : _cart$gift_message4.from) || '',
      cardTo: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message5 = cart.gift_message) === null || _cart$gift_message5 === void 0 ? void 0 : _cart$gift_message5.to) || '',
      cardMessage: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message6 = cart.gift_message) === null || _cart$gift_message6 === void 0 ? void 0 : _cart$gift_message6.message) || '',
      includeGiftReceipt: (cart === null || cart === void 0 ? void 0 : cart.gift_receipt_included) === true,
      includeGiftMessage: hasInitialGiftMessage,
      includePrintedCard: (cart === null || cart === void 0 ? void 0 : cart.printed_card_included) === true
    };
  }, [cart]);
  const giftMessageResult = Object(react["useMemo"])(() => {
    var _cart$gift_message7, _cart$gift_message8, _cart$gift_message9;
    return {
      cardFrom: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message7 = cart.gift_message) === null || _cart$gift_message7 === void 0 ? void 0 : _cart$gift_message7.from) || '',
      cardTo: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message8 = cart.gift_message) === null || _cart$gift_message8 === void 0 ? void 0 : _cart$gift_message8.to) || '',
      cardMessage: (cart === null || cart === void 0 ? void 0 : (_cart$gift_message9 = cart.gift_message) === null || _cart$gift_message9 === void 0 ? void 0 : _cart$gift_message9.message) || ''
    };
  }, [cart === null || cart === void 0 ? void 0 : (_cart$gift_message10 = cart.gift_message) === null || _cart$gift_message10 === void 0 ? void 0 : _cart$gift_message10.from, cart === null || cart === void 0 ? void 0 : (_cart$gift_message11 = cart.gift_message) === null || _cart$gift_message11 === void 0 ? void 0 : _cart$gift_message11.message, cart === null || cart === void 0 ? void 0 : (_cart$gift_message12 = cart.gift_message) === null || _cart$gift_message12 === void 0 ? void 0 : _cart$gift_message12.to]);
  const printedCardPrice = (cart === null || cart === void 0 ? void 0 : (_cart$prices = cart.prices) === null || _cart$prices === void 0 ? void 0 : (_cart$prices$gift_opt = _cart$prices.gift_options) === null || _cart$prices$gift_opt === void 0 ? void 0 : _cart$prices$gift_opt.printed_card) || {};
  const hasGiftMessage = giftMessageResult.cardFrom.length > 0 && giftMessageResult.cardTo.length > 0 && giftMessageResult.cardMessage.length > 0;
  const setFormApi = Object(react["useCallback"])(api => formApiRef.current = api, []);
  const handleOnChange = Object(react["useCallback"])(async () => {
    try {
      const formApi = formApiRef.current;
      if (formApi) {
        await setGiftOptionsOnCart({
          variables: {
            cartId,
            giftReceiptIncluded: formApi.getValue('includeGiftReceipt'),
            printedCardIncluded: formApi.getValue('includePrintedCard')
          }
        });

        // Reset saving options when mutation is complete
        setSavingOptions([]);
      }
    } catch (e) {
      // Error is logged by apollo link - no need to double log.
    }
  }, [cartId, setGiftOptionsOnCart]);

  // TODO: Update mutation when backend provides the option to remove Gift Message
  const handleRemoveGiftMessage = Object(react["useCallback"])(async () => {
    try {
      const formApi = formApiRef.current;
      if (formApi) {
        // Indicates Gift Message is currently saving
        setSavingOptions([...savingOptions, 'giftMessage']);

        // Reset form data and form errors
        formApi.setValues({
          cardTo: '',
          cardFrom: '',
          cardMessage: ''
        });
        formApi.setError('cardTo');
        formApi.setError('cardFrom');
        formApi.setError('cardMessage');
        setShowGiftMessageResult(false);
        await setGiftOptionsOnCart({
          variables: {
            cartId,
            giftMessage: {
              to: '',
              from: '',
              message: ''
            },
            // Mutation requires both options to be provided
            giftReceiptIncluded: formApi.getValue('includeGiftReceipt'),
            printedCardIncluded: formApi.getValue('includePrintedCard')
          }
        });

        // Reset saving options when mutation is complete
        setSavingOptions([]);
      }
    } catch (e) {
      // Error is logged by apollo link - no need to double log.
    }
  }, [cartId, savingOptions, setGiftOptionsOnCart]);
  const handleUpdateGiftMessage = Object(react["useCallback"])(async () => {
    try {
      const formApi = formApiRef.current;
      if (formApi) {
        formApi.validate();
        if (!formApi.getState().invalid) {
          // Indicates Gift Message is currently saving
          setSavingOptions([...savingOptions, 'giftMessage']);
          await setGiftOptionsOnCart({
            variables: {
              cartId,
              giftMessage: {
                to: formApi.getValue('cardTo'),
                from: formApi.getValue('cardFrom'),
                message: formApi.getValue('cardMessage')
              },
              // Mutation requires both options to be provided
              giftReceiptIncluded: formApi.getValue('includeGiftReceipt'),
              printedCardIncluded: formApi.getValue('includePrintedCard')
            }
          });
          setShowGiftMessageResult(true);
          // Reset saving options when mutation is complete
          setSavingOptions([]);
        }
      }
    } catch (e) {
      // Error is logged by apollo link - no need to double log.
    }
  }, [cartId, savingOptions, setGiftOptionsOnCart]);
  const handleToggleGiftMessageIsChecked = Object(react["useCallback"])(async isChecked => {
    if (!isChecked) {
      // Remove Gift Message and reset form
      await handleRemoveGiftMessage();
    }
    setGiftMessageIsChecked(prevState => !prevState);
  }, [handleRemoveGiftMessage]);
  const handleToggleGiftMessageResult = Object(react["useCallback"])(() => {
    setShowGiftMessageResult(prevState => !prevState);
  }, []);

  // Batch writes if the user inputs quickly.
  const debouncedOnChange = Object(react["useMemo"])(() => lodash_debounce_default()(() => {
    handleOnChange();
  }, 500), [handleOnChange]);

  // Indicates which options are currently saving
  const updateSavingOptionsOnChange = Object(react["useCallback"])(element => {
    const elementName = element.target.name;
    if (!savingOptions.includes(elementName)) {
      setSavingOptions([...savingOptions, elementName]);
    }
    debouncedOnChange();
  }, [debouncedOnChange, savingOptions]);
  const giftReceiptProps = {
    field: 'includeGiftReceipt',
    onChange: updateSavingOptionsOnChange
  };
  const printedCardProps = {
    field: 'includePrintedCard',
    onChange: updateSavingOptionsOnChange
  };
  const giftMessageCheckboxProps = {
    disabled: savingOptions.includes('giftMessage'),
    field: 'includeGiftMessage',
    onValueChange: handleToggleGiftMessageIsChecked
  };
  const cardToProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    field: 'cardTo',
    validate: formValidators["c" /* isRequired */]
  };
  const cardFromProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    field: 'cardFrom',
    validate: formValidators["c" /* isRequired */]
  };
  const cardMessageProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    field: 'cardMessage',
    validate: formValidators["c" /* isRequired */]
  };
  const optionsFormProps = {
    initialValues,
    getApi: setFormApi
  };
  const editGiftMessageButtonProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    priority: 'normal',
    type: 'button',
    onClick: handleToggleGiftMessageResult
  };
  const cancelGiftMessageButtonProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    priority: 'low',
    type: 'button',
    onClick: handleToggleGiftMessageResult
  };
  const saveGiftMessageButtonProps = {
    disabled: !giftMessageIsChecked || savingOptions.includes('giftMessage'),
    priority: 'normal',
    type: 'button',
    onClick: handleUpdateGiftMessage
  };

  // Create a memoized error map and toggle individual errors when they change
  const errors = Object(react["useMemo"])(() => new Map([['setGiftOptionsOnCartMutation', setGiftOptionsOnCartError], ['getGiftOptionsQuery', getGiftOptionsError]]), [getGiftOptionsError, setGiftOptionsOnCartError]);
  return {
    loading,
    errors,
    savingOptions,
    giftReceiptProps,
    printedCardProps,
    printedCardPrice,
    giftMessageCheckboxProps,
    giftMessageResult,
    hasGiftMessage,
    showGiftMessageResult,
    cardToProps,
    cardFromProps,
    cardMessageProps,
    editGiftMessageButtonProps,
    cancelGiftMessageButtonProps,
    saveGiftMessageButtonProps,
    optionsFormProps
  };
};

/** JSDocs type definitions */

/**
 * Props data to use when rendering a gift options component.
 *
 * @typedef {Object} GiftOptionsTalonProps
 *
 * @property {Boolean} loading Query loading indicator.
 * @property {Object} errors Errors for GraphQl query and mutation.
 * @property {Array} savingOptions Array containing fields that are busy.
 * @property {Object} giftReceiptProps Props for the `includeGiftReceipt` checkbox element.
 * @property {Object} printedCardProps Props for the `includePrintedCard` checkbox element.
 * @property {Object} printedCardPrice Printed Card Price object.
 * @property {Object} giftMessageCheckboxProps Props for the `includeGiftMessage` checkbox element.
 * @property {Object} giftMessageResult Object containing Gift Message data.
 * @property {Boolean} hasGiftMessage Checks if Gift Message data has all fields filled.
 * @property {Boolean} showGiftMessageResult Show or hide Gift Message result.
 * @property {Object} cardToProps Props for the `cardTo` text input element.
 * @property {Object} cardFromProps Props for the `cardFrom` text input element.
 * @property {Object} cardMessageProps Props for the `cardMessage` textarea element.
 * @property {Object} editGiftMessageButtonProps Props for the Edit Gift Message button.
 * @property {Object} cancelGiftMessageButtonProps Props for the Cancel Gift Message button.
 * @property {Object} saveGiftMessageButtonProps Props for the Update Gift Message button.
 * @property {Object} optionsFormProps Props for the form element.
 */

/**
 * This is a type used by the {@link useGiftOptions} talon.
 *
 * @typedef {Object} GiftOptionsOperations
 *
 * @property {GraphQLAST} setGiftOptionsOnCartMutation sets the gift options on cart.
 * @property {GraphQLAST} getGiftOptionsQuery fetch the gift options.
 */
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules
var Checkbox_checkbox = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var Field_field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 5 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js + 1 modules
var spinner = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js
var useInformedFieldStateWrapper = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css
var textArea_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(textArea_module["a" /* default */], options);



/* harmony default export */ var TextArea_textArea_module = (textArea_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.js
const _excluded = ["classes", "field", "message"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TextArea = props => {
  const {
      classes: propClasses,
      field,
      message
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const fieldState = Object(useInformedFieldStateWrapper["a" /* default */])(field);
  const classes = Object(shallowMerge["a" /* default */])(TextArea_textArea_module, propClasses);
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(esm["i" /* TextArea */], _extends({}, rest, {
    className: classes.input,
    field: field
  })), /*#__PURE__*/react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};
/* harmony default export */ var textArea = (TextArea);
TextArea.defaultProps = {
  cols: 40,
  rows: 4,
  wrap: 'hard'
};
TextArea.propTypes = {
  classes: Object(prop_types["shape"])({
    input: prop_types["string"]
  }),
  cols: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  field: prop_types["string"].isRequired,
  message: prop_types["node"],
  rows: Object(prop_types["oneOfType"])([prop_types["number"], prop_types["string"]]),
  wrap: Object(prop_types["oneOf"])(['hard', 'soft'])
};
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css
var giftOptions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css

            

var giftOptions_module_options = {"injectType":"styleTag"};

giftOptions_module_options.insert = "head";
giftOptions_module_options.singleton = false;

var giftOptions_module_update = injectStylesIntoStyleTag_default()(giftOptions_module["a" /* default */], giftOptions_module_options);



/* harmony default export */ var GiftOptions_giftOptions_module = (giftOptions_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.js
function giftOptions_extends() { giftOptions_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return giftOptions_extends.apply(this, arguments); }


















/**
 * A child component of the PriceAdjustments component.
 * This component displays the form for adding gift options.
 *
 * @param {Object} props
 * @param {Object} [props.classes] CSS className overrides.
 * @param {Object} [props.giftOptionsConfigData] store config data.
 * See [giftOptions.module.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import GiftOptions from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions";
 */
const GiftOptions = props => {
  const {
    classes: propClasses
  } = props;
  const {
    loading,
    errors,
    savingOptions,
    giftReceiptProps,
    printedCardProps,
    printedCardPrice,
    giftMessageCheckboxProps,
    giftMessageResult,
    hasGiftMessage,
    showGiftMessageResult,
    cardToProps,
    cardFromProps,
    cardMessageProps,
    editGiftMessageButtonProps,
    cancelGiftMessageButtonProps,
    saveGiftMessageButtonProps,
    optionsFormProps
  } = useGiftOptions();
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(GiftOptions_giftOptions_module, propClasses);
  if (loading) {
    return /*#__PURE__*/react_default.a.createElement(indicator["a" /* default */], null);
  }
  const {
    allow_order,
    allow_gift_receipt,
    allow_printed_card
  } = (props === null || props === void 0 ? void 0 : props.giftOptionsConfigData) || {};
  const includeGiftReceipt = allow_gift_receipt === '1' ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.option
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.checkboxContainer
  }, /*#__PURE__*/react_default.a.createElement(Checkbox_checkbox["a" /* default */], giftOptions_extends({}, giftReceiptProps, {
    "data-cy": "GiftOptions-includeGiftReceipt",
    label: formatMessage({
      id: 'giftOptions.includeGiftReceipt',
      defaultMessage: 'Include gift receipt'
    })
  }))), savingOptions.includes(giftReceiptProps.field) ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.savingContainer
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.savingText
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: 'giftOptions.saving',
    defaultMessage: 'Saving'
  })), /*#__PURE__*/react_default.a.createElement(spinner["a" /* default */], {
    classes: {
      root: classes.savingSpinner
    }
  })) : null) : null;
  const includeGiftMessage = allow_order === '1' ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.option
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.checkboxContainer
  }, /*#__PURE__*/react_default.a.createElement(Checkbox_checkbox["a" /* default */], giftOptions_extends({}, giftMessageCheckboxProps, {
    "data-cy": "GiftOptions-includeGiftMessage",
    label: formatMessage({
      id: 'giftOptions.includeGiftMessage',
      defaultMessage: 'Optional Message'
    })
  }))), savingOptions.includes('giftMessage') ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.savingContainer
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.savingText
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: 'giftOptions.saving',
    defaultMessage: 'Saving'
  })), /*#__PURE__*/react_default.a.createElement(spinner["a" /* default */], {
    classes: {
      root: classes.savingSpinner
    }
  })) : null), /*#__PURE__*/react_default.a.createElement("div", {
    className: showGiftMessageResult ? classes.giftMessageResultContainer : classes.hidden
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.giftMessageResult,
    "data-cy": "GiftOptions-giftMessageResult"
  }, /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.giftMessageTo",
    defaultMessage: "<strong>To:</strong> {cardTo}",
    values: {
      cardTo: giftMessageResult.cardTo,
      strong: chunks => /*#__PURE__*/react_default.a.createElement("strong", null, chunks)
    }
  })), /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.giftMessageFrom",
    defaultMessage: "<strong>From:</strong> {cardFrom}",
    values: {
      cardFrom: giftMessageResult.cardFrom,
      strong: chunks => /*#__PURE__*/react_default.a.createElement("strong", null, chunks)
    }
  })), /*#__PURE__*/react_default.a.createElement("p", null, giftMessageResult.cardMessage)), /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], giftOptions_extends({}, editGiftMessageButtonProps, {
    classes: {
      root: classes.editGiftMessageButton
    },
    "data-cy": "GiftOptions-editGiftMessageButton"
  }), /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    classes: {
      icon: null
    },
    size: 16,
    src: edit_2["a" /* default */]
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.actionLabel
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.editGiftMessageButton",
    defaultMessage: "Edit"
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: !showGiftMessageResult ? classes.giftMessageFields : classes.hidden
  }, /*#__PURE__*/react_default.a.createElement(Field_field["a" /* default */], {
    id: "to",
    label: formatMessage({
      id: 'giftOptions.to',
      defaultMessage: 'To'
    })
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], giftOptions_extends({}, cardToProps, {
    "data-cy": "GiftOptions-cardTo"
  }))), /*#__PURE__*/react_default.a.createElement(Field_field["a" /* default */], {
    id: cardFromProps.field,
    label: formatMessage({
      id: 'giftOptions.from',
      defaultMessage: 'From'
    })
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], giftOptions_extends({}, cardFromProps, {
    "data-cy": "GiftOptions-cardFrom"
  }))), /*#__PURE__*/react_default.a.createElement(Field_field["a" /* default */], {
    id: "message",
    label: formatMessage({
      id: 'giftOptions.message',
      defaultMessage: 'Message'
    })
  }, /*#__PURE__*/react_default.a.createElement(textArea, giftOptions_extends({}, cardMessageProps, {
    "data-cy": "GiftOptions-cardMessage",
    placeholder: formatMessage({
      id: 'giftOptions.cardMessage',
      defaultMessage: 'Enter your message here'
    })
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.giftMessageActions
  }, hasGiftMessage ? /*#__PURE__*/react_default.a.createElement(Button_button["a" /* default */], giftOptions_extends({}, cancelGiftMessageButtonProps, {
    "data-cy": "GiftOptions-cancelGiftMessageButton"
  }), /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.cancelGiftMessageButton",
    defaultMessage: "Cancel"
  })) : null, /*#__PURE__*/react_default.a.createElement(Button_button["a" /* default */], giftOptions_extends({}, saveGiftMessageButtonProps, {
    "data-cy": "GiftOptions-updateGiftMessageButton"
  }), hasGiftMessage ? /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.updateGiftMessageButton",
    defaultMessage: "Update Message"
  }) : /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: "giftOptions.addGiftMessage",
    defaultMessage: "Add Message"
  }))))) : null;
  const includePrintedCard = allow_printed_card === '1' ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.option
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.checkboxContainer
  }, /*#__PURE__*/react_default.a.createElement(Checkbox_checkbox["a" /* default */], giftOptions_extends({}, printedCardProps, {
    "data-cy": "GiftOptions-includePrintedCard",
    label: formatMessage({
      id: 'giftOptions.includePrintedCard',
      defaultMessage: 'Add printed card{price}'
    }, {
      price: printedCardPrice && printedCardPrice.value > 0 ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, ' ( + ', /*#__PURE__*/react_default.a.createElement(price["a" /* default */], {
        currencyCode: printedCardPrice.currency,
        value: printedCardPrice.value
      }), ')') : null
    })
  }))), savingOptions.includes(printedCardProps.field) ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.savingContainer
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.savingText
  }, /*#__PURE__*/react_default.a.createElement(components_message["a" /* default */], {
    id: 'giftOptions.saving',
    defaultMessage: 'Saving'
  })), /*#__PURE__*/react_default.a.createElement(spinner["a" /* default */], {
    classes: {
      root: classes.savingSpinner
    }
  })) : null) : null;
  return /*#__PURE__*/react_default.a.createElement(esm["b" /* Form */], giftOptions_extends({
    "data-cy": "GiftOptions-form"
  }, optionsFormProps, {
    className: classes.root
  }), /*#__PURE__*/react_default.a.createElement(formError["a" /* default */], {
    errors: Array.from(errors.values())
  }), includeGiftReceipt, includeGiftMessage, includePrintedCard);
};
/* harmony default export */ var giftOptions = (GiftOptions);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/index.js


/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js + 1 modules ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/message.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/check-square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/square.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js
var useInformedFieldStateWrapper = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/message.js + 1 modules
var Field_message = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/message.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check-square.js
var check_square = __webpack_require__("./node_modules/react-feather/dist/icons/check-square.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/square.js
var square = __webpack_require__("./node_modules/react-feather/dist/icons/square.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css
var checkbox_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(checkbox_module["a" /* default */], options);



/* harmony default export */ var Checkbox_checkbox_module = (checkbox_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.js
const _excluded = ["ariaLabel", "classes", "field", "fieldValue", "id", "label", "message"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/* TODO: change lint config to use `label-has-associated-control` */
/* eslint-disable jsx-a11y/label-has-for */

const checkedIcon = /*#__PURE__*/react_default.a.createElement(check_square["a" /* default */], null);
const uncheckedIcon = /*#__PURE__*/react_default.a.createElement(square["a" /* default */], null);
const Checkbox = props => {
  const {
      ariaLabel,
      classes: propClasses,
      field,
      fieldValue,
      id,
      label,
      message
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const fieldApi = Object(esm["j" /* useFieldApi */])(field);
  const fieldState = Object(useInformedFieldStateWrapper["a" /* default */])(field);
  const classes = Object(shallowMerge["a" /* default */])(Checkbox_checkbox_module, propClasses);
  const icon = fieldState.value ? checkedIcon : uncheckedIcon;
  Object(react["useEffect"])(() => {
    if (fieldValue != null && fieldValue !== fieldState.value) {
      fieldApi.setValue(fieldValue);
    }
  }, [fieldApi, fieldState.value, fieldValue]);
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("label", {
    "data-cy": "Checkbox-label",
    "aria-label": ariaLabel,
    className: classes.root,
    htmlFor: id
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* Checkbox */], _extends({}, rest, {
    className: classes.input,
    field: field,
    id: id
  })), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.icon
  }, icon), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.label
  }, label)), /*#__PURE__*/react_default.a.createElement(Field_message["a" /* default */], {
    fieldState: fieldState
  }, message));
};
/* harmony default export */ var Checkbox_checkbox = __webpack_exports__["a"] = (Checkbox);
Checkbox.propTypes = {
  ariaLabel: prop_types["string"],
  classes: Object(prop_types["shape"])({
    icon: prop_types["string"],
    input: prop_types["string"],
    label: prop_types["string"],
    message: prop_types["string"],
    root: prop_types["string"]
  }),
  field: prop_types["string"].isRequired,
  id: prop_types["string"],
  label: prop_types["node"].isRequired,
  message: prop_types["node"]
};

/* eslint-enable jsx-a11y/label-has-for */

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css
var linkButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(linkButton_module["a" /* default */], options);



/* harmony default export */ var LinkButton_linkButton_module = (linkButton_module["a" /* default */].locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js
const _excluded = ["children", "classes", "type"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * A component for link buttons.
 *
 * @typedef LinkButton
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a single link button.
 */
const LinkButton = props => {
  const {
      children,
      classes: propClasses,
      type
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const classes = Object(shallowMerge["a" /* default */])(LinkButton_linkButton_module, propClasses);
  return /*#__PURE__*/react_default.a.createElement(Button_button["a" /* default */], _extends({
    priority: 'normal',
    classes: {
      root_normalPriority: classes.root
    },
    type: type
  }, restProps), children);
};

/**
 * Props for {@link Button}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * Button component.
 * @property {string} classes.root classes for root container
 * @property {string} type the type of the Button
 */
LinkButton.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"]
  }),
  type: Object(prop_types["oneOf"])(['button', 'reset', 'submit']).isRequired
};
LinkButton.defaultProps = {
  type: 'button'
};
/* harmony default export */ var linkButton = __webpack_exports__["a"] = (LinkButton);

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js + 1 modules ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/rotate-cw.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css
var spinner_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(spinner_module["a" /* default */], options);



/* harmony default export */ var LoadingIndicator_spinner_module = (spinner_module["a" /* default */].locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/rotate-cw.js
var rotate_cw = __webpack_require__("./node_modules/react-feather/dist/icons/rotate-cw.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.js





const Spinner = props => {
  const classes = Object(shallowMerge["a" /* default */])(LoadingIndicator_spinner_module, props.classes);
  return /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    src: rotate_cw["a" /* default */],
    size: 24,
    classes: {
      root: classes.root,
      icon: classes.icon
    }
  });
};
/* harmony default export */ var spinner = __webpack_exports__["a"] = (Spinner);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../postcss-loader/dist/cjs.js!../../../LinkButton/linkButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css");
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_spinner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../postcss-loader/dist/cjs.js!../../../LoadingIndicator/spinner.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_spinner_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftOptions-root-eiS {\n}\n\n.giftOptions-option-lqF {\n    grid-template-columns: auto min-content;\n}\n\n.giftOptions-giftMessageResultContainer-IpS,\n.giftOptions-giftMessageFields-UhM {\n}\n\n.giftOptions-giftMessageResultContainer-IpS {\n\n    /* Small */\n}\n\n.giftOptions-giftMessageResult-Oll p {\n    padding: 0.25rem 0;\n}\n\n.giftOptions-editGiftMessageButton--HK {\n\n    /* Small */\n}\n\n.giftOptions-giftMessageActions-0Vl {\n\n    /* Small */\n}\n\n.giftOptions-savingContainer-QYZ {\n}\n\n.giftOptions-savingSpinner-6H- {\n}\n\n.giftOptions-hidden-Tu6 {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css"],"names":[],"mappings":"AAAA;AACA;;AAEA;IAII,uCAAuC;AAC3C;;AAEA;;AAIA;;AAEA;;IAII,UAAU;AAGd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAII,UAAU;AAEd;;AAEA;;IAKI,UAAU;AAEd;;AAEA;AAKA;;AAEA;AAGA;;AAEA;AAEA","sourcesContent":[".root {\n}\n\n.option {\n    composes: grid from global;\n    composes: px-0 from global;\n    composes: py-2 from global;\n    grid-template-columns: auto min-content;\n}\n\n.giftMessageResultContainer,\n.giftMessageFields {\n    composes: pb-4 from global;\n    composes: pl-8 from global;\n}\n\n.giftMessageResultContainer {\n    composes: gap-8 from global;\n    composes: items-start from global;\n\n    /* Small */\n    composes: sm_flex from global;\n    composes: sm_gap-12 from global;\n}\n\n.giftMessageResult p {\n    padding: 0.25rem 0;\n}\n\n.editGiftMessageButton {\n    composes: root from '../../../LinkButton/linkButton.module.css';\n    composes: mt-4 from global;\n\n    /* Small */\n    composes: sm_mt-2 from global;\n}\n\n.giftMessageActions {\n    composes: gap-4 from global;\n    composes: grid from global;\n    composes: mt-4 from global;\n\n    /* Small */\n    composes: sm_flex from global;\n}\n\n.savingContainer {\n    composes: flex from global;\n    composes: items-center from global;\n    composes: pl-4 from global;\n    composes: text-gray-500 from global;\n}\n\n.savingSpinner {\n    composes: root from '../../../LoadingIndicator/spinner.module.css';\n    composes: ml-2 from global;\n}\n\n.hidden {\n    composes: hidden from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "giftOptions-root-eiS",
	"option": "giftOptions-option-lqF grid px-0 py-2",
	"giftMessageResultContainer": "giftOptions-giftMessageResultContainer-IpS pb-4 pl-8 gap-8 items-start sm_flex sm_gap-12",
	"giftMessageFields": "giftOptions-giftMessageFields-UhM pb-4 pl-8",
	"giftMessageResult": "giftOptions-giftMessageResult-Oll",
	"editGiftMessageButton": "giftOptions-editGiftMessageButton--HK " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " mt-4 sm_mt-2",
	"giftMessageActions": "giftOptions-giftMessageActions-0Vl gap-4 grid mt-4 sm_flex",
	"savingContainer": "giftOptions-savingContainer-QYZ flex items-center pl-4 text-gray-500",
	"savingSpinner": "giftOptions-savingSpinner-6H- " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_spinner_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].locals["root"] + " ml-2",
	"hidden": "giftOptions-hidden-Tu6 hidden"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".checkbox-root-hF1 {\n    --stroke: var(--venia-global-color-gray-600);\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n}\n\n.checkbox-input-WEy {\n    grid-area: input;\n\n    /* TODO @TW: review, replaces input:disabled. Check if working. */\n}\n\n.checkbox-icon-eiW {\n    grid-area: input;\n}\n\n.checkbox-icon-eiW svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-wHh {\n    grid-area: label;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n/* TODO @TW: cannot compose */\n.checkbox-input-WEy:disabled ~ .checkbox-label-wHh {\n    cursor: default;\n}\n\n.checkbox-input-WEy:checked:enabled + .checkbox-icon-eiW {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n/* TODO @TW: cannot compose, needs \"checked\" variant enabled. Cannot combine variants. */\n.checkbox-input-WEy:active:enabled,\n.checkbox-input-WEy:focus:enabled {\n    /* composes: active_shadow-radioActive from global; */\n    /* composes: focus_shadow-radioFocus from global; */\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n\n.checkbox-input_shimmer-yEr {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/Checkbox/checkbox.module.css"],"names":[],"mappings":"AAAA;IACI,4CAA4C;IAS5C,kCAAkC;IAClC,sCAAsC;AAC1C;;AAEA;IAUI,gBAAgB;;IAEhB,iEAAiE;AAErE;;AAEA;IAII,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IAII,gBAAgB;AACpB;;AAEA,gFAAgF;AAChF,6BAA6B;AAC7B;IACI,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,wFAAwF;AACxF;;IAEI,qDAAqD;IACrD,mDAAmD;IACnD,wDAAwD;IACxD,aAAa;AACjB;;AAEA;AAIA","sourcesContent":[".root {\n    --stroke: var(--venia-global-color-gray-600);\n\n    composes: gap-3 from global;\n    composes: grid from global;\n    composes: grid-flow-col from global;\n    composes: items-center from global;\n    composes: justify-items-center from global;\n    composes: leading-normal from global;\n    composes: text-colorDefault from global;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n}\n\n.input {\n    composes: appearance-none from global;\n    composes: bg-transparent from global;\n    composes: border-2 from global;\n    composes: border-solid from global;\n    composes: border-transparent from global;\n    composes: cursor-pointer from global;\n    composes: h-[1.5rem] from global;\n    composes: rounded from global;\n    composes: w-[1.5rem] from global;\n    grid-area: input;\n\n    /* TODO @TW: review, replaces input:disabled. Check if working. */\n    composes: disabled_cursor-not-allowed from global;\n}\n\n.icon {\n    composes: h-[1.5rem] from global;\n    composes: pointer-events-none from global;\n    composes: w-[1.5rem] from global;\n    grid-area: input;\n}\n\n.icon svg {\n    stroke: rgb(var(--stroke));\n}\n\n.label {\n    composes: cursor-pointer from global;\n    composes: justify-self-start from global;\n    composes: text-colorDefault from global;\n    grid-area: label;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n/* TODO @TW: cannot compose */\n.input:disabled ~ .label {\n    cursor: default;\n}\n\n.input:checked:enabled + .icon {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n/* TODO @TW: cannot compose, needs \"checked\" variant enabled. Cannot combine variants. */\n.input:active:enabled,\n.input:focus:enabled {\n    /* composes: active_shadow-radioActive from global; */\n    /* composes: focus_shadow-radioFocus from global; */\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n\n.input_shimmer {\n    composes: h-[1.5rem] from global;\n    composes: rounded from global;\n    composes: w-[1.5rem] from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "checkbox-root-hF1 gap-3 grid grid-flow-col items-center justify-items-center leading-normal text-colorDefault",
	"input": "checkbox-input-WEy appearance-none bg-transparent border-2 border-solid border-transparent cursor-pointer h-[1.5rem] rounded w-[1.5rem] disabled_cursor-not-allowed",
	"icon": "checkbox-icon-eiW h-[1.5rem] pointer-events-none w-[1.5rem]",
	"label": "checkbox-label-wHh cursor-pointer justify-self-start text-colorDefault",
	"input_shimmer": "checkbox-input_shimmer-yEr h-[1.5rem] rounded w-[1.5rem]"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css ***!
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
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!../clickable.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/clickable.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".linkButton-root-HUs {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css"],"names":[],"mappings":"AAAA;AAWA","sourcesContent":[".root {\n    composes: root from '../clickable.module.css';\n\n    composes: font-semibold from global;\n    composes: leading-tight from global;\n    composes: max-w-full from global;\n    composes: text-colorDefault from global;\n    composes: text-brand-dark from global;\n    composes: underline from global;\n\n    composes: hover_text-colorDefault from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "linkButton-root-HUs " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_clickable_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " font-semibold leading-tight max-w-full text-colorDefault text-brand-dark underline hover_text-colorDefault"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Icon_icon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!../Icon/icon.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Icon/icon.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Icon_icon_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".spinner-root-t3- {\n    --stroke: rgb(var(--venia-global-color-text-hint));\n}\n\n.spinner-icon-pXl {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/spinner.module.css"],"names":[],"mappings":"AAAA;IAEI,kDAAkD;AACtD;;AAEA;AAGA","sourcesContent":[".root {\n    composes: root from '../Icon/icon.module.css';\n    --stroke: rgb(var(--venia-global-color-text-hint));\n}\n\n.icon {\n    composes: icon from '../Icon/icon.module.css';\n    composes: animation-spin from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "spinner-root-t3- " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Icon_icon_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + "",
	"icon": "spinner-icon-pXl " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Icon_icon_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["icon"] + " animation-spin"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../postcss-loader/dist/cjs.js!../Field/field.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Field/field.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".textArea-input-Rk3 {\n}\n\n.textArea-input_shimmer-SJm {\n    font-size: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/TextArea/textArea.module.css"],"names":[],"mappings":"AAAA;AAQA;;AAEA;IAUI,eAAe;AACnB","sourcesContent":[".input {\n    composes: input from '../Field/field.module.css';\n\n    composes: h-auto from global;\n    composes: max-w-full from global;\n    composes: min-w-full from global;\n    composes: px-xs from global;\n    composes: py-3 from global;\n}\n\n.input_shimmer {\n    composes: h-auto from global;\n    composes: m-0 from global;\n    composes: max-w-full from global;\n    composes: min-h-[6.75rem] from global;\n    composes: min-w-full from global;\n    composes: px-[15px] from global;\n    composes: py-[12px] from global;\n    composes: rounded-md from global;\n    composes: w-full from global;\n    font-size: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"input": "textArea-input-Rk3 " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["input"] + " h-auto max-w-full min-w-full px-xs py-3",
	"input_shimmer": "textArea-input_shimmer-SJm h-auto m-0 max-w-full min-h-[6.75rem] min-w-full px-[15px] py-[12px] rounded-md w-full"
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


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=3.js.map