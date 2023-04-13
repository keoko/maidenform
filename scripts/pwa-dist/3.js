(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js + 10 modules ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/edit-2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css (<- Module uses module.id) */
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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js
var useQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 3 modules
var lib = __webpack_require__("./node_modules/graphql-tag/lib/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/summary.gql.js

const GET_SUMMARY_DATA = lib["a" /* gql */]`
    query getSummaryData($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selected_payment_method {
                code
                title
            }
        }
    }
`;
/* harmony default export */ var summary_gql = ({
  getSummaryData: GET_SUMMARY_DATA
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useSummary.js




/**
 * Talon to handle summary component in payment information section of
 * the checkout page.
 *
 * @param {DocumentNode} props.queries.getSummaryData gets data from the server for rendering this component
 *
 * @returns {
 *   isLoading: Boolean,
 *   selectedPaymentMethod: {
 *      code: String,
 *      title: String
 *   }
 * }
 */
const useSummary = (props = {}) => {
  const operations = Object(shallowMerge["a" /* default */])(summary_gql, props.operations);
  const {
    getSummaryData
  } = operations;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data: summaryData,
    loading: summaryDataLoading
  } = Object(useQuery["a" /* useQuery */])(getSummaryData, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const selectedPaymentMethod = summaryData ? summaryData.cart.selected_payment_method : null;
  return {
    isLoading: summaryDataLoading,
    selectedPaymentMethod
  };
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css
var summary_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(summary_module["a" /* default */], options);



/* harmony default export */ var PaymentInformation_summary_module = (summary_module["a" /* default */].locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js + 1 modules
var indicator = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/edit-2.js
var edit_2 = __webpack_require__("./node_modules/react-feather/dist/icons/edit-2.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/braintreeSummary.gql.js

const braintreeSummary_gql_GET_SUMMARY_DATA = lib["a" /* gql */]`
    query getSummaryData($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            isBillingAddressSame @client
            paymentNonce @client
            billingAddress: billing_address {
                firstName: firstname
                lastName: lastname
                country {
                    code
                }
                street
                city
                region {
                    label
                }
                postalCode: postcode
                phoneNumber: telephone
            }
        }
    }
`;
/* harmony default export */ var braintreeSummary_gql = ({
  queries: {
    getBraintreeSummaryData: braintreeSummary_gql_GET_SUMMARY_DATA
  },
  mutations: {}
});
// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useBraintreeSummary.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




const mapBillingAddressData = rawBillingAddressData => {
  if (rawBillingAddressData) {
    const {
      street,
      country,
      region
    } = rawBillingAddressData;
    return _objectSpread(_objectSpread({}, rawBillingAddressData), {}, {
      street1: street[0],
      street2: street[1],
      country: country.code,
      state: region.label
    });
  } else {
    return {};
  }
};

/**
 * Talon for the braintree summary view.
 *
 * @param {DocumentNode} props.operations operations used by this summary component
 *
 * @returns {
 *   billingAddress: {
 *      firstName: String,
 *      lastName: String,
 *      country: String,
 *      street1: String,
 *      street2: String,
 *      city: String,
 *      state: String,
 *      postalCode: String,
 *   },
 *   paymentNonce: {
 *      type: String,
 *      description: String,
 *      details: {
 *          cardType: String,
 *          lastFour: String,
 *          lastTwo: String
 *      },
 *   },
 *   isBillingAddressSame: Boolean,
 *   isLoading: Boolean,
 * }
 */
const useBraintreeSummary = (props = {}) => {
  const operations = Object(shallowMerge["a" /* default */])(braintreeSummary_gql, props.operations);
  const {
    getBraintreeSummaryData
  } = operations.queries;
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data: summaryData,
    loading: isLoading
  } = Object(useQuery["a" /* useQuery */])(getBraintreeSummaryData, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const billingAddress = summaryData ? mapBillingAddressData(summaryData.cart.billingAddress) : {};
  const isBillingAddressSame = summaryData ? summaryData.cart.isBillingAddressSame : true;
  const paymentNonce = summaryData ? summaryData.cart.paymentNonce : null;
  return {
    billingAddress,
    isBillingAddressSame,
    isLoading,
    paymentNonce
  };
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css
var braintreeSummary_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css

            

var braintreeSummary_module_options = {"injectType":"styleTag"};

braintreeSummary_module_options.insert = "head";
braintreeSummary_module_options.singleton = false;

var braintreeSummary_module_update = injectStylesIntoStyleTag_default()(braintreeSummary_module["a" /* default */], braintreeSummary_module_options);



/* harmony default export */ var PaymentInformation_braintreeSummary_module = (braintreeSummary_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.js










const BraintreeSummary = props => {
  const {
    classes: propClasses,
    onEdit
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_braintreeSummary_module, propClasses);
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const {
    billingAddress,
    isBillingAddressSame,
    isLoading,
    paymentNonce
  } = useBraintreeSummary();
  if (isLoading) {
    return /*#__PURE__*/react_default.a.createElement(indicator["a" /* default */], {
      classes: {
        root: classes.loading
      }
    }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.loadingPaymentInformation',
      defaultMessage: 'Fetching Payment Information'
    }));
  }
  const paymentSummary = paymentNonce && formatMessage({
    id: 'checkoutPage.paymentSummary',
    defaultMessage: '{cardType} ending in {lastFour}'
  }, {
    cardType: paymentNonce.details.cardType,
    lastFour: paymentNonce.details.lastFour
  });
  const billingAddressSummary = !isBillingAddressSame && billingAddress ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.address_summary_container
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.first_name
  }, billingAddress.firstName), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.last_name
  }, billingAddress.lastName)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.street1
  }, billingAddress.street1), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.street2
  }, billingAddress.street2), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.city
  }, billingAddress.city), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.state
  }, billingAddress.state)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.postalCode
  }, billingAddress.postalCode), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.country
  }, billingAddress.country))) : null;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.heading_container
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: classes.heading
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'checkoutPage.paymentInformation',
    defaultMessage: 'Payment Information'
  })), /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.edit_button,
    onClick: onEdit,
    type: "button",
    "data-cy": "BrainTreeSummary-editButton"
  }, /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: edit_2["a" /* default */],
    classes: {
      icon: classes.edit_icon
    }
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.edit_text
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'global.editButton',
    defaultMessage: 'Edit'
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.card_details_container
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.payment_type
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'global.creditCard',
    defaultMessage: 'Credit Card'
  })), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.payment_details
  }, paymentSummary)), billingAddressSummary);
};
/* harmony default export */ var braintreeSummary = (BraintreeSummary);
BraintreeSummary.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    edit_button: prop_types["string"],
    card_details_container: prop_types["string"],
    address_summary_container: prop_types["string"],
    first_name: prop_types["string"],
    last_name: prop_types["string"],
    street1: prop_types["string"],
    street2: prop_types["string"],
    city: prop_types["string"],
    postalCode: prop_types["string"],
    country: prop_types["string"],
    payment_type: prop_types["string"],
    payment_details: prop_types["string"]
  }),
  billingAddress: Object(prop_types["shape"])({
    firstName: prop_types["string"],
    lastName: prop_types["string"],
    country: prop_types["string"],
    street1: prop_types["string"],
    street2: prop_types["string"],
    city: prop_types["string"],
    state: prop_types["string"],
    postalCode: prop_types["string"]
  }),
  onEdit: prop_types["func"].isRequired,
  isBillingAddressSame: prop_types["bool"]
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css
var components_summary_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css

            

