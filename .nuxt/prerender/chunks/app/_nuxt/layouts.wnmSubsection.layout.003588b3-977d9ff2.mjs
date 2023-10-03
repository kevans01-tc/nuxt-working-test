import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './wnmSubNavigation-db0609e6.mjs';
import { f as useWNMHeaderStore } from '../server.mjs';
import { defineComponent, unref, useSSRContext } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-dcdeaa20.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ufo/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/hookable/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unctx/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/defu/dist/defu.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unhead/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/destr/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/scule/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/klona/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layouts.wnmSubsection.layout.003588b3",
  __ssrInlineRender: true,
  setup(__props) {
    const headerStore = useWNMHeaderStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_WnmSubNavigation = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a = unref(headerStore).subNavigation) == null ? void 0 : _a.links.length) > 0) {
        _push(ssrRenderComponent(_component_WnmSubNavigation, {
          class: "app-sub-navigation",
          navigation: unref(headerStore).subNavigation,
          "role-description": "Submenu"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".nuxt/layouts.wnmSubsection.layout.003588b3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=layouts.wnmSubsection.layout.003588b3-977d9ff2.mjs.map
