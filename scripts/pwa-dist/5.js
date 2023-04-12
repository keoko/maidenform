(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js + 3 modules ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/peregrine/lib/util/shallowMerge.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Field/field.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/GoogleReCaptcha/googleReCaptcha.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/Password/password.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/combineValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@magento/venia-ui/lib/util/formValidators.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css (<- Module uses module.id) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css (<- Module uses module.id) */
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

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/@magento/peregrine/lib/util/shallowMerge.js
var shallowMerge = __webpack_require__("./node_modules/@magento/peregrine/lib/util/shallowMerge.js");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__("./node_modules/react-intl/lib/src/components/message.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Field/field.js + 1 modules
var field = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Field/field.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js + 1 modules
var linkButton = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/LinkButton/linkButton.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Password/password.js + 2 modules
var Password_password = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Password/password.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js + 1 modules
var textInput = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/TextInput/textInput.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/formValidators.js
var formValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/formValidators.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/util/combineValidators.js
var combineValidators = __webpack_require__("./node_modules/@magento/venia-ui/lib/util/combineValidators.js");

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css
var editForm_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css

            

var options = {"injectType":"styleTag"};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editForm_module["a" /* default */], options);



/* harmony default export */ var AccountInformationPage_editForm_module = (editForm_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.js











const EditForm = props => {
  const {
    classes: propClasses,
    handleChangePassword,
    shouldShowNewPassword
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AccountInformationPage_editForm_module, propClasses);
  const maybeNewPasswordField = shouldShowNewPassword ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.newPassword
  }, /*#__PURE__*/react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "newPassword",
    label: formatMessage({
      id: 'global.newPassword',
      defaultMessage: 'New Password'
    }),
    validate: Object(combineValidators["a" /* default */])([formValidators["c" /* isRequired */], [formValidators["a" /* hasLengthAtLeast */], 8], formValidators["d" /* validatePassword */], [formValidators["b" /* isNotEqualToField */], 'password']]),
    isToggleButtonHidden: false,
    "data-cy": "newPassword"
  })) : null;
  const maybeChangePasswordButton = !shouldShowNewPassword ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.changePasswordButtonContainer,
    "data-cy": "editForm-changePasswordButtonContainer"
  }, /*#__PURE__*/react_default.a.createElement(linkButton["a" /* default */], {
    classes: classes.changePasswordButton,
    type: "button",
    onClick: handleChangePassword,
    "data-cy": "linkButton-root"
  }, /*#__PURE__*/react_default.a.createElement(message["a" /* default */], {
    id: 'global.changePassword',
    defaultMessage: 'Change Password'
  }))) : null;
  const passwordLabel = shouldShowNewPassword ? formatMessage({
    id: 'global.currentPassword',
    defaultMessage: 'Current Password'
  }) : formatMessage({
    id: 'global.password',
    defaultMessage: 'Password'
  });
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.firstname
  }, /*#__PURE__*/react_default.a.createElement(field["a" /* default */], {
    id: "firstname",
    label: formatMessage({
      id: 'global.firstName',
      defaultMessage: 'First Name'
    })
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], {
    field: "firstname",
    validate: formValidators["c" /* isRequired */],
    "data-cy": "firstname"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.lastname
  }, /*#__PURE__*/react_default.a.createElement(field["a" /* default */], {
    id: "lastname",
    label: formatMessage({
      id: 'global.lastName',
      defaultMessage: 'Last Name'
    })
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], {
    field: "lastname",
    validate: formValidators["c" /* isRequired */],
    "data-cy": "lastname"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.email
  }, /*#__PURE__*/react_default.a.createElement(field["a" /* default */], {
    id: "email",
    label: formatMessage({
      id: 'global.email',
      defaultMessage: 'Email'
    })
  }, /*#__PURE__*/react_default.a.createElement(textInput["a" /* default */], {
    field: "email",
    validate: formValidators["c" /* isRequired */],
    "data-cy": "email"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.password
  }, /*#__PURE__*/react_default.a.createElement(Password_password["a" /* default */], {
    fieldName: "password",
    label: passwordLabel,
    validate: formValidators["c" /* isRequired */],
    autoComplete: "current-password",
    isToggleButtonHidden: false,
    "data-cy": "password"
  })), maybeNewPasswordField), maybeChangePasswordButton);
};
/* harmony default export */ var editForm = (EditForm);
EditForm.propTypes = {
  classes: Object(prop_types["shape"])({
    changePasswordButton: prop_types["string"],
    changePasswordButtonContainer: prop_types["string"],
    root: prop_types["string"],
    field: prop_types["string"],
    email: prop_types["string"],
    firstname: prop_types["string"],
    lastname: prop_types["string"],
    buttons: prop_types["string"],
    passwordLabel: prop_types["string"],
    password: prop_types["string"],
    newPassword: prop_types["string"]
  })
};
// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/FormError/formError.js + 5 modules
var formError = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/FormError/formError.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js + 2 modules
var dialog = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/Dialog/dialog.js");

