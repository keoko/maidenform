(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js + 3 modules ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useMutation.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/client/react/hooks/useQuery.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/cart.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radio.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/graphql-tag/lib/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useMutation.js
var useMutation = __webpack_require__("./node_modules/@apollo/client/react/hooks/useMutation.js");

// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js
var useQuery = __webpack_require__("./node_modules/@apollo/client/react/hooks/useQuery.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js
var useInformedFieldStateWrapper = __webpack_require__("./node_modules/@magento/peregrine/lib/hooks/hook-wrappers/useInformedFieldStateWrapper.js");

// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 3 modules
var lib = __webpack_require__("./node_modules/graphql-tag/lib/index.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/paymentMethods.gql.js

const GET_PAYMENT_METHODS = lib["a" /* gql */]`
    query getPaymentMethods($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            available_payment_methods {
                code
                title
            }
            selected_payment_method {
                code
            }
        }
    }
`;
const SET_PAYMENT_METHOD_ON_CART = lib["a" /* gql */]`
    mutation setPaymentMethodOnCart(
        $cartId: String!
        $paymentMethod: PaymentMethodInput!
    ) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: $paymentMethod }
        ) {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;
/* harmony default export */ var paymentMethods_gql = ({
  getPaymentMethodsQuery: GET_PAYMENT_METHODS,
  setPaymentMethodOnCartMutation: SET_PAYMENT_METHOD_ON_CART
});
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/cart.js
var cart = __webpack_require__("./node_modules/@magento/peregrine/lib/context/cart.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/usePaymentMethods.js






const usePaymentMethods = props => {
  const operations = Object(shallowMerge["a" /* default */])(paymentMethods_gql, props.operations);
  const {
    getPaymentMethodsQuery,
    setPaymentMethodOnCartMutation
  } = operations;
  const [setPaymentMethod] = Object(useMutation["a" /* useMutation */])(setPaymentMethodOnCartMutation);
  const [{
    cartId
  }] = Object(cart["b" /* useCartContext */])();
  const {
    data,
    loading
  } = Object(useQuery["a" /* useQuery */])(getPaymentMethodsQuery, {
    skip: !cartId,
    variables: {
      cartId
    }
  });
  const {
    value: currentSelectedPaymentMethod
  } = Object(useInformedFieldStateWrapper["a" /* default */])('selectedPaymentMethod');
  const availablePaymentMethods = data && data.cart.available_payment_methods || [];

  // If there is one payment method, select it by default.
  // If more than one, none should be selected by default.
  const defaultPaymentCode = availablePaymentMethods.length && availablePaymentMethods[0].code || null;
  const selectedPaymentCode = data && data.cart.selected_payment_method.code || null;
  const initialSelectedMethod = availablePaymentMethods.length > 1 ? selectedPaymentCode : defaultPaymentCode;
  const handlePaymentMethodSelection = Object(react["useCallback"])(element => {
    const value = element.target.value;
    setPaymentMethod({
      variables: {
        cartId,
        paymentMethod: {
          code: value,
          braintree: {
            payment_method_nonce: value,
            is_active_payment_token_enabler: false
          }
        }
      }
    });
  }, [cartId, setPaymentMethod]);
  return {
    availablePaymentMethods,
    currentSelectedPaymentMethod,
    handlePaymentMethodSelection,
    initialSelectedMethod,
    isLoading: loading
  };
};
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js + 1 modules
var radioGroup = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RadioGroup/radioGroup.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/RadioGroup/radio.js + 1 modules
var RadioGroup_radio = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/RadioGroup/radio.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css
var paymentMethods_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(paymentMethods_module["a" /* default */], options);



/* harmony default export */ var PaymentInformation_paymentMethods_module = (paymentMethods_module["a" /* default */].locals || {});
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js
var paymentMethodCollection = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethodCollection.js");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.js









const PaymentMethods = props => {
  const {
    classes: propClasses,
    onPaymentError,
    onPaymentSuccess,
    resetShouldSubmit,
    shouldSubmit
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(PaymentInformation_paymentMethods_module, propClasses);
  const talonProps = usePaymentMethods({});
  const {
    availablePaymentMethods,
    currentSelectedPaymentMethod,
    handlePaymentMethodSelection,
    initialSelectedMethod,
    isLoading
  } = talonProps;
  if (isLoading) {
    return null;
  }
  const radios = availablePaymentMethods.map(({
    code,
    title
  }) => {
    // If we don't have an implementation for a method type, ignore it.
    if (!Object.keys(paymentMethodCollection["a" /* default */]).includes(code)) {
      return;
    }
    const id = `paymentMethod--${code}`;
    const isSelected = currentSelectedPaymentMethod === code;
    const PaymentMethodComponent = paymentMethodCollection["a" /* default */][code];
    const renderedComponent = isSelected ? /*#__PURE__*/react_default.a.createElement(PaymentMethodComponent, {
      onPaymentSuccess: onPaymentSuccess,
      onPaymentError: onPaymentError,
      resetShouldSubmit: resetShouldSubmit,
      shouldSubmit: shouldSubmit
    }) : null;
    return /*#__PURE__*/react_default.a.createElement("div", {
      key: code,
      className: classes.payment_method
    }, /*#__PURE__*/react_default.a.createElement(RadioGroup_radio["a" /* default */], {
      id: id,
      label: title,
      value: code,
      classes: {
        label: classes.radio_label
      },
      checked: isSelected,
      onChange: handlePaymentMethodSelection
    }), renderedComponent);
  }).filter(paymentMethod => !!paymentMethod);
  const noPaymentMethodMessage = !radios.length ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.payment_errors
  }, /*#__PURE__*/react_default.a.createElement("span", null, formatMessage({
    id: 'checkoutPage.paymentLoadingError',
    defaultMessage: 'There was an error loading payments.'
  })), /*#__PURE__*/react_default.a.createElement("span", null, formatMessage({
    id: 'checkoutPage.refreshOrTryAgainLater',
    defaultMessage: 'Please refresh or try again later.'
  }))) : null;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(radioGroup["a" /* default */], {
    classes: {
      root: classes.radio_group
    },
    field: "selectedPaymentMethod",
    initialValue: initialSelectedMethod
  }, radios), noPaymentMethodMessage);
};
/* harmony default export */ var paymentMethods = __webpack_exports__["default"] = (PaymentMethods);
PaymentMethods.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    payment_method: prop_types["string"],
    radio_label: prop_types["string"]
  }),
  onPaymentSuccess: prop_types["func"],
  onPaymentError: prop_types["func"],
  resetShouldSubmit: prop_types["func"],
  selectedPaymentMethod: prop_types["string"],
  shouldSubmit: prop_types["bool"]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css ***!
  \*******************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".paymentMethods-root-6-M {\n}\n\n.paymentMethods-radio_group-EOw {\n}\n\n.paymentMethods-payment_method--1h {\n}\n\n/* TODO @TW: cannot compose */\n.paymentMethods-payment_method--1h:last-of-type {\n    /* composes: border-b-0 from global; */\n    border-bottom-width: 0;\n}\n\n.paymentMethods-radio_label-A8v {\n}\n\n.paymentMethods-payment_errors-3Hl {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentMethods.module.css"],"names":[],"mappings":"AAAA;AAIA;;AAEA;AAEA;;AAEA;AAMA;;AAEA,6BAA6B;AAC7B;IACI,sCAAsC;IACtC,sBAAsB;AAC1B;;AAEA;AAGA;;AAEA;AAIA","sourcesContent":[".root {\n    composes: grid from global;\n    composes: p-md from global;\n    composes: pb-s from global;\n}\n\n.radio_group {\n    composes: grid from global;\n}\n\n.payment_method {\n    composes: border-b from global;\n    composes: border-solid from global;\n    composes: border-subtle from global;\n    composes: pb-xs from global;\n    composes: pt-xs from global;\n}\n\n/* TODO @TW: cannot compose */\n.payment_method:last-of-type {\n    /* composes: border-b-0 from global; */\n    border-bottom-width: 0;\n}\n\n.radio_label {\n    composes: font-semibold from global;\n    composes: justify-self-start from global;\n}\n\n.payment_errors {\n    composes: grid from global;\n    composes: gap-2xs from global;\n    composes: text-error from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "paymentMethods-root-6-M grid p-md pb-s",
	"radio_group": "paymentMethods-radio_group-EOw grid",
	"payment_method": "paymentMethods-payment_method--1h border-b border-solid border-subtle pb-xs pt-xs",
	"radio_label": "paymentMethods-radio_label-A8v font-semibold justify-self-start",
	"payment_errors": "paymentMethods-payment_errors-3Hl grid gap-2xs text-error"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=8.js.map