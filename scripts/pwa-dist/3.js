(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/index.js + 8 modules ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useLazyQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useMutation.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/giftCardFragments.gql.ee.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/intlPatches.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Price/price.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/alert-circle.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/graphql-tag/lib/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/informed/dist/esm/index.js (<- Module uses injected variables (process)) */
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
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ giftCards; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/informed/dist/esm/index.js
var esm = __webpack_require__("./node_modules/informed/dist/esm/index.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__("./node_modules/react-feather/dist/icons/alert-circle.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js
var useQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useLazyQuery.js
var useLazyQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useLazyQuery.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useMutation.js
var useMutation = __webpack_require__("./node_modules/@apollo/client/react/hooks/useMutation.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js + 1 modules
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 3 modules
var lib = __webpack_require__("./node_modules/graphql-tag/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js
var cartPageFragments_gql = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/cartPageFragments.gql.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/giftCardFragments.gql.ee.js
var giftCardFragments_gql_ee = __webpack_require__("./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/giftCardFragments.gql.ee.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/giftCardQueries.gql.ee.js



const GET_APPLIED_GIFT_CARDS_QUERY = lib["a" /* gql */]`
    query getAppliedGiftCards($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...GiftCardFragment
        }
    }
    ${giftCardFragments_gql_ee["a" /* GiftCardFragment */]}
`;
const GET_GIFT_CARD_BALANCE_QUERY = lib["a" /* gql */]`
    query getGiftCardBalance($giftCardCode: String!) {
        giftCardAccount(input: { gift_card_code: $giftCardCode }) {
            balance {
                currency
                value
            }
            code
            expiration_date
            id: code
        }
    }
`;
const APPLY_GIFT_CARD_MUTATION = lib["a" /* gql */]`
    mutation applyGiftCardToCart($cartId: String!, $giftCardCode: String!) {
        applyGiftCardToCart(
            input: { cart_id: $cartId, gift_card_code: $giftCardCode }
        ) {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
const REMOVE_GIFT_CARD_MUTATION = lib["a" /* gql */]`
    mutation removeGiftCard($cartId: String!, $giftCardCode: String!) {
        removeGiftCardFromCart(
            input: { cart_id: $cartId, gift_card_code: $giftCardCode }
        ) {
            cart {
                id
                ...CartPageFragment
                # If this mutation causes "free" to become available we need to know.
                available_payment_methods {
                    code
                    title
                }
            }
        }
    }
    ${cartPageFragments_gql["a" /* CartPageFragment */]}
`;
/* harmony default export */ var giftCardQueries_gql_ee = ({
  getAppliedGiftCardsQuery: GET_APPLIED_GIFT_CARDS_QUERY,
  getGiftCardBalanceQuery: GET_GIFT_CARD_BALANCE_QUERY,
  applyGiftCardMutation: APPLY_GIFT_CARD_MUTATION,
  removeGiftCardMutation: REMOVE_GIFT_CARD_MUTATION
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/useGiftCards.js







// To keep track of the most recent action taken.
const actions = {
  APPLY: 'apply',
  CHECK_BALANCE: 'check',
  REMOVE: 'remove'
};

/**
 * Handles the logic for a component that renders a list of gift cards.
 * It performs effects and returns the prop data necessary for rendering
 * the component.
 *
 * This talon performs the following effects:
 *
 * - Fetch the currently applied gift cards for a cart
 * - Manage the updating state of the cart while a gift card is being applied or removed
 *
 * @function
 *
 * @param {Object} props
 * @param {function} props.setIsCartUpdating Callback function for setting the update state for the cart.
 * @param {GiftCardsMutations} props.mutations GraphQL mutations for Gift Cards
 * @param {GiftCardsQueries} props.queries GraphQL queries for Gift Cards
 *
 * @returns {GiftCardsTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useGiftCards } from '@magento/peregrine/lib/talons/CartPage/GiftCards'
 */
const useGiftCards = props => {
  const operations = Object(shallowMerge["a" /* default */])(giftCardQueries_gql_ee, props.operations);
  const {
    getAppliedGiftCardsQuery,
    getGiftCardBalanceQuery,
    applyGiftCardMutation,
    removeGiftCardMutation
  } = operations;
  const {
    setIsCartUpdating
  } = props;

  // We need the cartId for all of our queries and mutations.
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const formApi = Object(esm["l" /* useFormApi */])();

  /*
   * Apollo hooks.
   *
   * Immediately execute the cart query and set up the other graphql actions.
   */
  const appliedCardsResult = Object(useQuery["a" /* useQuery */])(getAppliedGiftCardsQuery, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const [checkCardBalance, balanceResult] = Object(useLazyQuery["a" /* useLazyQuery */])(getGiftCardBalanceQuery, {
    // For security, always fetch this from the network and never cache the
    // result.
    fetchPolicy: 'no-cache'
  });
  const [applyCard, applyCardResult] = Object(useMutation["a" /* useMutation */])(applyGiftCardMutation);
  const [removeCard, removeCardResult] = Object(useMutation["a" /* useMutation */])(removeGiftCardMutation);

  /*
   *  useState hooks.
   */
  const [mostRecentAction, setMostRecentAction] = Object(react["useState"])(null);

  /*
   * useCallback hooks.
   */
  const applyGiftCard = Object(react["useCallback"])(async () => {
    setMostRecentAction(actions.APPLY);
    const giftCardCode = formApi.getValue('card');
    await applyCard({
      variables: {
        cartId,
        giftCardCode
      }
    });

    // Clear the input form after successful apply.
    formApi.reset();
  }, [formApi, applyCard, cartId]);
  const checkGiftCardBalance = Object(react["useCallback"])(() => {
    setMostRecentAction(actions.CHECK_BALANCE);
    const giftCardCode = formApi.getValue('card');
    checkCardBalance({
      variables: {
        giftCardCode
      }
    });
  }, [formApi, checkCardBalance]);
  const removeGiftCard = Object(react["useCallback"])(async giftCardCode => {
    setMostRecentAction(actions.REMOVE);
    try {
      await removeCard({
        variables: {
          cartId,
          giftCardCode
        }
      });
    } catch (err) {
      // do nothing
    }
  }, [cartId, removeCard]);
  const {
    called: applyCardCalled,
    loading: applyCardLoading
  } = applyCardResult;
  const {
    called: removeCardCalled,
    loading: removeCardLoading
  } = removeCardResult;
  Object(react["useEffect"])(() => {
    if (applyCardCalled || removeCardCalled) {
      // If a gift card mutation is in flight, tell the cart.
      setIsCartUpdating(applyCardLoading || removeCardLoading);
    }
  }, [applyCardCalled, applyCardLoading, removeCardCalled, removeCardLoading, setIsCartUpdating]);
  const shouldDisplayCardBalance = mostRecentAction === actions.CHECK_BALANCE && Boolean(balanceResult.data);

  // We should only display the last card error if the most recent action was apply or check and they had an error
  const shouldDisplayCardError = mostRecentAction === actions.APPLY && applyCardResult.error || mostRecentAction === actions.CHECK_BALANCE && balanceResult.error;
  return {
    applyGiftCard,
    checkBalanceData: balanceResult.data && balanceResult.data.giftCardAccount,
    checkGiftCardBalance,
    errorLoadingGiftCards: Boolean(appliedCardsResult.error),
    errorRemovingCard: Boolean(removeCardResult.error),
    giftCardsData: appliedCardsResult.data && appliedCardsResult.data.cart.applied_gift_cards || [],
    isLoadingGiftCards: appliedCardsResult.loading,
    isApplyingCard: applyCardLoading,
    isCheckingBalance: balanceResult.loading,
    isRemovingCard: removeCardLoading,
    removeGiftCard,
    shouldDisplayCardBalance,
    shouldDisplayCardError
  };
};

/** JSDoc type definitions */

/**
 * GraphQL mutations for Gift Cards.
 *
 * @typedef {Object} GiftCardsMutations
 *
 * @property {GraphQLAST} applyGiftCardMutation The mutation used to apply a gift card to the cart.
 * @property {GraphQLAST} removeGiftCardMutation The mutation used to remove a gift card from the cart.
 *
 * @see [`giftCardQueries.ee.js`]{@link https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/giftCardQueries.gql.ee.js}
 * for queries used in Venia
 */

/**
 * GraphQL queries for Gift Cards.
 *
 * @typedef {Object} GiftCardsQueries
 *
 * @property {GraphQLAST} getAppliedGiftCardsQuery The query used to get the gift cards currently applied to the cart.
 * @property {GraphQLAST} getGiftCardBalanceQuery The query used to get the gift cards currently applied to the cart.
 *
 * @see [`giftCardQueries.ee.js`]{@link https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/giftCardQueries.gql.ee.js}
 * for queries used in Venia
 */

/**
 * Props data to use when rendering a list of gift cards.
 *
 * @typedef {Object} GiftCardsTalonProps
 *
 * @property {function}  applyGiftCard - A callback to apply a gift card to the cart.
 * @property {Object}    checkBalanceData - The giftCardAccount object of the most recent successful check balance GraphQL query.
 * @property {function}  checkGiftCardBalance - A callback to check the balance of a gift card.
 * @property {boolean}   errorLoadingGiftCards - Whether there was an error loading the cart's gift cards.
 * @property {boolean}   errorApplyingCard - Whether there was an error applying the gift card.
 * @property {boolean}   errorCheckingBalance - Whether there was an error checking the balance of the gift card.
 * @property {boolean}   errorRemovingCard - Whether there was an error removing the gift card.
 * @property {Array}     giftCardsData - The applied_gift_cards object of the cart query.
 * @property {boolean}   isLoadingGiftCards - Whether the cart's gift card data is loading.
 * @property {boolean}   isApplyingCard - Whether the apply gift card operation is in progress.
 * @property {boolean}   isCheckingBalance - Whether the check gift card balance operation is in progress.
 * @property {boolean}   isRemovingCard - Whether the remove gift card operation is in progress.
 * @property {function}  removeGiftCard - A callback to remove a gift card from the cart.
 * @property {boolean}   shouldDisplayCardBalance - Whether to display the gift card balance to the user
 * @property {boolean}   shouldDisplayCardError - Whether to display an error message under the card input field.
 */
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/Toasts/useToasts.js
var useToasts = __webpack_require__("./node_modules/@magento/peregrine/lib/Toasts/useToasts.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/intlPatches.js
var intlPatches = __webpack_require__("./node_modules/@magento/peregrine/lib/util/intlPatches.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/Price/price.js





/**
 * @deprecated - replaced by to @magento/venia-ui/lib/components/Price
 *
 * The **Price** component is used anywhere a price needs to be displayed.
 *
 * Formatting of prices and currency symbol selection is handled entirely by the ECMAScript Internationalization API available in modern browsers.
 *
 * A [polyfill][] is required for any JavaScript runtime that does not have [Intl.NumberFormat.prototype.formatToParts][].
 *
 * [polyfill]: https://www.npmjs.com/package/intl
 * [Intl.NumberFormat.prototype.formatToParts]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
 */
const Price = props => {
  const {
    locale
  } = Object(useIntl["a" /* default */])();
  const {
    value,
    currencyCode,
    classes
  } = props;

  // If the optional locale prop is not provided or is undefined,
  // the runtime's default locale is used in the Intl.NumberFormat() constructor.
  const parts = intlPatches["a" /* default */].toParts.call(new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  }), value);
  const children = parts.map((part, i) => {
    const partClass = classes[part.type];
    const key = `${i}-${part.value}`;
    return /*#__PURE__*/react_default.a.createElement("span", {
      key: key,
      className: partClass
    }, part.value);
  });
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, children);
};
Price.propTypes = {
  /**
   * Class names to use when styling this component
   */
  classes: Object(prop_types["shape"])({
    currency: prop_types["string"],
    integer: prop_types["string"],
    decimal: prop_types["string"],
    fraction: prop_types["string"]
  }),
  /**
   * The numeric price
   */
  value: prop_types["number"].isRequired,
  /**
   * A string with any of the currency code supported by Intl.NumberFormat
   */
  currencyCode: prop_types["string"].isRequired
};
Price.defaultProps = {
  classes: {}
};
/* harmony default export */ var price = (Price);
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Button/button.js + 1 modules
var Button_button = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Button/button.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css
var giftCards_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(giftCards_module["a" /* default */], options);



/* harmony default export */ var GiftCards_giftCards_module = (giftCards_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CartPage/GiftCards/useGiftCard.js


/**
 * Provide logic for a single gift card component.
 *
 * @function
 *
 * @param {Object} props
 * @param {String} props.code Gift card's code
 * @param {function} props.removeGiftCard A function that removes a gift card when provided a code
 *
 * @return {GiftCardTalonProps}
 *
 * @example <caption>Importing into your project</caption>
 * import { useGiftCard } from '@magento/peregrine/lib/talons/CartPage/GiftCards/useGiftCard';
 */
const useGiftCard = props => {
  const {
    code,
    removeGiftCard
  } = props;
  const removeGiftCardWithCode = Object(react["useCallback"])(() => {
    removeGiftCard(code);
  }, [code, removeGiftCard]);
  return {
    removeGiftCardWithCode
  };
};

/** JSDoc type definitions */

/**
 * Props data to use when rendering a single gift card component.
 * @typedef {Object} GiftCardTalonProps
 *
 * @property {function} removeGiftCardWithCode Function for removing a gift card associated with the code passed into this talon.
 */
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Price/price.js
var Price_price = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Price/price.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css
var giftCard_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css

            

var giftCard_module_options = {"injectType":"styleTag"};

giftCard_module_options.insert = "head";
giftCard_module_options.singleton = false;

var giftCard_module_update = injectStylesIntoStyleTag_default()(giftCard_module["a" /* default */], giftCard_module_options);



/* harmony default export */ var GiftCards_giftCard_module = (giftCard_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.js







const GiftCard = props => {
  const {
    code,
    currentBalance,
    isRemovingCard,
    removeGiftCard
  } = props;
  const {
    removeGiftCardWithCode
  } = useGiftCard({
    code,
    removeGiftCard
  });
  const classes = Object(shallowMerge["a" /* default */])(GiftCards_giftCard_module, props.classes);
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.card_info
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.code
  }, code), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.balance
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'giftCard.balance',
    defaultMessage: 'Balance: '
  }), /*#__PURE__*/react_default.a.createElement(Price_price["a" /* default */], {
    value: currentBalance.value,
    currencyCode: currentBalance.currency
  }))), /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], {
    disabled: isRemovingCard,
    onClick: removeGiftCardWithCode,
    "data-cy": "GiftCards-GiftCard-removeButton"
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'giftCard.remove',
    defaultMessage: 'Remove'
  })));
};
/* harmony default export */ var giftCard = (GiftCard);
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.js
















const errorIcon = /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
  src: alert_circle["a" /* default */],
  attrs: {
    width: 18
  }
});

/**
 * GiftCards is a child component of the CartPage component.
 * This component shows a form for applying gift cards along with a list of applied
 * Gift Cards in the shopping cart.
 *
 * @param {Object} props Component props
 * @param {Function} props.setIsCartUpdating Callback function to call when adding or removing a gift card
 * @param {Object} props.classes CSS className overrides.
 * See [giftCards.module.css]{@link https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css}
 * for a list of classes you can override.
 *
 * @returns {React.Element}
 *
 * @example <caption>Importing into your project</caption>
 * import GiftCards from '@magento/venia-ui/lib/components/CartPage/GiftCards';
 */
const GiftCards = props => {
  const talonProps = useGiftCards({
    setIsCartUpdating: props.setIsCartUpdating
  });
  const {
    applyGiftCard,
    checkBalanceData,
    checkGiftCardBalance,
    errorLoadingGiftCards,
    errorRemovingCard,
    giftCardsData,
    isLoadingGiftCards,
    isApplyingCard,
    isCheckingBalance,
    isRemovingCard,
    removeGiftCard,
    shouldDisplayCardBalance,
    shouldDisplayCardError
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(GiftCards_giftCards_module, props.classes);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const [, {
    addToast
  }] = Object(useToasts["a" /* useToasts */])();
  Object(react["useEffect"])(() => {
    if (errorRemovingCard) {
      addToast({
        type: 'error',
        icon: errorIcon,
        message: formatMessage({
          id: 'giftCards.errorRemoving',
          defaultMessage: 'Unable to remove gift card. Please try again.'
        }),
        dismissable: true,
        timeout: 7000
      });
    }
  }, [addToast, errorRemovingCard, formatMessage]);
  if (isLoadingGiftCards) {
    return /*#__PURE__*/react_default.a.createElement(indicator["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
      id: 'giftCards.loading',
      defaultMessage: 'Loading Gift Cards...'
    }));
  }
  const cardEntryErrorMessage = shouldDisplayCardError ? formatMessage({
    id: 'giftCards.errorInvalid',
    defaultMessage: 'Invalid card. Please try again.'
  }) : null;
  let appliedGiftCards = null;
  if (errorLoadingGiftCards) {
    appliedGiftCards = /*#__PURE__*/react_default.a.createElement("span", {
      className: classes.errorText
    }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
      id: 'giftCards.errorLoading',
      defaultMessage: 'There was an error loading applied gift cards. Please refresh and try again.'
    }));
  }
  if (giftCardsData.length > 0) {
    const cardList = giftCardsData.map(giftCardData => {
      const {
        code,
        current_balance
      } = giftCardData;
      return /*#__PURE__*/react_default.a.createElement(giftCard, {
        code: code,
        currentBalance: current_balance,
        isRemovingCard: isRemovingCard,
        key: code,
        removeGiftCard: removeGiftCard
      });
    });
    appliedGiftCards = /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.cards_container
    }, cardList);
  }
  const cardBalance = shouldDisplayCardBalance && /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.balance
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.price
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'giftCards.balance',
    defaultMessage: 'Balance: '
  }), /*#__PURE__*/react_default.a.createElement(price, {
    value: checkBalanceData.balance.value,
    currencyCode: checkBalanceData.balance.currency
  })));
  const containerClass = shouldDisplayCardError ? classes.card_input_container_error : classes.card_input_container;
  const cardEntryContents = /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.card
  }, /*#__PURE__*/react_default.a.createElement(field["a" /* default */], {
    classes: {
      root: classes.entry
    },
    id: classes.card,
    label: formatMessage({
      id: 'giftCards.cardNumber',
      defaultMessage: 'Gift Card Number'
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], {
    id: classes.card,
    "data-cy": "GiftCards-card",
    disabled: isApplyingCard || isCheckingBalance,
    field: "card",
    mask: value => value && value.trim(),
    maskOnBlur: true,
    message: cardEntryErrorMessage,
    placeholder: formatMessage({
      id: 'giftCards.cardEntry',
      defaultMessage: 'Enter card number'
    }),
    validate: formValidators["a" /* isRequired */]
  })), cardBalance), /*#__PURE__*/react_default.a.createElement(field["a" /* default */], {
    classes: {
      label: classes.applyLabel
    }
  }, /*#__PURE__*/react_default.a.createElement(Button_button["a" /* default */], {
    priority: 'normal',
    "data-cy": "GiftCards-apply",
    disabled: isApplyingCard,
    onClick: applyGiftCard
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'giftCards.apply',
    defaultMessage: 'Apply'
  }))), /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.check_balance_button,
    disabled: isCheckingBalance,
    onClick: checkGiftCardBalance
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'giftCards.checkBalance',
    defaultMessage: 'Check balance'
  })));
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.entryForm
  }, cardEntryContents), appliedGiftCards);
};
/* harmony default export */ var giftCards = (props => {
  return /*#__PURE__*/react_default.a.createElement(esm["b" /* Form */], {
    "data-cy": "GiftCards-form"
  }, /*#__PURE__*/react_default.a.createElement(GiftCards, props));
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/index.js


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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftCard-card_info-TFA {\n}\n\n.giftCard-balance-b7r {\n}\n\n.giftCard-code-ZJO {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCard.module.css"],"names":[],"mappings":"AAAA;AAGA;;AAEA;AAEA;;AAEA;AACA","sourcesContent":[".card_info {\n    composes: grid from global;\n    composes: gap-y-2xs from global;\n}\n\n.balance {\n    composes: text-sm from global;\n}\n\n.code {\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"card_info": "giftCard-card_info-TFA grid gap-y-2xs",
	"balance": "giftCard-balance-b7r text-sm",
	"code": "giftCard-code-ZJO"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../postcss-loader/dist/cjs.js!../../LinkButton/linkButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.module.css");
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../postcss-loader/dist/cjs.js!../../Field/field.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/Field/field.module.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftCards-root-Hgt {\n}\n\n.giftCards-errorText-5Vu {\n}\n\n.giftCards-balance-1JD {\n    grid-template-columns: max-content 1fr;\n}\n\n.giftCards-card-F61 {\n    grid-template-areas:\n        'card_entry'\n        'check_balance_button'\n        'apply_button';\n}\n\n@media (min-width: 960px) {\n    .giftCards-card-F61 {\n        grid-template-areas:\n            'card_entry apply_button'\n            'check_balance_button check_balance_button';\n    }\n}\n\n.giftCards-card_input_container-ogL {\n}\n\n/* TODO @TW: cannot compose */\n.giftCards-card_input_container_error-t6H input {\n    /* composes: border-error from global; */\n    border-color: rgb(var(--venia-global-color-red-400));\n}\n\n/* TODO @TW: cannot compose */\n.giftCards-card_input_container_error-t6H input:focus {\n    /* composes: border-gray-600 from global; */\n    border-color: rgb(var(--venia-global-color-gray-600));\n}\n\n/* TODO @TW: cannot compose */\n.giftCards-card_input_container_error-t6H p {\n    /* composes: text-error from global; */\n    color: rgb(var(--venia-global-color-error));\n    /* composes: font-semibold from global; */\n    font-weight: 600;\n}\n\n.giftCards-cards_container-ogd {\n    grid-template-columns: max-content auto;\n}\n\n.giftCards-check_balance_button-JRl {\n    grid-area: check_balance_button;\n}\n\n.giftCards-entry-e3g {\n    grid-area: card_entry;\n}\n\n.giftCards-price-k2T {\n}\n\n.giftCards-entryForm-XoW {\n}\n\n.giftCards-applyLabel-sGo {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css"],"names":[],"mappings":"AAAA;AAGA;;AAEA;AAGA;;AAEA;IAMI,sCAAsC;AAC1C;;AAEA;IAKI;;;sBAGkB;AAGtB;;AAEA;IACI;QACI;;uDAE+C;IACnD;AACJ;;AAEA;AACA;;AAEA,6BAA6B;AAC7B;IACI,wCAAwC;IACxC,oDAAoD;AACxD;;AAEA,6BAA6B;AAC7B;IACI,2CAA2C;IAC3C,qDAAqD;AACzD;;AAEA,6BAA6B;AAC7B;IACI,sCAAsC;IACtC,2CAA2C;IAC3C,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IAKI,uCAAuC;AAC3C;;AAEA;IAII,+BAA+B;AAGnC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;AACA;;AAEA;AACA;;AAEA;AAMA","sourcesContent":[".root {\n    composes: grid from global;\n    composes: gap-md from global;\n}\n\n.errorText {\n    composes: leading-normal from global;\n    composes: text-error from global;\n}\n\n.balance {\n    composes: grid from global;\n    composes: italic from global;\n    composes: items-start from global;\n    composes: pt-1.5 from global;\n    composes: text-sm from global;\n    grid-template-columns: max-content 1fr;\n}\n\n.card {\n    composes: gap-sm from global;\n    composes: grid from global;\n    composes: grid-cols-1 from global;\n    composes: items-start from global;\n    grid-template-areas:\n        'card_entry'\n        'check_balance_button'\n        'apply_button';\n\n    composes: lg_grid-cols-autoLast from global;\n}\n\n@media (min-width: 960px) {\n    .card {\n        grid-template-areas:\n            'card_entry apply_button'\n            'check_balance_button check_balance_button';\n    }\n}\n\n.card_input_container {\n}\n\n/* TODO @TW: cannot compose */\n.card_input_container_error input {\n    /* composes: border-error from global; */\n    border-color: rgb(var(--venia-global-color-red-400));\n}\n\n/* TODO @TW: cannot compose */\n.card_input_container_error input:focus {\n    /* composes: border-gray-600 from global; */\n    border-color: rgb(var(--venia-global-color-gray-600));\n}\n\n/* TODO @TW: cannot compose */\n.card_input_container_error p {\n    /* composes: text-error from global; */\n    color: rgb(var(--venia-global-color-error));\n    /* composes: font-semibold from global; */\n    font-weight: 600;\n}\n\n.cards_container {\n    composes: gap-sm from global;\n    composes: grid from global;\n    composes: items-baseline from global;\n    composes: justify-start from global;\n    grid-template-columns: max-content auto;\n}\n\n.check_balance_button {\n    composes: root from '../../LinkButton/linkButton.module.css';\n\n    composes: justify-self-center from global;\n    grid-area: check_balance_button;\n\n    composes: lg_justify-self-start from global;\n}\n\n.entry {\n    grid-area: card_entry;\n}\n\n.price {\n}\n\n.entryForm {\n}\n\n.applyLabel {\n    composes: label from '../../Field/field.module.css';\n\n    composes: hidden from global;\n\n    composes: lg_block from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "giftCards-root-Hgt grid gap-md",
	"errorText": "giftCards-errorText-5Vu leading-normal text-error",
	"balance": "giftCards-balance-1JD grid italic items-start pt-1.5 text-sm",
	"card": "giftCards-card-F61 gap-sm grid grid-cols-1 items-start lg_grid-cols-autoLast",
	"card_input_container": "giftCards-card_input_container-ogL",
	"card_input_container_error": "giftCards-card_input_container_error-t6H",
	"cards_container": "giftCards-cards_container-ogd gap-sm grid items-baseline justify-start",
	"check_balance_button": "giftCards-check_balance_button-JRl " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LinkButton_linkButton_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " justify-self-center lg_justify-self-start",
	"entry": "giftCards-entry-e3g",
	"price": "giftCards-price-k2T",
	"entryForm": "giftCards-entryForm-XoW",
	"applyLabel": "giftCards-applyLabel-sGo " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_Field_field_module_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].locals["label"] + " hidden lg_block"
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