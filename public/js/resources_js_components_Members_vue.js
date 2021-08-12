(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Members_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Members",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    allMembers: "allMembers",
    user: 'currentUser'
  })),
  data: function data() {
    return {
      email: '',
      message: '',
      project: ''
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['fetchMember', 'deleteMember', 'addMember'])), {}, {
    logout: function logout() {
      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_1__.default.dispatch('logout').then(function () {
        _this.$router.push('/login');
      });
    },
    delMember: function delMember(member) {
      var att = {
        proj_id: this.$route.params.project.id,
        member: member
      };
      this.deleteMember(att);
    },
    invite: function invite(e) {
      var _this2 = this;

      e.preventDefault();
      var att = {
        project_id: this.$route.params.project.id,
        email: this.email
      };
      this.addMember(att).then(function (result) {
        if (result === 'user successfully invited') {
          _this2.$nextTick(function () {
            _this2.$bvModal.hide('addMem-modal');
          });
        } else {
          _this2.message = result;
        }
      });
    },
    resetModal: function resetModal() {
      this.email = '';
      this.message = '';
    }
  }),
  created: function created() {
    this.fetchMember(this.$route.params.project.id);
    this.project = this.$route.params.project; //this.Project_id = this.$route.params.project;
  }
});

/***/ }),