var summary_module_options = {"injectType":"styleTag"};

summary_module_options.insert = "head";
summary_module_options.singleton = false;

var summary_module_update = injectStylesIntoStyleTag_default()(components_summary_module["a" /* default */], summary_module_options);



/* harmony default export */ var src_components_summary_module = (components_summary_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.js









/**
 * The Summary component of the Check / Money Order payment method extension.
 */
const Summary = props => {
  const {
    onEdit
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(src_components_summary_module, props.classes);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.heading_container
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: classes.heading
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'checkoutPage.paymentInformation',
    defaultMessage: 'Payment Information'
  })), /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], {
    className: classes.edit_button,
    onClick: onEdit,
    type: "button"
  }, /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    size: 16,
    src: edit_2["a" /* default */],
    classes: {
      icon: classes.edit_icon
    }
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.edit_text
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'global.editButton',
    defaultMessage: 'Edit'
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.checkmo_details_container
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.payment_type
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'checkMo.paymentType',
    defaultMessage: 'Check / Money Order'
  }))));
};
/* harmony default export */ var summary = (Summary);
Summary.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    checkmo_details_container: prop_types["string"],
    edit_button: prop_types["string"],
    edit_icon: prop_types["string"],
    edit_text: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    payment_type: prop_types["string"]
  }),
  onEdit: prop_types["func"]
};
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summaryPaymentCollection.js


/**
 * This file is augmented at build time using the @magento/venia-ui build
 * target "summaryPagePaymentTypes", which allows third-party modules to
 * add new payment component mappings for the checkout page.
 *
 * @see [Payment definition object]{@link PaymentDefinition}
 */

/**
 * A payment definition object that describes a payment infor what be show on summary page.
 *
 * @typedef {Object} PaymentDefinition
 * @property {string} paymentCode is use to map your payment
 * @property {string} importPath Resolvable path to the component the
 *   Route component will render
 *
 * @example <caption>A custom payment method</caption>
 * const myCustomPayment = {
 *      paymentCode: 'cc',
 *      importPath: '@partner/module/path_to_your_component'
 * }
 */
