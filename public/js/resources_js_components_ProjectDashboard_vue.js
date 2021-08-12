(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ProjectDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue */ "./resources/js/components/modal.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Projects",
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["allProjects"]),
  data: function data() {
    return {
      isModalVisible: false,
      att: {
        title: '',
        description: ''
      },
      title: '',
      selectedProject: ''
    };
  },
  components: {
    modal: _modal_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchProject', 'deleteProject', 'addProject', 'updateProject'])), {}, {
    onSubmit: function onSubmit(e) {
      var _this = this;

      e.preventDefault();
      this.addProject(this.att); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide('add-modal');
      });
    },
    update: function update(selectedProject) {
      var _this2 = this;

      var updProject = {
        id: selectedProject.id,
        title: selectedProject.title,
        description: 'lll'
      };
      this.updateProject(updProject);
      this.$nextTick(function () {
        _this2.$bvModal.hide('edit-modal');
      });
    },
    sendInfo: function sendInfo(project) {
      this.selectedProject = project;
    },
    showModal: function showModal() {
      this.isModalVisible = true;
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.name = '';
      this.nameState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this3 = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      } // Push the name to submitted names


      this.submittedNames.push(this.name); // Hide the modal manually

      this.$nextTick(function () {
        _this3.$bvModal.hide('modal-prevent-closing');
      });
    }
  }),
  created: function created() {
    this.fetchProject();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "modal",
  data: function data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    };
  },
  methods: {
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.name = '';
      this.nameState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      } // Push the name to submitted names


      this.submittedNames.push(this.name); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide('modal-prevent-closing');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/ProjectDashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ProjectDashboard.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDashboard.vue?vue&type=template&id=279cef34& */ "./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34&");
/* harmony import */ var _ProjectDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProjectDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/modal.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue?vue&type=template&id=478d961c& */ "./resources/js/components/modal.vue?vue&type=template&id=478d961c&");
/* harmony import */ var _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.vue?vue&type=script&lang=js& */ "./resources/js/components/modal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__.render,
  _modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectDashboard_vue_vue_type_template_id_279cef34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectDashboard.vue?vue&type=template&id=279cef34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34&");


/***/ }),