// EXTERNAL MODULE: ./node_modules/@magento/venia-ui/lib/components/GoogleReCaptcha/googleReCaptcha.js + 1 modules
var googleReCaptcha = __webpack_require__("./node_modules/@magento/venia-ui/lib/components/GoogleReCaptcha/googleReCaptcha.js");

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css
var editModal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css");

// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css

            

var editModal_module_options = {"injectType":"styleTag"};

editModal_module_options.insert = "head";
editModal_module_options.singleton = false;

var editModal_module_update = injectStylesIntoStyleTag_default()(editModal_module["a" /* default */], editModal_module_options);



/* harmony default export */ var AccountInformationPage_editModal_module = (editModal_module["a" /* default */].locals || {});
// CONCATENATED MODULE: ./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.js









const EditModal = props => {
  const {
    classes: propClasses,
    formErrors,
    onCancel,
    onChangePassword,
    onSubmit,
    initialValues,
    isDisabled,
    isOpen,
    shouldShowNewPassword,
    recaptchaWidgetProps
  } = props;
  const {
    formatMessage
  } = Object(useIntl["a" /* default */])();
  const classes = Object(shallowMerge["a" /* default */])(AccountInformationPage_editModal_module, propClasses);
  const dialogFormProps = {
    initialValues
  };
  return /*#__PURE__*/react_default.a.createElement(dialog["a" /* default */], {
    classes: {
      body: classes.bodyEditAccountInformation
    },
    confirmText: 'Save',
    formProps: dialogFormProps,
    isOpen: isOpen,
    onCancel: onCancel,
    onConfirm: onSubmit,
    shouldDisableAllButtons: isDisabled,
    shouldDisableConfirmButton: isDisabled,
    shouldUnmountOnHide: true,
    title: formatMessage({
      id: 'accountInformationPage.editAccount',
      defaultMessage: 'Edit Account Information'
    })
  }, /*#__PURE__*/react_default.a.createElement(formError["a" /* default */], {
    classes: {
      root: classes.errorContainer
    },
    errors: formErrors
  }), /*#__PURE__*/react_default.a.createElement(editForm, {
    handleChangePassword: onChangePassword,
    shouldShowNewPassword: shouldShowNewPassword
  }), /*#__PURE__*/react_default.a.createElement(googleReCaptcha["a" /* default */], recaptchaWidgetProps));
};
/* harmony default export */ var editModal = __webpack_exports__["default"] = (EditModal);
EditModal.propTypes = {
  classes: Object(prop_types["shape"])({
    errorContainer: prop_types["string"]
  }),
  formErrors: prop_types["array"],
  handleCancel: prop_types["func"],
  handleSubmit: prop_types["func"],
  initialValues: prop_types["object"],
  isDisabled: prop_types["bool"],
  isOpen: prop_types["bool"],
  recaptchaWidgetProps: Object(prop_types["shape"])({
    containerElement: prop_types["func"],
    shouldRender: prop_types["bool"]
  })
};

/***/ }),

/***/ "./node_modules/@magento/venia-ui/lib/util/combineValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@magento/venia-ui/lib/util/combineValidators.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The function purpose is to group validation callbacks into a chain within single callback function.
 *
 * The single callback function should be passed as `validation` prop to an input component. It's being
 * called by the React Controller on a form submit.
 * The `callbacks` param is the array contains validators. Each validator should be either function or array. In case of a
 * validator is a function it is called the same way as React Controller does, with a field `value` and a form `values` params. If
 * the validator is an array, this means that it is extended validator which requires additional param for configuration.
 * The first index of that array should be a extended validator function, the second index is extended param, which is needed for
 * that function. So the function is called with three params on the form submit, with a field `value`, a form `values`
 * and an `extended param`.
 *
 * Example usage of the function:
 *
 * <input validate={combine([
 * foo
 * ])} .../>
 *
 * foo - validation function
 * It will be called on form submitting within chain as:
 * `foo(value, values)`
 *
 * Example usage of the function with extended callback:
 *
 * <input validate={combine([
 * [foo, bar]
 * ])} .../>
 *
 * foo - extended validator
 * bar - additional param
 * It will be called on form submitting within chain as:
 * `foo(value, values, bar)`
 *
 * Each callback being called one after another, according to their index in callbacks array, if one item returned the error
 * message, validation is failed, and rest validator are not supposed to be called.
 *
 * @param {Array} callbacks
 * @return {function(value, values): *}
 */
