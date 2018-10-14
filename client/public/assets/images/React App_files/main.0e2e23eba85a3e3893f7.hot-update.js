webpackHotUpdate("main",{

/***/ "./src/pages/Todays_Medication/Todays_Medication.js":
/*!**********************************************************!*\
  !*** ./src/pages/Todays_Medication/Todays_Medication.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Todays_Medication_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Todays_Medication.css */ "./src/pages/Todays_Medication/Todays_Medication.css");
/* harmony import */ var _Todays_Medication_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Todays_Medication_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _utilities_API__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/API */ "./src/utilities/API.js");
/* harmony import */ var _utilities_API2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/API2 */ "./src/utilities/API2.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mongoose */ "../node_modules/mongoose/browser.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/Admin/Desktop/code/dorisrx/client/src/pages/Todays_Medication/Todays_Medication.js";


/* Import Components */
// import CheckBox from "../../components/checkBox/CheckBox";
// import TextArea from "../../components/textArea/TextArea";
// import Select from "../../components/select/Select";






 // import {
//   Row, Col, Card, CardBlock, Container, CardTitle, CardText
// } from 'reactstrap';
// function time() {
//   var early = false
//   var middle = false
//   var late = false
// if (early === true) {
//   render(this.state.drugName, this.state.drugDose, this.state.bottlePartialQuantity -1 )
// }
// }

var TodaysMedication =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodaysMedication, _Component);

  function TodaysMedication(props) {
    var _this;

    Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodaysMedication);

    _this = Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodaysMedication).call(this, props)); // component did mount goes below the states.

    _this.loadInventory = function () {
      _utilities_API2__WEBPACK_IMPORTED_MODULE_11__["default"].getInventories().then(function (res) {
        return _this.setState({
          inventory: res.data,
          drugName: "",
          bottleFullQuantity: "",
          bottlePartialQuantity: "",
          drugDose: "",
          drugFrequency: ""
        });
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.loadDrugs = function () {
      _utilities_API__WEBPACK_IMPORTED_MODULE_10__["default"].getDrugs().then(function (res) {
        return _this.setState({
          drugs: res.data
        });
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.state = {
      inventory: [],
      drugname: "",
      bottleFullQuantity: "",
      bottlePartialQuantity: "",
      drugDose: "",
      drugFrequency: ""
    };
    _this.handleFormSubmit = _this.handleFormSubmit.bind(Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_Admin_Desktop_code_dorisrx_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodaysMedication, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInventory();
      this.loadDrugs();
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(drugName, quantity, dose) {
      console.log(drugName);
      console.log(quantity);
      console.log(dose);
      console.log(this.state);
    } // pickImage = (drugForm)=> {
    //   let image;
    //   if(drugForm === 'capsule') {
    //     image = 'images/capsule.png'
    //   }
    //   return image;
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var early = this.state.inventory.filter(function (drug) {
        return drug.early === true || drug.early === "true";
      });
      var mid = this.state.inventory.filter(function (drug) {
        return drug.mid === true || drug.mid === "true";
      });
      var late = this.state.inventory.filter(function (drug) {
        return drug.late === true || drug.late === "true";
      }); // console.log("mid mid", mid);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "test col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        id: "times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Morning Medications"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Drug Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Dose"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Drug Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, early.map(function (inventory) {
        return (//   key={inventory._id}
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
            key: inventory._id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            className: "link",
            to: {
              pathname: "/Detail",
              state: {
                drugName: inventory.drugName
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, inventory.drugName)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            className: "link",
            to: "/New_Medication",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, inventory.drugDose)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            className: "link",
            to: "/New_Medication",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, inventory.drugForm)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "tButton",
            action: _this2.handleFormSubmit,
            type: "primary",
            title: "Taken",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          })))
        );
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "test col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        id: "times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Midday Medications"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Drug Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Dose"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Drug Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, mid.map(function (inventory) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: inventory._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: {
            pathname: "/Detail",
            state: {
              drugName: inventory.drugName
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, inventory.drugName)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: "/New_Medication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, inventory.drugDose)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: "/New_Medication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, inventory.drugForm)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "tButton",
          action: _this2.handleFormSubmit,
          type: "primary",
          title: "Taken",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        })));
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "test col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        id: "times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Evening Medications"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Drug Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Dose"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Drug Type"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, late.map(function (inventory) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          key: inventory._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: {
            pathname: "/Detail",
            state: {
              drugName: inventory.drugName
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, inventory.drugName)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: "/New_Medication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, inventory.drugDose)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          className: "link",
          to: "/New_Medication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, inventory.drugForm)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          action: _this2.handleFormSubmit.bind(_this2, inventory.drugName, inventory.currentQuantity, inventory.drugDose),
          type: "primary",
          title: "Taken",
          drugName: inventory.drugName,
          quantity: inventory.currentQuantity,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        })));
      }))))));
    }
  }]);

  return TodaysMedication;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodaysMedication);

/***/ })

})
//# sourceMappingURL=main.0e2e23eba85a3e3893f7.hot-update.js.map