/***/ "./resources/js/components/modal.vue?vue&type=template&id=478d961c&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/modal.vue?vue&type=template&id=478d961c& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_478d961c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=template&id=478d961c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=template&id=478d961c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProjectDashboard.vue?vue&type=template&id=279cef34& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        "h-screen container mx-auto  grid grid-cols-5 divide-x divide-gray-200 overflow-hidden rounded-xl"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-start-2 col-end-5 bg-white " }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-5" },
          [
            _c(
              "div",
              {
                staticClass:
                  "text-gray-600 font-semibold flex items-center justify-between"
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.add-modal",
                          modifiers: { "add-modal": true }
                        }
                      ],
                      staticClass:
                        "bg-green-500  text-white w-28 flex items-center justify-between rounded p-1"
                    },
                    [
                      _c("img", {
                        staticClass: "h-4 w-4",
                        attrs: { src: "/image/plus.png", alt: "" }
                      }),
                      _vm._v(" Add Project\n                    ")
                    ]
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
                            id: "add-modal",
                            title: "Add New Project"
                          }
                        },
                        [
                          _c(
                            "form",
                            { ref: "form", on: { submit: _vm.onSubmit } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Title",
                                    "label-for": "title-input",
                                    "invalid-feedback": "Title is required"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: { id: "title-input", required: "" },
                                    model: {
                                      value: _vm.att.title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.att, "title", $$v)
                                      },
                                      expression: "att.title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Description",
                                    "label-for": "description-input",
                                    "invalid-feedback":
                                      "Description is required"
                                  }
                                },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "description-input",
                                      size: "lg",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.att.description,
                                      callback: function($$v) {
                                        _vm.$set(_vm.att, "description", $$v)
                                      },
                                      expression: "att.description"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass:
                                  "bg-green-400 text-base font-medium text-white p-2 rounded",
                                attrs: { type: "submit", value: "Add" }
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
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.allProjects, function(project) {
              return _c(
                "div",
                {
                  key: project.id,
                  staticClass: "flex items-center flex-wrap  p-4"
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center flex-wrap justify-between"
                      },
                      [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: project.title,
                                expression: "project.title"
                              }
                            ],
                            attrs: { type: "text", name: "task" },
                            domProps: { value: project.title },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(project, "title", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.edit-modal",
                                  modifiers: { "edit-modal": true }
                                },
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal",
                                  value: "edit-modal",
                                  expression: "'edit-modal'"
                                }
                              ],
                              attrs: { proj: "'project'" },
                              on: {
                                click: function($event) {
                                  return _vm.sendInfo(project)
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "h-5 w-5",
                                attrs: {
                                  src: "/image/edit-bg.png",
                                  alt: "edit-project"
                                }
                              })
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "self-end m-1" }, [
                      _c(
                        "button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.deleteProject(project.id)
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "h-5 w-5",
                            attrs: {
                              src: "/image/delete.png",
                              alt: "delete-project"
                            }
                          })
                        ]
                      )
                    ])
                  ])
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "modal",
                attrs: {
                  "hide-footer": "",
                  id: "edit-modal",
                  title: "Edit Project"
                }
              },
              [
                _c(
                  "form",
                  {
                    ref: "form",
                    on: {
                      submit: function($event) {
                        return _vm.update(_vm.selectedProject)
                      }
                    }
                  },
                  [
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          label: "Title",
                          "label-for": "title-input",
                          "invalid-feedback": "Title is required"
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: { id: "title-input", required: "" },
                          model: {
                            value: _vm.selectedProject.title,
                            callback: function($$v) {
                              _vm.$set(_vm.selectedProject, "title", $$v)
                            },
                            expression: "selectedProject.title"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          label: "Description",
                          "label-for": "description-input",
                          "invalid-feedback": "Description is required"
                        }
                      },
                      [
                        _c("b-form-textarea", {
                          attrs: {
                            id: "description-input",
                            size: "lg",
                            required: ""
                          },
                          model: {
                            value: _vm.selectedProject.description,
                            callback: function($$v) {
                              _vm.$set(_vm.selectedProject, "description", $$v)
                            },
                            expression: "selectedProject.description"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass:
                        "bg-green-400 text-base font-medium text-white p-2 rounded",
                      attrs: { type: "submit", value: "Edit" }
                    })
                  ],
                  1
                )
              ]
            )
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm._m(3)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-start-1 col-end-2 p-2 bg-gray-50 " }, [
      _c(
        "div",
        { staticClass: "flex items-center justify-around flex-wrap pt-2" },
        [
          _c("img", {
            staticClass: "w-16 ",
            attrs: { src: "/image/logo-transparent.png", alt: "" }
          }),
          _vm._v(" "),
          _c(
            "h4",
            { staticClass: "font-semibold text-center text-2xl text-gray-700" },
            [_vm._v("birdboard")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "text-gray-500  text-sm  flex flex-col flex-wrap items-center mt-10 w-full "
        },
        [
          _c("ul", { staticClass: "w-full " }, [
            _c("li", { staticClass: " p-3  " }, [
              _c(
                "a",
                {
                  staticClass: "flex items-center justify-around w-4/5",
                  attrs: { href: "projectDashboard.html" }
                },
                [
                  _c("img", {
                    staticClass: "h-5 w-5",
                    attrs: { src: "/image/dashboard.svg", alt: "dashboard" }
                  }),
                  _vm._v("Dashboard")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: " p-3 " }, [
              _c(
                "a",
                {
                  staticClass: "flex items-center justify-around w-4/5",
                  attrs: { href: "member.html" }
                },
                [
                  _c("img", {
                    staticClass: "h-5 w-5",
                    attrs: { src: "/image/audience.png", alt: "setting" }
                  }),
                  _vm._v("Members")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: " p-3 " }, [
              _c(
                "a",
                {
                  staticClass: "flex items-center justify-around w-4/5",
                  attrs: { href: "#" }
                },
                [
                  _c("img", {
                    staticClass: "h-5 w-5",
                    attrs: { src: "/image/work-time.svg", alt: "activity" }
                  }),
                  _vm._v("Activity")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: " p-3 " }, [
              _c(
                "a",
                {
                  staticClass: "flex items-center justify-around w-4/5",
                  attrs: { href: "#" }
                },
                [
                  _c("img", {
                    staticClass: "h-5 w-5",
                    attrs: { src: "/image/logout.svg", alt: "logout" }
                  }),
                  _vm._v("Logout")
                ]
              )
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between p-5" }, [
      _c("h5", { staticClass: "text-gray-600 font-bold" }, [
        _vm._v("Projects Dashboard")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "h-8 w-8 flex items-center justify-center" }, [
        _c("img", {
          staticClass: "rounded-full",
          attrs: { src: "/image/user.png", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h6", [_vm._v("Projects")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          " bg-white p-4 col-start-5 col-end-6 text-left text-xl font-semibold text-gray-600 "
      },
      [
        _c("div", { staticClass: " h-full" }, [
          _c("h3", [_vm._v("Avtivity Feed")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=template&id=478d961c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal.vue?vue&type=template&id=478d961c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modal-prevent-closing",
              modifiers: { "modal-prevent-closing": true }
            }
          ]
        },
        [_vm._v("Open Modal")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { id: "modal-prevent-closing", title: "Submit Your Name" },
          on: { show: _vm.resetModal, hidden: _vm.resetModal, ok: _vm.handleOk }
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.handleSubmit.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Name",
                    "label-for": "name-input",
                    "invalid-feedback": "Name is required",
                    state: _vm.nameState
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "name-input",
                      state: _vm.nameState,
                      required: ""
                    },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);