/***/ "./resources/js/components/Members.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Members.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Members.vue?vue&type=template&id=2b07bdfe& */ "./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe&");
/* harmony import */ var _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members.vue?vue&type=script&lang=js& */ "./resources/js/components/Members.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Members.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Members.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Members.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Members.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_2b07bdfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Members.vue?vue&type=template&id=2b07bdfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Members.vue?vue&type=template&id=2b07bdfe& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "h-screen  container mx-auto  grid grid-cols-5 divide-x divide-gray-200 overflow-hidden rounded-xl"
    },
    [
      _c("div", { staticClass: "col-start-1 col-end-2 p-2 bg-gray-50  " }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "text-gray-500  text-sm  flex flex-col flex-wrap items-center mt-10 w-full "
          },
          [
            _c("ul", { staticClass: "w-full " }, [
              _c(
                "li",
                { staticClass: " p-3 " },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "flex items-center justify-around w-4/5 text-gray-700",
                      attrs: { to: { name: "Dashboard" } }
                    },
                    [
                      _c("img", {
                        staticClass: "h-5 w-5",
                        attrs: { src: "/image/dashboard.svg", alt: "dashboard" }
                      }),
                      _vm._v("Dashboard")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("li", { staticClass: " p-3 " }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "flex items-center justify-around w-4/5 text-gray-700",
                    attrs: { href: "#" },
                    on: { click: _vm.logout }
                  },
                  [
                    _c("img", {
                      staticClass: "h-5 w-5 ",
                      attrs: { src: "/image/logout.svg", alt: "logout" }
                    }),
                    _vm._v("Logout")
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-start-2 col-end-6 bg-white " }, [
        _c(
          "div",
          { staticClass: "flex justify-between p-5" },
          [
            _c(
              "router-link",
              {
                staticClass: "text-gray-600 font-bold",
                attrs: {
                  to: {
                    name: "ProjectDetails",
                    params: { project: this.$route.params.project }
                  }
                }
              },
              [
                _vm._v(
                  "\n               " +
                    _vm._s(this.$route.params.project.title) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-around w-1/5" },
              [
                _c("h6", { staticClass: "text-gray-600 font-bold" }, [
                  _vm._v(" " + _vm._s(_vm.user.name))
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "rounded-full h-8 w-8",
                  attrs: { src: "/image/user.png", title: _vm.user.name }
                })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "p-5" }, [
          _c(
            "div",
            {
              staticClass:
                "text-gray-600 font-semibold flex items-center justify-between"
            },
            [
              _c("div", { staticClass: "mb-2" }, [
                _c("h6", [
                  _vm._v("Members"),
                  _c("span", { staticClass: "text-blue-500 text-sm " }, [
                    _vm._v("(" + _vm._s(_vm.allMembers.length) + ")")
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.project.can.manage
                ? _c("div", [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.addMem-modal",
                            modifiers: { "addMem-modal": true }
                          }
                        ],
                        staticClass:
                          "bg-darker flex justify-center text-sm mt-1 text-white w-24 rounded p-1"
                      },
                      [_vm._v("Add Member")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-modal",
                          {
                            ref: "modal",
                            attrs: {
                              "hide-footer": "",
                              id: "addMem-modal",
                              title: "Add New Member"
                            },
                            on: { hidden: _vm.resetModal }
                          },
                          [
                            _c(
                              "form",
                              { ref: "form", on: { submit: _vm.invite } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Email",
                                      "label-for": "email-input",
                                      "invalid-feedback": "Email is required"
                                    }
                                  },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        id: "email-input",
                                        type: "email",
                                        required: ""
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.message !== null
                                  ? _c(
                                      "p",
                                      { staticClass: "text-red-500 text-sm" },
                                      [_vm._v(" " + _vm._s(_vm.message))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass:
                                    "bg-darker text-base font-medium text-white p-2  rounded",
                                  attrs: { type: "submit", value: "Invite" }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {},
            [
              !_vm.allMembers.length
                ? _c("h3", { staticClass: "text-red-400 text-sm" }, [
                    _vm._v("No Members Yet")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-between flex-wrap mb-2"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "flex items-center justify-around flex-wrap"
                    },
                    [
                      this.$route.params.project.owner.id == _vm.user.id
                        ? _c("img", {
                            staticClass: "rounded-full w-8 h-8 bg-red-400",
                            attrs: {
                              src: "/image/user.png",
                              title: "You(Admin)"
                            }
                          })
                        : _c("img", {
                            staticClass: "rounded-full w-8 h-8 bg-red-400",
                            attrs: {
                              src: "/image/user.png",
                              title: this.$route.params.project.owner.name
                            }
                          }),
                      _vm._v(" "),
                      this.$route.params.project.owner.id == _vm.user.id
                        ? _c("h6", { staticClass: "p-2 font-bold" }, [
                            _vm._v(
                              _vm._s(this.$route.params.project.owner.name) +
                                " (You-Admin) "
                            )
                          ])
                        : _c("h6", { staticClass: "p-2 font-bold" }, [
                            _vm._v(
                              _vm._s(this.$route.params.project.owner.name) +
                                " (Admin) "
                            )
                          ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.allMembers, function(member) {
                return _c(
                  "div",
                  {
                    key: member.id,
                    staticClass:
                      "flex items-center justify-between flex-wrap mb-2"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-around flex-wrap"
                      },
                      [
                        _c("img", {
                          staticClass: "rounded-full w-8 h-8",
                          attrs: { src: "/image/user.png", title: member.name }
                        }),
                        _vm._v(" "),
                        _c("h6", { staticClass: "p-2" }, [
                          _vm._v(_vm._s(member.name))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.project.can.manage
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "bg-red-500  text-white w-14  rounded p-1",
                            on: {
                              click: function($event) {
                                return _vm.delMember(member)
                              }
                            }
                          },
                          [_vm._v("Delete")]
                        )
                      : _vm._e()
                  ]
                )
              })
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-center justify-around flex-wrap pt-2 w-full" },
      [
        _c("img", {
          staticClass: "w-16 ",
          attrs: { src: "/image/origami blue.png", alt: "" }
        }),
        _vm._v(" "),
        _c(
          "h4",
          { staticClass: "font-bold text-center text-2xl text-gray-700" },
          [_vm._v("birdboard")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: " p-3 " }, [
      _c(
        "a",
        {
          staticClass: "flex items-center justify-around w-4/5 text-gray-700",
          attrs: { href: "#" }
        },
        [
          _c("img", {
            staticClass: "h-5 w-5 ",
            attrs: { src: "/image/audience.png", alt: "setting" }
          }),
          _vm._v("Members")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: " p-3 " }, [
      _c(
        "a",
        {
          staticClass: "flex items-center justify-around w-4/5 text-gray-700",
          attrs: { href: "#" }
        },
        [
          _c("img", {
            staticClass: "h-5 w-5 ",
            attrs: { src: "/image/work-time.svg", alt: "activity" }
          }),
          _vm._v("Activity")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);