/* harmony default export */ __webpack_exports__["a"] = (callbacks => {
  if (callbacks == null || !Array.isArray(callbacks)) {
    throw new Error('Expected `callbacks` to be array.');
  }
  return (value, values) => {
    let result = null;
    for (let i = 0; i < callbacks.length; i++) {
      const callback = callbacks[i];
      if (callback == null || !Array.isArray(callback) && typeof callback !== 'function') {
        throw new Error('Expected `callbacks[' + i + ']` to be array or function.');
      }
      if (Array.isArray(callback)) {
        const [extendedCallback, extendedParam] = callback;
        if (typeof extendedCallback !== 'function') {
          throw new Error('Expected `callbacks[' + i + '][0]` to be function.');
        }
        result = extendedCallback(value, values, extendedParam);
      } else {
        result = callback(value, values);
      }
      if (result) {
        break;
      }
    }
    return result;
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css ***!
  \****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".editForm-root-QAH {\n}\n\n.editForm-field-JTM {\n}\n\n.editForm-email-WKv,\n.editForm-passwordLabel-8vp {\n}\n\n.editForm-buttons-YK- {\n}\n\n.editForm-changePasswordButtonContainer-D9q {\n}\n\n@media (max-width: 959px) {\n    .editForm-firstname-2yB,\n    .editForm-lastname-DCs,\n    .editForm-password-aba,\n    .editForm-newPassword-Anf {\n        grid-column: 1 / span 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editForm.module.css"],"names":[],"mappings":"AAAA;AAMA;;AAEA;AAEA;;AAEA;;AAGA;;AAEA;AAOA;;AAEA;AAEA;;AAEA;IACI;;;;QAII,uBAAuB;IAC3B;AACJ","sourcesContent":[".root {\n    composes: gap-x-2xs from global;\n    composes: gap-y-sm from global;\n    composes: grid from global;\n    composes: grid-cols-2 from global;\n    composes: w-full from global;\n}\n\n.field {\n    composes: col-end-span2 from global;\n}\n\n.email,\n.passwordLabel {\n    composes: field;\n}\n\n.buttons {\n    composes: field;\n    composes: gap-xs from global;\n    composes: grid from global;\n    composes: grid-flow-col from global;\n    composes: justify-self-center from global;\n    composes: p-xs from global;\n}\n\n.changePasswordButtonContainer {\n    composes: pt-xs from global;\n}\n\n@media (max-width: 959px) {\n    .firstname,\n    .lastname,\n    .password,\n    .newPassword {\n        grid-column: 1 / span 2;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "editForm-root-QAH gap-x-2xs gap-y-sm grid grid-cols-2 w-full",
	"field": "editForm-field-JTM col-end-span2",
	"email": "editForm-email-WKv editForm-field-JTM col-end-span2",
	"passwordLabel": "editForm-passwordLabel-8vp editForm-field-JTM col-end-span2",
	"buttons": "editForm-buttons-YK- editForm-field-JTM col-end-span2 gap-xs grid grid-flow-col justify-self-center p-xs",
	"changePasswordButtonContainer": "editForm-changePasswordButtonContainer-D9q pt-xs",
	"firstname": "editForm-firstname-2yB",
	"lastname": "editForm-lastname-DCs",
	"password": "editForm-password-aba",
	"newPassword": "editForm-newPassword-Anf"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css ***!
  \*****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".editModal-errorContainer-53Z {\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@magento/venia-ui/lib/components/AccountInformationPage/editModal.module.css"],"names":[],"mappings":"AAAA;AAEA","sourcesContent":[".errorContainer {\n    composes: pb-xs from global;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"errorContainer": "editModal-errorContainer-53Z pb-xs"
};
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=5.js.map