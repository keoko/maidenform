(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js + 2 modules ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/context/app.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-feather/dist/icons/x.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Portal/portal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-intl/lib/src/components/message.js */
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

// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__("./node_modules/react-feather/dist/icons/x.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/context/app.js
var app = __webpack_require__("./node_modules/@magento/peregrine/lib/context/app.js");

// CONCATENATED MODULE: ./node_modules/@magento/peregrine/lib/talons/CheckoutPage/ShippingInformation/useEditModal.js

const useEditModal = () => {
  const [{
    drawer
  }, {
    closeDrawer
  }] = Object(app["b" /* useAppContext */])();
  const isOpen = drawer === 'shippingInformation.edit';
  return {
    handleClose: closeDrawer,
    isOpen
  };
};
// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Icon/icon.js + 1 modules
var icon = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Icon/icon.js");

// EXTERNAL MODULE: ./src/components/Portal/portal.js
var portal = __webpack_require__("./src/components/Portal/portal.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js + 8 modules
var addressForm = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/AddressForm/addressForm.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css
var editModal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editModal_module["a" /* default */], options);



/* harmony default export */ var ShippingInformation_editModal_module = (editModal_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.js










const EditModal = props => {
  const {
    classes: propClasses,
    shippingData,
    onSuccess
  } = props;
  const talonProps = useEditModal();
  const {
    handleClose,
    isOpen
  } = talonProps;
  const classes = Object(shallowMerge["a" /* default */])(ShippingInformation_editModal_module, propClasses);
  const rootClass = isOpen ? classes.root_open : classes.root;

  // Unmount the form to force a reset back to original values on close
  const bodyElement = isOpen ? /*#__PURE__*/react_default.a.createElement(addressForm["a" /* default */], {
    onSuccess: onSuccess,
    afterSubmit: handleClose,
    onCancel: handleClose,
    shippingData: shippingData
  }) : null;
  return /*#__PURE__*/react_default.a.createElement(portal["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("aside", {
    className: rootClass
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: classes.headerText
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'checkoutPage.editShippingInfo',
    defaultMessage: 'Edit Shipping Information'
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: classes.closeButton,
    onClick: handleClose
  }, /*#__PURE__*/react_default.a.createElement(icon["a" /* default */], {
    src: x["a" /* default */]
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.body
  }, bodyElement)));
};
/* harmony default export */ var editModal = __webpack_exports__["default"] = (EditModal);
EditModal.propTypes = {
  classes: Object(prop_types["shape"])({
    root: prop_types["string"],
    root_open: prop_types["string"],
    body: prop_types["string"],
    header: prop_types["string"],
    headerText: prop_types["string"]
  }),
  shippingData: prop_types["object"]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".editModal-root-LlS {\n    transform: scale(1.15);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n\n    /* TODO @TW: review (B6) */\n    /* composes: invisible from global; */\n    visibility: hidden;\n}\n\n@media (max-width: 959px) {\n    .editModal-root-LlS {\n        transform: translate3d(100%, 0, 0);\n    }\n}\n\n@media (min-width: 960px) {\n    /* TODO @TW: review */\n    .editModal-root-LlS {\n        left: calc(50% - 370px);\n    }\n}\n\n.editModal-root_open-kYG {\n    transform: scale(1);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n\n    /* TODO @TW: review (B6) */\n    /* composes: visible from global; */\n    visibility: visible;\n}\n\n@media (max-width: 959px) {\n    .editModal-root_open-kYG {\n\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n.editModal-body-TWL {\n}\n\n.editModal-header-VHx {\n}\n\n.editModal-headerText-kqq {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/CheckoutPage/ShippingInformation/editModal.module.css"],"names":[],"mappings":"AAAA;IAeI,sBAAsB;IACtB,0BAA0B;IAC1B,wDAAwD;IACxD,mDAAmD;;IAEnD,0BAA0B;IAC1B,qCAAqC;IACrC,kBAAkB;AAMtB;;AAEA;IACI;QACI,kCAAkC;IACtC;AACJ;;AAEA;IACI,qBAAqB;IACrB;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IAKI,mBAAmB;IACnB,0BAA0B;IAC1B,uDAAuD;;IAEvD,0BAA0B;IAC1B,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI;;QAGI,+BAA+B;IACnC;AACJ;;AAEA;AAMA;;AAEA;AAWA;;AAEA;AAGA","sourcesContent":[".root {\n    composes: bg-white from global;\n    composes: bottom-0 from global;\n    composes: fixed from global;\n    composes: grid from global;\n    composes: grid-rows-autoFirst from global;\n    composes: h-full from global;\n    composes: left-auto from global;\n    composes: max-w-modal from global;\n    composes: opacity-0 from global;\n    composes: overflow-hidden from global;\n    composes: right-0 from global;\n    composes: top-0 from global;\n    composes: w-full from global;\n    composes: z-dialog from global;\n    transform: scale(1.15);\n    transition-duration: 192ms;\n    transition-timing-function: var(--venia-global-anim-out);\n    transition-property: opacity, transform, visibility;\n\n    /* TODO @TW: review (B6) */\n    /* composes: invisible from global; */\n    visibility: hidden;\n\n    composes: lg_h-auto from global;\n    composes: lg_max-h-modal from global;\n    composes: lg_max-w-[740px] from global;\n    composes: lg_top-[5vh] from global;\n}\n\n@media (max-width: 959px) {\n    .root {\n        transform: translate3d(100%, 0, 0);\n    }\n}\n\n@media (min-width: 960px) {\n    /* TODO @TW: review */\n    .root {\n        left: calc(50% - 370px);\n    }\n}\n\n.root_open {\n    composes: root;\n\n    composes: opacity-100 from global;\n    composes: shadow-modal from global;\n    transform: scale(1);\n    transition-duration: 224ms;\n    transition-timing-function: var(--venia-global-anim-in);\n\n    /* TODO @TW: review (B6) */\n    /* composes: visible from global; */\n    visibility: visible;\n}\n\n@media (max-width: 959px) {\n    .root_open {\n        composes: root;\n\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n.body {\n    composes: overflow-auto from global;\n    composes: px-xs from global;\n    composes: py-2xs from global;\n\n    composes: lg_px-md from global;\n}\n\n.header {\n    composes: border-b from global;\n    composes: border-solid from global;\n    composes: border-subtle from global;\n    composes: grid from global;\n    composes: grid-flow-col from global;\n    composes: justify-between from global;\n    composes: p-3.5 from global;\n\n    composes: lg_px-md from global;\n    composes: lg_py-3.5 from global;\n}\n\n.headerText {\n    composes: self-center from global;\n    composes: text-subtle from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "editModal-root-LlS bg-white bottom-0 fixed grid grid-rows-autoFirst h-full left-auto max-w-modal opacity-0 overflow-hidden right-0 top-0 w-full z-dialog lg_h-auto lg_max-h-modal lg_max-w-[740px] lg_top-[5vh]",
	"root_open": "editModal-root_open-kYG editModal-root-LlS bg-white bottom-0 fixed grid grid-rows-autoFirst h-full left-auto max-w-modal opacity-0 overflow-hidden right-0 top-0 w-full z-dialog lg_h-auto lg_max-h-modal lg_max-w-[740px] lg_top-[5vh] opacity-100 shadow-modal editModal-root-LlS bg-white bottom-0 fixed grid grid-rows-autoFirst h-full left-auto max-w-modal opacity-0 overflow-hidden right-0 top-0 w-full z-dialog lg_h-auto lg_max-h-modal lg_max-w-[740px] lg_top-[5vh]",
	"body": "editModal-body-TWL overflow-auto px-xs py-2xs lg_px-md",
	"header": "editModal-header-VHx border-b border-solid border-subtle grid grid-flow-col justify-between p-3.5 lg_px-md lg_py-3.5",
	"headerText": "editModal-headerText-kqq self-center text-subtle"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=0.js.map