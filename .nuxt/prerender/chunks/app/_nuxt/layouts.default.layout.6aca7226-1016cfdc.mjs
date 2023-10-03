import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-dcdeaa20.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_1$2 } from './wnmSubNavigation-db0609e6.mjs';
import { _ as _export_sfc, f as useWNMHeaderStore, b as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/h3/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/devalue/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ufo/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/destr/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/hookable/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/scule/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/klona/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/defu/dist/defu.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ohash/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/pathe/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unified/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-character/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/slugify/slugify.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-parse/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-rehype/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/hast-util-to-string/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/github-slugger/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/detab/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-emoji/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-gfm/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-external-links/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-raw/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unist-util-visit/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unhead/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unctx/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue-router/dist/vue-router.node.mjs';

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