// generated by export-esm-collection-loader

/* harmony default export */ var summaryPaymentCollection = ({
  braintree: braintreeSummary,
  checkmo: summary
});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.js








const summary_Summary = props => {
  const {
    classes: propClasses,
    onEdit
  } = props;
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_summary_module, propClasses);
  const talonProps = useSummary();
  const {
    isLoading,
    selectedPaymentMethod
  } = talonProps;
  if (isLoading && !selectedPaymentMethod) {
    return /*#__PURE__*/react_default.a.createElement(indicator["a" /* default */], {
      classes: {
        root: classes.loading
      }
    }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.loadingPaymentInformation',
      defaultMessage: 'Fetching Payment Information'
    }));
  }
  const hasCustomSummaryComp = Object.keys(summaryPaymentCollection).includes(selectedPaymentMethod.code);
  if (hasCustomSummaryComp) {
    const SummaryPaymentMethodComponent = summaryPaymentCollection[selectedPaymentMethod.code];
    return /*#__PURE__*/react_default.a.createElement(SummaryPaymentMethodComponent, {
      onEdit: onEdit
    });
  } else {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.root
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.heading_container
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: classes.heading
    }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
      id: 'checkoutPage.paymentInformation',
      defaultMessage: 'Payment Information'
    }))), /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.card_details_container
    }, /*#__PURE__*/react_default.a.createElement("span", {
      className: classes.payment_details
    }, selectedPaymentMethod.title)));
  }
};
/* harmony default export */ var PaymentInformation_summary = __webpack_exports__["default"] = (summary_Summary);
summary_Summary.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    heading_container: prop_types["string"],
    heading: prop_types["string"],
    card_details_container: prop_types["string"],
    payment_details: prop_types["string"]
  }),
  onEdit: prop_types["func"].isRequired
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css ***!
  \*************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".summary-root-kAa {\n    display: grid;\n    gap: 1.125rem;\n    padding: 2rem;\n}\n\n.summary-heading_container-n5- {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n.summary-heading-Mvr {\n    font-weight: 600;\n}\n\n.summary-edit_button-VMG {\n    color: rgb(var(--venia-brand-color-1-700));\n    padding: 1rem;\n    margin: -1rem;\n}\n\n.summary-edit_icon-ZO2 {\n    stroke: rgb(var(--venia-brand-color-1-700));\n}\n\n.summary-edit_text-KhS {\n}\n\n.summary-checkmo_details_container-uq4 {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.summary-payment_type-WYS {\n}\n\n@media (max-width: 960px) {\n    .summary-edit_text-KhS {\n        display: none;\n    }\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-sample-payments-checkmo/src/components/summary.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;AACA;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".root {\n    display: grid;\n    gap: 1.125rem;\n    padding: 2rem;\n}\n\n.heading_container {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n}\n\n.heading {\n    font-weight: 600;\n}\n\n.edit_button {\n    color: rgb(var(--venia-brand-color-1-700));\n    padding: 1rem;\n    margin: -1rem;\n}\n\n.edit_icon {\n    stroke: rgb(var(--venia-brand-color-1-700));\n}\n\n.edit_text {\n}\n\n.checkmo_details_container {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.payment_type {\n}\n\n@media (max-width: 960px) {\n    .edit_text {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "summary-root-kAa",
	"heading_container": "summary-heading_container-n5-",
	"heading": "summary-heading-Mvr",
	"edit_button": "summary-edit_button-VMG",
	"edit_icon": "summary-edit_icon-ZO2",
	"edit_text": "summary-edit_text-KhS",
	"checkmo_details_container": "summary-checkmo_details_container-uq4",
	"payment_type": "summary-payment_type-WYS"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../postcss-loader/dist/cjs.js!../../LoadingIndicator/indicator.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.module.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "", true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".braintreeSummary-root-yVZ {\n}\n\n.braintreeSummary-loading-SSy {\n}\n\n.braintreeSummary-heading_container-zrq {\n}\n\n.braintreeSummary-edit_button-FqH {\n}\n\n.braintreeSummary-heading-EmN {\n}\n\n.braintreeSummary-address_summary_container-xNS {\n}\n\n.braintreeSummary-first_name-tgr,\n.braintreeSummary-last_name-TLM,\n.braintreeSummary-street1-uAk,\n.braintreeSummary-street2-jEA,\n.braintreeSummary-city--Hy,\n.braintreeSummary-state-h8f,\n.braintreeSummary-postalCode-rsm,\n.braintreeSummary-country-6ly {\n}\n\n.braintreeSummary-edit_icon--gk {\n}\n\n.braintreeSummary-edit_text-osE {\n}\n\n.braintreeSummary-card_details_container-Q8K {\n}\n\n.braintreeSummary-payment_type-KCU {\n}\n\n.braintreeSummary-payment_details-eG1 {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/braintreeSummary.module.css"],"names":[],"mappings":"AAAA;AAIA;;AAEA;AAIA;;AAEA;AAIA;;AAEA;AAIA;;AAEA;AAEA;;AAEA;AAGA;;AAEA;;;;;;;;AASA;;AAEA;AAEA;;AAEA;AAIA;;AAEA;AAGA;;AAEA;AACA;;AAEA;AACA","sourcesContent":[".root {\n    composes: gap-xs from global;\n    composes: grid from global;\n    composes: p-md from global;\n}\n\n.loading {\n    composes: root from '../../LoadingIndicator/indicator.module.css';\n\n    composes: text-center from global;\n}\n\n.heading_container {\n    composes: grid from global;\n    composes: grid-cols-1 from global;\n    composes: grid-flow-col from global;\n}\n\n.edit_button {\n    composes: p-xs from global;\n    composes: -m-xs from global;\n    composes: text-brand-dark from global;\n}\n\n.heading {\n    composes: font-semibold from global;\n}\n\n.address_summary_container {\n    composes: grid from global;\n    composes: gap-y-2xs from global;\n}\n\n.first_name,\n.last_name,\n.street1,\n.street2,\n.city,\n.state,\n.postalCode,\n.country {\n    composes: pr-1 from global;\n}\n\n.edit_icon {\n    composes: stroke-brand-base from global;\n}\n\n.edit_text {\n    composes: hidden from global;\n\n    composes: lg_inline from global;\n}\n\n.card_details_container {\n    composes: grid from global;\n    composes: gap-2xs from global;\n}\n\n.payment_type {\n}\n\n.payment_details {\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "braintreeSummary-root-yVZ gap-xs grid p-md",
	"loading": "braintreeSummary-loading-SSy " + _css_loader_dist_cjs_js_ref_6_oneOf_0_1_postcss_loader_dist_cjs_js_LoadingIndicator_indicator_module_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].locals["root"] + " text-center",
	"heading_container": "braintreeSummary-heading_container-zrq grid grid-cols-1 grid-flow-col",
	"edit_button": "braintreeSummary-edit_button-FqH p-xs -m-xs text-brand-dark",
	"heading": "braintreeSummary-heading-EmN font-semibold",
	"address_summary_container": "braintreeSummary-address_summary_container-xNS grid gap-y-2xs",
	"first_name": "braintreeSummary-first_name-tgr pr-1",
	"last_name": "braintreeSummary-last_name-TLM pr-1",
	"street1": "braintreeSummary-street1-uAk pr-1",
	"street2": "braintreeSummary-street2-jEA pr-1",
	"city": "braintreeSummary-city--Hy pr-1",
	"state": "braintreeSummary-state-h8f pr-1",
	"postalCode": "braintreeSummary-postalCode-rsm pr-1",
	"country": "braintreeSummary-country-6ly pr-1",
	"edit_icon": "braintreeSummary-edit_icon--gk stroke-brand-base",
	"edit_text": "braintreeSummary-edit_text-osE hidden lg_inline",
	"card_details_container": "braintreeSummary-card_details_container-Q8K grid gap-2xs",
	"payment_type": "braintreeSummary-payment_type-KCU",
	"payment_details": "braintreeSummary-payment_details-eG1"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css ***!
  \************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".summary-root-TCE {\n}\n\n.summary-heading_container-KWq {\n}\n\n.summary-heading-sLT {\n}\n\n.summary-card_details_container-Vss {\n}\n\n.summary-payment_details-DRT {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/summary.module.css"],"names":[],"mappings":"AAAA;AAIA;;AAEA;AAIA;;AAEA;AAEA;;AAEA;AAGA;;AAEA;AACA","sourcesContent":[".root {\n    composes: gap-xs from global;\n    composes: grid from global;\n    composes: p-md from global;\n}\n\n.heading_container {\n    composes: grid from global;\n    composes: grid-cols-1 from global;\n    composes: grid-flow-col from global;\n}\n\n.heading {\n    composes: font-semibold from global;\n}\n\n.card_details_container {\n    composes: gap-2xs from global;\n    composes: grid from global;\n}\n\n.payment_details {\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "summary-root-TCE gap-xs grid p-md",
	"heading_container": "summary-heading_container-KWq grid grid-cols-1 grid-flow-col",
	"heading": "summary-heading-sLT font-semibold",
	"card_details_container": "summary-card_details_container-Vss gap-2xs grid",
	"payment_details": "summary-payment_details-DRT"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=3.js.map