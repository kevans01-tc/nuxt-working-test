import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-dcdeaa20.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_1$2 } from './wnmSubNavigation-db0609e6.mjs';
import { _ as _export_sfc, f as useWNMHeaderStore, b as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "wnmHeaderItems",
  __ssrInlineRender: true,
  props: {
    closeNav: { type: Function }
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const headerStore = useWNMHeaderStore();
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const showAuth = ref(!!((_b = (_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.wnmOptions) == null ? void 0 : _b.showAuth));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ClientOnly = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-items" }, _attrs))} data-v-391cbfec><div class="nav-main" data-v-391cbfec>`);
      _push(ssrRenderComponent(__nuxt_component_0$2, {
        class: "nav-items",
        navigation: (_a2 = unref(headerStore)) == null ? void 0 : _a2.navigation,
        onClick: ($event) => props.closeNav ? props.closeNav() : void 0
      }, null, _parent));
      _push(`</div>`);
      if (showAuth.value) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmHeaderItems.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-391cbfec"]]);
const _imports_0 = "" + buildAssetsURL("wavelo-brand-white.1ed61ef1.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "wnmHeaderTop",
  __ssrInlineRender: true,
  setup(__props) {
    const navigationEl = ref(null);
    const isNavOpen = ref(false);
    const handleKeypress = (event) => {
      var _a, _b;
      const hasActiveEl = (_a = navigationEl.value) == null ? void 0 : _a.contains(document.activeElement);
      switch (event.code) {
        case "Escape":
          closeNav();
          break;
        case "Space":
          if (!navigationEl.value && !hasActiveEl)
            break;
          (_b = document.activeElement) == null ? void 0 : _b.dispatchEvent(new Event("click"));
          closeNav();
          break;
      }
    };
    const closeNav = () => {
      if (!isNavOpen.value)
        return;
      document.removeEventListener("keydown", handleKeypress);
      isNavOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_WnmHeaderItems = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "navigationEl",
        ref: navigationEl,
        class: "header-container"
      }, _attrs))} data-v-ea300749><div class="nav-collapse" data-v-ea300749><button${ssrRenderAttr("aria-label", `${isNavOpen.value ? "Close the menu" : "Open the menu"}`)} data-v-ea300749><ion-icon name="menu-outline" data-v-ea300749></ion-icon></button></div><div class="logo" data-v-ea300749>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="Logo"${ssrRenderAttr("src", _imports_0)} data-v-ea300749${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "Logo",
                src: _imports_0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(["header-content small", `${isNavOpen.value ? "open" : ""}`])}"${ssrIncludeBooleanAttr(!isNavOpen.value) ? " inert" : ""}${ssrRenderAttr("aria-atomic", isNavOpen.value)} data-v-ea300749><div class="nav-collapse" data-v-ea300749><button class="closeNavButton"${ssrRenderAttr("aria-label", `${isNavOpen.value ? "Close the menu" : "Open the menu"}`)} data-v-ea300749><ion-icon name="close-outline" data-v-ea300749></ion-icon></button></div>`);
      _push(ssrRenderComponent(_component_WnmHeaderItems, { "close-nav": closeNav }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmHeaderTop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ea300749"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_WnmHeaderItems = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "navigationEl",
    class: "header-container"
  }, _attrs))} data-v-d89adef8><div class="logo" data-v-d89adef8>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img alt="Logo"${ssrRenderAttr("src", _imports_0)} data-v-d89adef8${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            alt: "Logo",
            src: _imports_0
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass(["header-content small"])}" data-v-d89adef8>`);
  _push(ssrRenderComponent(_component_WnmHeaderItems, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmHeaderSide.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d89adef8"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_WnmHeaderTop = __nuxt_component_0$1;
  const _component_WnmHeaderSide = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_WnmHeaderTop, null, null, _parent));
  _push(ssrRenderComponent(_component_WnmHeaderSide, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmHeaderMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_WnmHeaderMain = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))}><header>`);
  _push(ssrRenderComponent(_component_WnmHeaderMain, null, null, _parent));
  _push(`</header><main><div class="main-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><footer>`);
  ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
  _push(`</footer>`);
  ssrRenderSlot(_ctx.$slots, "notifications", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".nuxt/layouts.default.layout.6aca7226.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layouts_default_layout_6aca7226 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { layouts_default_layout_6aca7226 as default };
//# sourceMappingURL=layouts.default.layout.6aca7226-1016cfdc.mjs.map
